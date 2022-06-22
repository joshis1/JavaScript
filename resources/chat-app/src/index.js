const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const publicFolder = path.join(__dirname, '../public');

// app.use -- the directory path -- public.
app.use(express.static(publicFolder));

// app.get('/', (req, res) => {
  
//     res.sendFile(publicFolder+'/index.html');
// });


app.listen(port, ()=> {
    console.log('App is running at %s port', port);
    console.log(`Server is running at ${port} !!`)
});