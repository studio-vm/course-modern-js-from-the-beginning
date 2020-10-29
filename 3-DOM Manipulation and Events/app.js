// *important
//& some function
//~ some other stuff
//^ some other comment
//! do not use
//? question
//todo: a todo

//~section 2----------------------------
//^ Examining the document object model
// let val;
// val = document;
// console.log(val);

// //! HTML COLLECTION - looks like an array but cannot use forEach loops
// //! Node Lists  - can use forEach

// val = document.all;
// console.log(val);
// val = document.all[15];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.url;
// val = document.characterSet;
// val = document.contentType;

// //we can select without using selectors
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.links[3].className;
// console.log(val);

// val = document.links[3].classList[0];
// console.log(val);

// val = document.images;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts; //! HTML COLLECTION
// console.log(scripts);
// let scriptsArr = Array.from(scripts);//! HTML convert collection to arr so we can loop over it
// console.log(scriptsArr);

// scriptsArr.forEach(script => {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);


// const getValue = document.getElementById('blog test');

// console.log(getValue.innerHTML);
// console.log(getValue.innerText);
// console.log(getValue.textContent);

//~section 3----------------------------
//^DOM SELECTORS
//^ SINGLE ELEMENT SELECTORS(if multiple, just grabs the first one)

// //* document.getElementById(' id name ')

// console.log(document.getElementById('task-title'));

// //! get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// //! change styling

// document.getElementById('task-title').style.background = "pink";
// document.getElementById('task-title').style.color = "white";
// document.getElementById('task-title').style.padding = "1rem";

// //! insert text
// document.getElementById('task-title').textContent = 'my task list';
// //! compress to a variable
// const taskTitle = document.getElementById('task-title')

// taskTitle.innerText = 'my task list2';
// taskTitle.innerHTML = '<span style = "color: red">Task List</span>';

// //* document.querySelector() - retrieves only the first instance

// console.log(document.querySelector('#task-title'));
// //! for ID use #
// console.log(document.querySelector('.card-title'));
// //! classe use.
// console.log(document.querySelector('h5'));
// //! for element

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue'; //!nested elements
// document.querySelector('li:last-child').style.color = 'pink';
// document.querySelector('li:last-child').textContent = 'pink';
// document.querySelector('li:nth-child(2)').innerText = "ji";
// document.querySelector('li:nth-child(2)').style.background = "pink";
// document.querySelector('li:nth-child(4)').style.color = "yellow";

// document.querySelector('li:nth-child(odd)').style.background = "grey";
// document.querySelector('li:nth-child(even)').style.background = "blue"; //! only the first one

//----------------------------

//~section 4----------------------------
//^DOM SELECTORS
//^ MULTIPLE ELEMENT SELECTORS returns HTML COLLECTION OR NODELIST

// //* document.getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// //! html collection, selects all items that have this class name 
// console.log(items);
// console.log(items[2]);

// items[2].style.color = 'pink';
// items[3].style.background = 'pink';
// items[4].textContent = 'pink';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item') //! selects all items that have this classname inside this ul element.

// console.log(listItems);

// //* document.getElementsByTagName()

// let lis = document.getElementsByTagName('li')
// console.log(lis);
// // console.log(lis[0]);

// lis[2].style.color = 'red';
// lis[4].textContent = 'red';

// //! convert HTML collection into Array

// lis = Array.from(lis);
// // lis.reverse();
// lis.forEach((li, index) => {
// 	// console.log(li.className);
// 	li.textContent = `Hello from list index ${index}, list item ${index + 1}`
// });

// console.log(lis);
// ]

//* document.querySelectorAll()

// let items = document.querySelectorAll('ul.collection li.collection-item'); //! this is not an HTML collection -this is a nodeList

// //! NODE LIST we can loop through
// items.forEach((item, index) => {
// 	item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// console.log(liOdd);

// liOdd.forEach(ele => {
// 	ele.textContent = 'Hi i am odd' 
// })
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liEven.forEach(ele => {
// 	ele.color = 'red';
// 	ele.textContent = 'I\'m even';
// })

// liEven.forEach(ele => {
// 	ele.style.background = '#ccc';
// })

// for (let i = 0; i < liOdd.length; i++) {
// 	liOdd[i].style.background = 'yellow';
// }

// console.log(items);


//~section 5----------------------------
//^ Traversing the DOM
//----------------------------

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = list;

// //!get child nodes - returns a node list - not always useful - 
// val = list.childNodes;

// //! get children element -> returns an html collection of just the elements - more useful
// val = list.children;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType; //! -> 3
// //! 1 = Element
// //! 2 = Attribute (deprecated)
// //! 3 = Text Node
// //! 8 = Comment
// //! 9 = Document itself
// //! 10 = Doctype
// console.log(val);

// val = list.children;
// // val = list.children[1].textContent = "helloooooo";
// val = list.children[1].childNodes[0].textContent = "helloo";

// console.log(val);

// //! children of children

// val = list.children[3].children[0].id = "test-link";
// console.log(val);

// //! first child
// val = list.firstChild; //! gives us a collection including text nodes
// val = list.firstElementChild; //! gives us the actual element => more use
// //! last child
// val = list.lastChild; //! gives us a collection including text nodes
// val = list.lastElementChild; //! gives us the actual element => more use
// //! count child elements
// val = list.childElementCount; //! should say 5 (5 list items)

// //! get parent nodes;
// val = listItem.parentNode; //! note parentNode (singular) - child has ONE parent
// val = listItem.parentElement; //! returns the actual parent element;
// val = listItem.parentElement.parentElement; //!returns card-action div

// //! get next sibling

// val = listItem.nextSibling; //! gives us nodes
// val = listItem.nextElementSibling; //! gives us the actual element
// val = listItem.nextElementSibling.nextElementSibling;

// //! get previous sibling

// val = listItem.previousSibling; //! gives us nodes
// val = listItem.previousElementSibling; //! null because its the first element



// console.log(val);

// val = listItem;
// // console.log(val);

//~section 6----------------------------
//^ CREATING ELEMENTS

// //!Create Element //!document.createElement()
// const li = document.createElement('li');

// //!Add class //! className
// li.className = 'collection-item';

// //! Add ID //! .id
// li.id = 'new-item';

// //! Add attribute //! setAttribute
// li.setAttribute('title', 'New Item')

// //! Create a text Node and append //! appendChild, createTextNode, textContent
// li.appendChild(document.createTextNode('Hello'))
// li.textContent = 'Hello World'

// //! create new link element inside list item
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>'

// //! Apend li as child to ul //!append child
// document.querySelector('ul.collection').appendChild(li)
// //! append link to li
// li.appendChild(link)

// console.log(link);
// console.log(li);

//~section 7----------------------------
//^ Replacing ELEMENTS

// //* create ELEMENT
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';

// newHeading.appendChild(document.createTextNode('My - Task List')) //!or
// newHeading.innerText = 'My - Task List'

// const oldHeading = document.getElementById('task-title');

// //! target parent
// const cardAction = document.querySelector('.card-action')
// console.log(cardAction);

// //! replace oldheading witn new heading in parent
// cardAction.replaceChild(newHeading, oldHeading);

// //!*REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //!Remove individual elements;
// lis[0].remove();

// //! removeChild()
// list.removeChild(lis[3]);

// console.log(newHeading);

// //* CLASSES AND ATTRIBUTES

// //! :first-child
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// console.log(link);

// //* MANIPLATING CLASSES
// let val;

// val = link.className;
// val = link.className[0] //! this doesn't work, it returns the first letter of the first class
// val = link.classList; //! returns dom token list
// val = link.classList[0]; //! returns the first class in the list

// //! ADD/ REMOVE CLASS

// link.classList.add('test-class')
// link.classList.remove('test-class')
// //! toggle?

// //* ATTRIBUTES

// val = link.getAttribute('href') //! GET
// val = link.setAttribute('href', 'http://google.com') //! SET
// val = link.hasAttribute('href') //! HAS (true or false) 
// val = link.setAttribute('title', 'Google');
// val = link.removeAttribute('title') //! REMOVE

// console.log(val);

//~section 8----------------------------

// //^ EVENT LISTENERS AND THE EVENT OBJECT

// //* EVENT TARGET

// //! pass an anonymous function
// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//    e.preventDefault(); //! prevent default behaviour - here link
//    // console.log('I clicked');
// })

// //! pass an named function
// document.querySelector('.clear-tasks').addEventListener('click', onClick);
// function onClick(e) {
//    // console.log('clicked');
//    let val;
//    val = e
//    // console.log(val);

//    val = e.target
//    val = e.target.id // no id shown because there is no id
//    val = e.target.className;
//    val = e.target.classList;
//    val = e.target.innerText = 'Hello';

//    val = e.type;
//    val = e.timeStamp;

//    //! coords relative to the window
//    val = e.clientY;
//    val = e.clientX;
   
//    //! coords relative to the element
//    val = e.offsetY;
//    val = e.offsetX;

//    console.log(val);
// }

//~section 9----------------------------
//^ MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks')
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //! CLICK
// clearBtn.addEventListener('click', runEvent);
// //! Double click
// clearBtn.addEventListener('dblclick', runEvent)
// //! MOUSEDOWN
// clearBtn.addEventListener('mousedown', runEvent)
// //! MOUSEUP
// clearBtn.addEventListener('mouseup', runEvent)
// //! MOUSEENTER
// card.addEventListener('mouseenter', runEvent) //! fires when we enter the element
// //! MOUSELEAVE
// card.addEventListener('mouseleave', runEvent)//! fires when we leave the element
// //! MOUSEOVER
// card.addEventListener('mouseover', runEvent)
// //! MOUSEOUT
// card.addEventListener('mouseout', runEvent)

// //! MOUSEMOVE
// card.addEventListener('mousemove', runEvent) //! any movement inside the element

// //! EVENT HANDLER
// function runEvent(e) {
//    e.preventDefault();
//    heading.innerHTML = `
//       <h5>
//       MouseX: ${e.offsetX}, MouseY: ${e.offsetY}
//       </h5>
//    `;
//    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
//    console.log(`EVENT type: ${e.type}`);
// }


//~section 10----------------------------
//^ KEYBOARD & INPUT EVENTS

// const form = document.getElementById('task-form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// form.addEventListener('submit', runEvent);

// //* KEYDOWN
// taskInput.addEventListener('keydown', runEvent);
// //* KEYDOWN
// taskInput.addEventListener('keyup', runEvent);
// //* KEYPRESS
// taskInput.addEventListener('keypress', runEvent);
// //* FOCUS
// taskInput.addEventListener('focus', runEvent);
// //* BLUR
// taskInput.addEventListener('blur', runEvent);
// //* CUT
// taskInput.addEventListener('cut', runEvent);
// //* PASTE
// taskInput.addEventListener('paste', runEvent);
// //* INPUT - fires all of the above
// taskInput.addEventListener('input', runEvent);

// function runEvent(e) {
//    // e.preventDefault(); 
//    //! PREVENT DEFAULT
//    // console.log(taskInput.value);
//    console.log(`EVENT TYPE: ${e.type}`);
//    // console.log(e.target.value);
//    heading.innerText = e.target.value
//    // taskInput.value = ''; 
//    //! CLEAR INPUT AFTER SUBMIT
// }

// //* CHANGE 
// //! temporarily disable materialize link in html
// const select = document.querySelector('select');
// //! 
// select.addEventListener('change', (e) => {
//    console.log('Changed', e.target.value);
// })
// //! enable materialize link in html


//~section 11----------------------------
//^ EVENT BUBLING & DELEGATION

// //* EVENT BUBBLING - puts the event listener on a child, which targets all parent elements up to the root

// // document.querySelector('.card-title').addEventListener('click', function () {
// //    console.log('card title');
// // });

// // document.querySelector('.card-content').addEventListener('click', function () {
// //    console.log('card content');
// // });

// // document.querySelector('.card').addEventListener('click', function () {
// //    console.log('card');
// // });

// // document.querySelector('.col').addEventListener('click', function () {
// //    console.log('col');
// // });


// //* EVENT DELEGATION
// //! if HTML content is injected after page loads, we must use event delegation

// //! this targets the element
// // const deleteBtn = document.querySelector('.delete-item');
// // deleteBtn.addEventListener('click', deleteItem);

// //! this targets the parent
// const ul = document.querySelector('ul.collection');
// ul.addEventListener('click', deleteItem);

// // document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//    console.log(e.target);
   
//    //! if(e.target.parentElement.className === 'delete-item secondary-content')
//    // console.log('delete itm');

//    if (e.target.parentElement.classList.contains('delete-item')) {
//       console.log('delete itm');
//       e.target.parentElement.parentElement.remove();
//    }
// }

//~section 12----------------------------
//^ LOCAL AND SESSION STORAGE

//* Local Storage
//! value hast to be a string -> jason.stringify, retrieve using json.parse

//! set local storage item - will stay until user clears, vs session storage
localStorage.setItem('name', 'John');
localStorage.setItem('age', 30);
//! get from storage
const name = localStorage.getItem('name');
const age  = localStorage.getItem('age');
console.log(name,age);

//! set session storage item -
sessionStorage.setItem('name', 'Beth');

//! remove from storage
// localStorage.removeItem('name');
//! clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
   console.log(123);
   const task = document.getElementById('task').value;
   console.log(task);

   let tasks;
   if (localStorage.getItem('tasks') === null) {
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks')); //! this is going to return a string => we need to wrap it in JSON.parse;
   }

   tasks.push(task) //! add a task to the parsed tasks array
   localStorage.setItem('tasks', JSON.stringify(tasks)) //! when we put it back into storage we must convert it back to a string.

   localStorage.setItem('task', task); //! this replaces the previous task every time
   alert('task saved')
   e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks);

tasks.forEach(task => {
   console.log(task);
});





