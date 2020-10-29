// *important
//& some function
//~ some other stuff
//^ some other comment
//! do not use
//? question
//todo: a todo

//!----------------------------

//^ Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection') //ul
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

//Add task function
function addTask(e) {
  if (taskInput.value === '') {
    alert('add a task')
  }

  //Create li element
  const li = document.createElement('li');
  //Add  class to li element
  li.className = 'collection-item';
  //Create text node & Append to li
  li.appendChild(document.createTextNode(taskInput.value)); //whatever we type gets displayed as a li

  //Create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content'
  //Add icon
  link.innerHTML = '<i class = " fa fa-remove"></i>'
  //Append the link to the li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  e.preventDefault();
  taskInput.value = '';

  // form.addEventListener('submit', function () {
  //   taskInput.value = "";
  // });
}
