//insert into element with the ID of retrieve an onlick function that retrieves all tasks

// then the result of the function invokation needs to render to the element task-list.

// let retreive = document.getElementById("retreive").addEventListener("click", console.log("hello"))


let test = document.getElementById("retrieve");
let uList= document.getElementById('task-list');
let taskButton= document.getElementById('task-button');


function deleteItems(e) {
  let newId = e.target.id
fetch('/secret/deleteTask', {
  method: 'DELETE',
  headers : {'Content-Type': 'application/json'},
  body: JSON.stringify({_id: newId})
})
.then(res => res.json() )
.then(res => console.log(res))
}

//deleteTask

test.addEventListener("click", function(e) {
  fetch('/secret/getTasks')
  .then(response => response.json())
  .then(data => {
    $('task-list').empty();
    for(let i =0; i<data.length; i++){
        console.log(data[i]._id, 'id property')
      let list = document.createElement("li")
      let button = document.createElement("BUTTON")
      button.addEventListener("click", deleteItems)
      button.append("Delete Item")
      button.id = data[i]._id
      list.append(data[i].item + '  ', button)
      uList.append(list)
    }
  })
});


taskButton.addEventListener("click", createTask)

function createTask() {
let taskValue = document.getElementById("task").value;

fetch('/secret/postTask', {
  method: 'POST',
  headers : {'Content-Type': 'application/json'},
  body: JSON.stringify({ item: taskValue})
})
.then(res => res.json() )
.then(res => console.log(res))
}