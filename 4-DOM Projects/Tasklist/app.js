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

//^ Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
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
  link.innerHTML = '<i class="fa fa-remove"></i>'
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

//Add remove task function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove(); //removes the li => parent of parent of icon tag
    }
  }
  // console.log(e.target);
}

//Add clear tasks function
function clearTasks(e) {
  // Option 1 - delete all innerhtml from ul
  //inner html vs remove child- google article, delete all inner html is slower than looping and removing child one by one

  // taskList.innerHTML = '';

  //Option 2 - while there asre still li children in ul, loop through the children and remove them
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //Option 3 - my option,  retrieve all lis from ul as an html collection and convert them to an array so we can target each li with forEach and remove.
  //Slower than all of the above.

  // let liArr = [...taskList.children]
  // console.log(liArr);
  // console.log(taskList.children);
  // liArr.forEach(li => li.remove())

  // console.log(e.target);
}

//Add filter tasks function
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  //query selector returns a node list so we can use forEach
  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent;
    console.log(task);
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
  console.log(text);
}