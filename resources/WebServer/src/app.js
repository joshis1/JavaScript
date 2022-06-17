// core node module -- path.
const path = require('path');

//https://nodejs.org/dist/latest-v16.x/docs/api/path.html

const express = require('express');

const hbs = require('hbs');

console.log(__dirname); // current directory name

console.log(path.join(__dirname, '../public'));

console.log(__filename); // current file name.

const app = express();

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
  res.render('help', { message: 'Help the network', author: 'Shreyas' });

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

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is sunny',
    location: 'Brisbane'
  });
});

app.get('/help/*', (req, res) => {
  res.render('Pagenotfound', { title: '404', author: 'Shreyas', error: 'Help article not found' })
});


app.get('*', (req, res) => {
  res.render('Pagenotfound', { title: '404', author: 'Shreyas', error: 'My 404 Page' })
})

app.listen(3000, () => {
  console.log('App is running at port 3000');
})
