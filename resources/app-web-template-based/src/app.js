// core node module -- path.
const path = require('path');

//https://nodejs.org/dist/latest-v16.x/docs/api/path.html

const express = require('express');

const hbs = require('hbs');

const geocode = require('./utils/geocode');

const forecast = require('./utils/forecast');

console.log(__dirname); // current directory name

console.log(path.join(__dirname, '../public'));

console.log(__filename); // current file name.

const app = express();

const port = process.env.PORT || 3000;

// Define paths for express config.

const viewsPath = path.join(__dirname, '../template/views');

const partialsPath = path.join(__dirname, '../template/partials');

// instead of static path using view engine. hbs i.e. handlebars.
// setup handlebars engine and views location.
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// app.use -- the directory path -- public.
app.use(express.static(path.join(__dirname, '../public')));


// use handlebar viewing engine.
app.get('', (req, res) => {
  res.render('index', { title: 'weather App', name: 'Shreyas Joshi', author: 'Shreyas' })
});

app.get('/about', (req, res) => {

  res.render('about', { title: 'My grandparents', name: 'Madhukar Prahalad Deshpande and Vimla Deshpande', author: 'Shreyas' });
});

app.get('/help', (req, res) => {
  res.render('help', { message: 'contact me', author: 'Shreyas' });

});

// app.get('', (req, res) => {
//   res.send('<h1> Weather</h1>');
// });

// app.get('/help', (req, res) => {
//   res.send('Hello help page');
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page </h1>');
// });

//http://localhost:3000/weather?address=Brisbane
app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({ error: 'Please provide the address' });
  }
  console.log(req.query);

  geocode(req.query.address, (error, data) => {

    if (error) {
      // return and break the callback chaining.
      return res.send( {error});
    }
    console.log(data);

    // if the object is undefined then the destructuring will fail.
    // {temperature, feelslike} = {} helps to destructure.
    // = {} is a default value for the  parameter.
    // this is the default function parameters.
    forecast(data, (error, { temperature, feelslike } = {}) => {
      if (error === undefined) {
        //console.log('Data', temperature, feelslike);
        res.send({
          temperature,
          feelslike,
          address: req.query.address
        });
      }
      else {
        res.send({ error });
        console.log('Error', error);
      }
    })
  })
});

// http://localhost:3000/products?search=games&ratings=5
app.get('/products', (req, res) => {
  console.log(req.query); // { search: 'games', ratings: '5' }

  if (!req.query.search) {
    return res.send({ error: 'you must provide the search term' });
  }

  // cannot send headers after they are sent to the client.
  // the above error means that we are sending the response more than once.
  console.log(req.query.search);
  res.send('Hitting products');
})

app.get('/help/*', (req, res) => {
  res.render('Pagenotfound', { title: '404', author: 'Shreyas', error: 'Help article not found' })
});


app.get('*', (req, res) => {
  res.render('Pagenotfound', { title: '404', author: 'Shreyas', error: 'My 404 Page' })
})

app.listen(port, () => {
  console.log('App is running at port %s', port);
})
