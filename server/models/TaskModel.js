// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
// import mongoose after installing mongoose
const mongoose = require('mongoose')
// link to database with password and databse name inside URI
const myURI = 'mongodb+srv://lucas:assessment@cluster0.zhrk8.mongodb.net/Cluster0?retryWrites=true&w=majority';
// connecting to database using the URI above and using useNewUrlParser to parse the URI string for mongo to understand
mongoose.connect(myURI, {useNewUrlParser: true});
// UNCOMMENT THE LINE BELOW IF USING MONGO
//The process. env global variable is injected by the Node at runtime for your application to use
// and it represents the state of the system environment your application is in when it starts.
const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

// assigning Schema to the method schema on mongoose;
const Schema = moongose.Schema;
//task is a schema, which is the evaluated result of the instance of a new Schema
// the schema has a column called item that takes in a string which is required
// the schema has a column called created_at which takes in the current date.
const Task = new Schema({
    item: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

//creating a variable for mongoose.model invoked on Task
//we will then use this variable to be exported under module exports
// model will place into the database the collection tasks from the term Task, it lower cases and pluralizes.
const schemaTask = moongoose.model('Task', Task);


module.exports = schemaTask; // <-- export your model
