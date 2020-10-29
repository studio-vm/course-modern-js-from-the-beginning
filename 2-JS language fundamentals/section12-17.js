//section 12----------------------------

// const id = '100'; // = is assignment;
// console.log(id);
// //equal to ===
// if (id === 100) {
//    console.log("correct");
// } else {
//    console.log('incorrect');
// }
// //NOT equal to !== strict comparison, != comparison value, JS tries to do type coercion

// if (id !== 101) {
//    console.log("correct");
// } else {
//    console.log('incorrect');
// }

// //test if
// if (typeof id !== 'undefined') {
//    console.log(`the ID is ${id}`);
// } else {
//    console.log('No ID');
// }

// //greater or less than
// if (id >= 200) {
//    console.log('correct');
// } else {
//    console.log('incorrect');
// }

//----------------------------

// //IF ELSE
// const color = 'yellow';

// if (color === 'red') {
//    console.log('Color is red');
// } else if (color === 'blue') {
//    console.log('Color is blue');
// } else {
//    console.log('Color is not red or blue');
// }

//----------------------------

// //Logical operator
// const name = 'Steve';
// const age = 17;
// //&& AND

// if (age >= 0 && age <= 12) {
//    console.log(`${name} is a child`);
// } else if (age >= 13 && age < 19) {
//    console.log(`${name} is a teenager`);
// } else {
//    console.log(`${name} is an adult`);
// }
// //OR

// if (age < 16 || age > 65) {
//    console.log(`${name} can not run in the race`);
// } else {
//    console.log(`${name} is registered for the race`);
// }

// //TERNARY OPERATOR

// console.log(id===100? 'correct': 'incorrect'); // because id is a string
// console.log(id==100? 'correct': 'incorrect');


// // it is also possible to omit curly braces - NOT RECOMMENDED
// if (id === 100)
//    console.log('correct');
// else 
//    console.log('incorrect');

//section 13----------------------------

// //SWITCHES - another way to validate conditions

// const color = 'pink';

// switch (color) {
//    case 'red':
//       console.log('color is red');
//       break;
//    case 'blue':
//       console.log('color is blue');
//       break;
//    default:
//       console.log('color is not red or blue');
// }

// let day;
// console.log(new Date().getDay());

// switch (new Date().getDay()) {
//    case 0:
//       day = 'Sunday';
//       break;
//    case 1:
//       day = 'Monday';
//       break;
//    case 2:
//       day = 'Tuesday';
//       break;
//    case 3:
//       day = 'Wednesday';
//       break;
//    case 4:
//       day = 'Thursday';
//       break;
//    case 5:
//       day = 'Friday';
//       break;
//    case 6:
//       day = 'Saturday';
//       break;
// }
// console.log(`today is ${day}`);

//section 14----------------------------

// //Functions - blocks of code that can be defined and called(sometimes at the same time.)

// //FUNCTION DECLARATIONS (OR STATEMENTS)
// function greet() {
//    return 'Hello';
// }
// //nothing happens because we only declared the function, we must call it next
// greet(); // we called it
// console.log(greet());//we logged the called function'

// //add default arguments for function params
// function greet2(firstName = "John", lastName = 'Doe') {
//    return `Hello ${firstName} ${lastName}`
// }
// console.log(greet2('Sam'));

// //this is old school way before default arguments in params //check argument against typeof 'undefined'
// function greet3(firstName, lastName) {
//    if (typeof firstName === 'undefined') { firstName = 'John' };
//    if (typeof lastName === 'undefined') { lastName = 'Doe' };
//    return 'Hello ' + firstName + " " + lastName;
// }
// console.log(greet3('Sam'));

// //FUNCTION EXPRESSIONS assign a function to a variable, 
// // usually a named variable and anonymous function

// const square = function (x = 2) {
//    return x * x;
// }
// console.log(square());//default parameter
// console.log(square(3));

// //IMMEDIATELY INVOKED FUNCTION EXPRESSIONS = IFFE
// //to make a function /declaration/statement into an expression we wrap it in ()
// (function (name) {
//    console.log('Hello ' + name);
// })('John');
// //useful when using module patterns, can have private methods and private properties;

// //PROPERTY MEHTODS (functions inside objects)
// const todos = {
//    add: function () {
//       console.log('add TODO');
//    },
//    edit: function (id) {
//       console.log(`Edit todo ${id}`);
//    }
// }
// todos.add();
// todos.edit(22);
// //can also define methods outside the object

// todos.delete = function () {
//    console.log('Delete todo...');
// }
// todos.delete();


//section 15----------------------------

// //FOR LOOP

// for (let i = 0; i < 10; i++) {
//    console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//    if (i === 2) {
//       console.log('2 is my favourite number');
//       continue;//Number 2 has been replaced with 2 is my fav nunmber
//    }

//    if (i === 5) {
//       console.log('Stop the loop');
//       break; //breaks out of the loop
//    }
//    console.log('Number ' + i);
// }

// //WHILE LOOP // use while when its not clear how many iterations you want
// //set i variable outside the loop

// let index = 0;
// while (index < 10) {//condition goes inside ( condition )
//    console.log('Number ' + index); //do something
//    index++; //increment
// }

// //DO WHILE LOOP - will run AT LEAST ONCE no matter what

// let j = 3;
// do {
//    console.log('Number ' + j);
//    j++;
// } while (j < 5);


// const cars = ['Fort', 'Honda', 'Toyota'];
// for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i]);
//    console.log(i);
// }

// //FOREACH takes an anonymous callback function

// cars.forEach(function (car, index, array) {
//    console.log(cars[index]);
//    console.log(`${index}: ${car}`);
//    console.log(car);
// });

// //MAP - returns a different aray/object

// const users = [
//    {id: 1, name: 'John'},
//    {id: 2, name: 'Sara'},
//    {id: 3, name: 'Dana'},
//    {id: 4, name: 'Sam'},
// ]

// const ids = users.map(function (user) {
//    return user.id;
// })

// console.log(ids);

// //FOR IN LOOP (OBJECTS)

// const user = {
//    firstName: 'John',
//    lastName: 'Doe',
//    age: 40
// }

// for (let prop in user) {
//    console.log(prop);
//    console.log(`${prop} : ${user[prop]}`);
// }

//section 16----------------------------

// //Window object => document object is part of the window object;
// //Window is the global environment in browser
// //Global object is the global environment in nodeJS

// //Window methods, objects, properties

// //ALERT
// // window.alert(123);

// //PROMPT
// // let input = prompt();
// // console.log(input);

// //CONFIRM
// // if (confirm('Are you sure')) {
// //    console.log('Yes');
// // } else {
// //    console.log('No');
// // }

// let val;

// //OUTER HEIGHT AND WIDTH; (overall browser window)
// val = window.outerHeight;
// console.log(val);
// val = window.outerWidth;
// console.log(val);

// //INNER HEIGHT AND WIDTH; (inner viewport frame between scroll bars)
// val = window.innerHeight;
// console.log(val);
// val = window.innerWidth;
// console.log(val);

// //Scroll Points;

// val = window.scrollY;
// console.log(val);
// val = window.scrollX;
// console.log(val);

// //LOCATION OBJECT
// val = window.location;
// console.log(val);
// val = window.location.hostname;
// console.log(val);
// val = window.location.port;
// console.log(val);
// val = window.location.href;
// console.log('href is: '+val);
// val = window.location.search;
// console.log(val);

// // window.location.href = 'http://google.com'
// // window.location.reload();

// // HISTORY OBJECT

// val = window.history;
// console.log(val);

// val = window.history.go(-1); // we can go to various places in history
// console.log(val);

// val = window.history.length;
// console.log(val);


// //NAVIGATOR NAME
// val = window.navigator;
// console.log(val);
// console.log(window.navigator.geolocation);
// console.log(window.navigator.userAgent);
// console.log(window.navigator.appName);
// console.log(window.navigator.storage);
// console.log(window.navigator.platform);
// console.log(window.navigator.appVersion);
// console.log(window.navigator.vendor);
// console.log(window.navigator.language);

//section 17----------------------------

//block scope with let and const
// var has function scope
//    let and const have block scope

//GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;
console.log('Global scope: ', a, b, c);

//Function Scope
function test() {
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('Function scope: ', a, b, c);
}
test();
console.log('Global scope: ', a, b, c);

//Block Scope

if (true) {
   //block scope
   var a = 4;//var changes outside the block scope;
   let b = 5;
   const c = 6;
   console.log('IF/block scope: ', a, b, c);
   
}
console.log('Global scope: ', a, b, c);

for (let a = 0; a<10; a++) {
   console.log(`loop: ${a}`);
}
console.log('Global scope: ', a, b, c);

for (var a = 0; a<10; a++) { //var here changes the global var => not good
   console.log(`loop: ${a}`);
}
console.log('Global scope: ', a, b, c);

//----------------------------


