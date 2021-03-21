// importing a model from TaskModel
const schemaTask = require('../models/TaskModel');
// declaring taskController object that will store the methods postTask,getTasks,deleteTask
const taskController = {};
// creating a postTasks method that desctructures the request body for the property named item
// then uses the model method create to create a collection with the columns item and created_at
// if there is an error it throws the error, if it works it sends the result
taskController.postTask = (req, res) => {
    const { item } = req.body;
    schemaTask.create({ item, create_at }, (err, result) => { 
        if (err) {
            console.log('error while creating a new task', err);
            return res.status(400).json(err);
        }
        return status(200).json(result)
    })
};

// creating a getTasks method that gets all Tasks from the database
// then uses the model method find to find all the tasks, this is because the find body {} is empty, so it finds all.
// if there is an error it throws the error, if it works it sends the result
taskController.get = (req, res) => {
  schemaTask.findTasks({}, (err, result) => { 
      if (err) {
          console.log('error while finding all tasks', err);
          return res.status(400).json(err);
      }
      return status(200).json(result)
  })
};

// creating a deleteTasks method that desctructures the request body for the property named id
// then uses the model method findByIDAndDelete to to delete the collection with the same Id as the request body
// if there is an error it throws the error, if it works it sends the result
taskController.deleteTask = (req, res) => {
  const { id } = req.body;
  schemaTask.findByIdAndDelete(id, (err, result) => { 
      if (err) {
          console.log('error while deleting a task', err);
          return res.status(400).json(err);
      }
      return status(200).json(result)
  })
};


// exporting the object taskController object that will store the methods postTask,getTasks,deleteTask
module.exports = taskController;
