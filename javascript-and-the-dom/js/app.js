//problem: user interaction doesn't provide desired results.
//solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //ul .incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List item
var createNewTaskElement = function (taskString) {
  //create list item
  var listItem = document.createElement("li");
  // imput (checkbox)
  var checkBox = document.createElement("input"); //checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button .edit
  var editButton = document.createElement("button");
  //button .delete
  var deleteButton = document.createElement("button");
  //each elements, needs modifying

  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;

  //each elemnts need appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//add a new task
var addTask = function() {
  console.log("add task...");
  //create a new list iten with the text from the #new-task:
    if (taskInput.value === "") {
    alert("Can't Add blank tasks");
    } else{
      var listItem = createNewTaskElement(taskInput.value);
    //append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
  }
}
//edit an existing task
var editTask = function () {
  console.log("edit task...");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var editButton = listItem.querySelector('.edit');
  var containsClass = listItem.classList.contains("editMode");
  //if the class of the parent is .editMode
  if (containsClass) {
    //witch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
    editButton.innerText = "Edit";

  } else {
    //switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
    editButton.innerText = "Save";

}
  //toggle .editMode on the listItem
  listItem.classList.toggle("editMode");

}
//delete an existing task
var deleteTask = function () {
  console.log("delete task...");
  var listItem= this.parentNode;
  var ul = listItem.parentNode;
  //remove the parent list iten from the ul
ul.removeChild(listItem);
}
//mark a task as complete
var taskCompleted = function () {
  console.log("completed task...");
    //append the task list item to the completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}
//mark a task as incomplete
var taskIncomplete = function () {
  console.log("incomplete task...");
    //append the task list item to the incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
  console.log("bind list item events");
      //select taskListItem's children
      var checkBox = taskListItem.querySelector("input[type=checkbox]");
      var editButton = taskListItem.querySelector("button.edit");
      var deleteButton = taskListItem.querySelector("button.delete");
        // bind editTask to edit button
        editButton.onclick = editTask;
        //bind deleteTask to the delete button
        deleteButton.onclick = deleteTask;
        //bund taskCompleted to the checkbox
        checkBox.onchange = checkBoxEventHandler;
}

//set the click handler to the addTask function

  var ajaxRequest = function() {
      console.log("AJAX request");
    }
    addButton.addEventListener("click", addTask);
    addButton.addEventListener("click", ajaxRequest);

//cycle over completedTasksHolder ul list itens
for(var i = 0 ; i<completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

//cycle over incompletedTasksHolder ul list itens
for(var i = 0 ; i<incompleteTasksHolder.children.length; i++) {
          bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
            //bund events to list item's children (taskIncomplete)
}
