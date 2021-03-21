//import the express node module
const express = require('express');
//set app to invocation of express
const app = express();
//set port to port 3333
const PORT = 3333;

// imports path functionality
path = require('path');


// app . use, uses the method express.static to always serve the assets folder.
// if app.use had a path, it would only serve that specific path
app.use(express.static('assets'));


// perform get request to '/' and send the file index.html
// path . join, joins the directory name (__dirname) with the strings and combined to make the path
// '../views/index.html'
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'..','/views','index.html'));
})

// perform get request to '/secret' and send the file sercret.html
// path . join, joins the directory name (__dirname) with the strings and combined to make the path
// '../views/sercret.html'
app.get('/secret', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'..','/views','secret.html'));
})

// create server on port 3333
app.listen(PORT, () => console.log('listening on port 3333'));