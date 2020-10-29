// *important
//& some function
//~ some other stuff
//^ some other comment
//! do not use
//? question
//todo: a todo

//!----------------------------

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection') //ul
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
  //Dom LOAD EVENT - to retrieve data from local storage
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//GET TASKS FROM LS
function getTasks() {
  let tasks;
  //check if LS empty;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  //!loop through the data
  tasks.forEach(task => {
    //Create li element
    const li = document.createElement('li');
    //Add  class to li element
    li.className = 'collection-item';
    //Create text node & Append to li
    li.appendChild(document.createTextNode(task));
    //iwe retrieve each task from tasks LS array and create text node

    //Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'
    //Add icon
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append the link to the li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  });
}

//ADD TASK
function addTask(e) {
  if (taskInput.value === '') {
    alert('add a task')
  }
//todo convert to function 
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

  //Store in Local Storage 
  storeTaskInLocalStorage(taskInput.value);

  e.preventDefault();
  //Clear Input
  taskInput.value = '';

  // form.addEventListener('submit', function () {
  //   taskInput.value = "";
  // });
}

//STORE TASK TO LS
function storeTaskInLocalStorage(task) {
  let tasks;
  //check if LS empty;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//REMOVE TASK
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove(); //removes the li => parent of parent of icon tag
      //remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
  // console.log(e.target);
  //todo remove task from LS

}

//REMOVE TASK FROM LS
function removeTaskFromLocalStorage(taskItem) {
  //check if LS empty;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach((task,index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//CLEAR TASKS
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
  clearTasksFromLocalStorage();
}

//CLEAR TASKS FROM LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//FILTER TASKS
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
