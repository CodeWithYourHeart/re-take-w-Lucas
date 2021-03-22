//insert into element with the ID of retrieve an onlick function that retrieves all tasks

// then the result of the function invokation needs to render to the element task-list.

// let retreive = document.getElementById("retreive").addEventListener("click", console.log("hello"))

// assign test to the element with the ID retrieve
let getTask = document.getElementById("retrieve");
// assign test to the element with the ID task-list
let uList= document.getElementById('task-list');
// assign test to the element with the ID task-button
let taskButton= document.getElementById('task-button');


// add event listener adds to the element assigned task an onclick functionality
// on clicking there is a fetch request to the route 'secret/getTasks'
getTask.addEventListener("click", function(e) {
  fetch('/secret/getTasks')
  .then(response => response.json())
  .then(data => {
    //empty the task list to prevent over rendering the code
    $("#task-list").empty();
    // loop through the array of data
    for(let i = 0; i<data.length; i++){
        console.log(data[i]._id, 'id property')
      // assign list to the created element <li></li>
      let list = document.createElement("li")
      // assign button to the created element <button>
      let button = document.createElement("BUTTON")
      // add event listener adds to the element assigned task an onclick functionality
      // on clicking there is an invokation of the function deleteItems
      button.addEventListener("click", deleteItems)
      // append adds the text "Delete Item" to the inside of the button as text
      button.append("Delete Item")
      // button id is assigned to the data element's id
      button.id = data[i]._id
      // append add the data element's item and the above button with a unique id to the list element.
      list.append(data[i].item + '  ', button)
      // appends the uList element to add the list
      // all of the above is done per element of the data.
      uList.append(list)
    }
  })
});

//function to delete items from the database
function deleteItems(e) {
  //newId gathers the id from the element it is being called on by using the target method.
  let newId = e.target.id
  // below is a delete request to the path '/secret/deleteTask'
  // the headers are content type of json
  // the body matches the controller method that requires an object with {_id : "id"}
  // using the id we gathered from the element we inserted it into the body of the delete request
  // by using the newId variable
  // then sent the response with the thenables (.then)
fetch('/secret/deleteTask', {
  method: 'DELETE',
  headers : {'Content-Type': 'application/json'},
  body: JSON.stringify({_id: newId})
})
.then(res => res.json() )
.then(res => console.log(res))
}

//event listner for task button and create task invocation
taskButton.addEventListener("click", createTask)
// create task creates a task on the database
function createTask() {
// taskValue get the value of the input form which has an id of task.
let taskValue = document.getElementById("task").value;
// below is a fetch request to the route /secret/postTask
// with the content type json and the body of taskValue which matches our controller
// send the response using a thenable and res.json
fetch('/secret/postTask', {
  method: 'POST',
  headers : {'Content-Type': 'application/json'},
  body: JSON.stringify({ item: taskValue})
})
.then(res => res.json() )
.then(res => console.log(res))
}