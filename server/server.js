//import the express node module
const express = require('express');
//set app to invocation of express
const app = express();
//set port to port 3333
const PORT = 3333;
// ***important
// import bodyParser
var bodyParser = require('body-parser')
// body parser allows express to parse through the body that is JSON
app.use(bodyParser.json())
// imports path functionality
path = require('path');
// imports tasks controller object with methods
const taskController = require('./controllers/taskController')
// app . use, uses the method express.static to always serve the assets folder.
// if app.use had a path, it would only serve that specific path
app.use(express.static('assets'));
//not sure if needed line below
// app.use(express.urlencoded())


// perform get request to '/' and send the file index.html
// path . join, joins the directory name (__dirname) with the strings and combined to make the path
// '../views/index.html'
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'..','/views','index.html'));
})

// this deploys a get request when the route is '/secret/getTasks' and invokes the taskControllers
app.get('/secret/getTasks', taskController.getTasks, (req, res) => {
})
// this deploys a post request when the route is '/secret/postTask' and invokes the taskControllers
app.post('/secret/postTask', taskController.postTask, (req, res) => {
})
// this deploys a delete request when the route is '/secret/deleteTask' and invokes the taskControllers
app.delete('/secret/deleteTask', taskController.deleteTask, (req, res) => {
  
}) 
// perform get request to '/secret' and send the file sercret.html
// path . join, joins the directory name (__dirname) with the strings and combined to make the path
// '../views/sercret.html'
app.get('/secret', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'..','/views','secret.html'));
})

// create server on port 3333
app.listen(PORT, () => console.log('listening on port 3333'));