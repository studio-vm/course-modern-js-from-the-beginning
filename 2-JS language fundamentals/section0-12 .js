//----------------------------

// console.log("hellooo") //strings are black
// console.log(123); //nums and bools are blue
// console.log(true);
// let greetings = "hi"
// console.log(greetings);
// console.log([1, 2, 3]); //array
// console.log({ a: 2, b: 4 });//object
// console.table({ a: 2, b: 4 })//log objects as a table

// console.error("This is an error")// makes it red in console
// // console.clear();
// console.warn("this is a warn") //makes it yellow in console

// console.time("Hello")
// console.log("lorem202");//some code here
// console.timeEnd("Hello")//The argument in time end needs to match time

//----------------------------

// //var let const
// var name = "name 1";
// console.log(name);
// name = "name2"
// console.log(name);
// //initialize variable
// var greeting;
// console.log(greeting);
// greeting = "hello"
// console.log(greeting);
// //vars can contain letters, nums, underscore_ or $ money sign
// //cannot start with a number

// //multi word vars
// var nameFirst = 'John' //Camel Case most times in JS
// var name_first = 'Sara' //underscore
// var NameFirst = 'Ben'// Pascal Case (in JS we use this for class, constructors, )

//----------------------------

// //let 
// let name;
// name = 'John';
// console.log(name);
// name = 'Ben';
// console.log(name);

//----------------------------

// //const
// const name = 'Jack';
// console.log(name);
// //cannot re-assign
// //must initialize else error;
// //can mutate the contents;]

// // use const unless you know you will re-asign it

// const person = {
//    name: 'John',
//    age: 30,
//    isCool : true
// }

// person.name = "Sara";
// person.age = 45;
// console.log(person);

// const nums = [1, 2, 3, 4];
// nums.push(70)
// console.log(nums);

//----------------------------

// primitive data types
// stored directly in the location of the variable
// stored on the stack
// STRING, NUMBER, BOOLEAN, NULL(intentional empty value), UNDEFINED(unintentional empty value), Symbols(ES6)

// reference data types
// accessed by reference
// objects that are stored on the heap
// points to a location in memory
// ARRAYS, OBJECT LITERALS, FUNCTIONS, DATES, OBJECT WRAPPERS FOR STRINGS, NUMS, etc. ANYTHING ELSE

// TYPES ARE ASSOCIATED WITH values not variables
// We do not need to specify types
// JS is dinamicaly typed

//----------------------------

// // typeof operator

// //primitive - value types

// //strings
// const name = 'john doe';
// console.log(typeof name);
// //number
// const age = 45;
// console.log(typeof age);
// //boolean
// const hasKids = true;
// console.log(typeof hasKids);
// //null
// const car = null;
// console.log(typeof car); // this is an error, it is not an object, it is a primitive
// //undefined;
// let book;
// console.log(typeof book);
// //symbol ES6
// const sym = Symbol()
// console.log(typeof sym);

// //reference types - objects

// const hobbies = ['movies', 'books']; //array
// console.log(typeof hobbies);
// const address = {
//    city: "london",
//    country: 'uk'
// } //object
// console.log(typeof address);

// const today = new Date();
// console.log(today);
// console.log(typeof today);

//----------------------------

// let val;

// //number to string;
// val = 2;
// val = String(2);// val.length now works // convert a number to a string
// val = String(4 + 4);
// //bool to string
// val = String(true);
// //date to string
// val = String(new Date()); // this is now a string, not date object anymore
// //array to string
// val = String([1, 2, 3, 4,]);

// //toString() method
// val = (5).toString();
// val = (true).toString();


// //string to number

// val = '4';
// val = Number(val);

// //boolean to number
// val = Number(true);//this is 1
// val = Number(false);//this is 0
// val = Number(null);//this is 0
// val = Number('Hello')//NaN - not a number
// val = Number([1, 2, 3])//Nan - not a number

// val = parseInt("100.30")//we get 100 as a number
// val = parseFloat("100.30")//we get 100 .3 as a number

// //output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);//only works on a string
// console.log(val.toFixed(5));//only works on a number

//----------------------------

// const val1 = 4;
// const val2 = 5;
// const val3 = "6";
// const sum = val1 + val2 + val3; //now sum is a string //type coercion;
// const sum = val1 + val2 + Number(val3); //now sum is a number;
// console.log(sum);
// console.log(typeof sum);

//----------------------------
// // numbers and math object

// const num1 = 100.3;
// const num2 = 60.09;
// let val;

// //basic math with numbers

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math object;
// console.log(val);

// val = Math.PI;
// console.log(val);

// val = Math.E;
// console.log(val);

// val = Math.round(2.6)
// console.log(val);

// val = Math.ceil(2.3)
// console.log(val);

// val = Math.floor(2.7)
// console.log(val);

// val = Math.sqrt(4)
// console.log(val);

// val = Math.pow(4, 2)//second argument is power
// console.log(val);

// val = Math.abs(-4)
// console.log(val);

// val = Math.min(4, 5, 6)
// console.log(val);

// val = Math.max(4, 5, 6)
// console.log(val);

// val = Math.random();
// console.log(val);

// val = Math.floor(Math.random() * 20)
// console.log(val); //we get a random number between 0-19

// val = Math.floor(Math.random() * 20+ 1)
// console.log(val); //we get a random number between 1-20

//----------------------------

// const nameFirst = 'Will';
// const nameLast = 'Smith';
// const age = 25;

// let val;

// val = nameFirst + nameLast;

// console.log(val);
// //concatenation

// val = nameFirst + " " + nameLast;

// //append
// val = "Brad";
// val += " Trav";
// console.log(val);

// val = 'Hello, my name is ' + nameFirst + ' and I am ' + age;
// console.log(val);

// //ESCAPING
// val = "That's great, I can't wait"
// console.log(val);

// val = 'That\'s great, I can\'t wait/'
// console.log(val);

// //.length
// val = nameFirst.length;
// console.log(val);

// //.concat()
// val = nameFirst.concat(' ', nameLast)
// console.log(val);

// //Change Case
// val = nameFirst.toUpperCase();
// console.log(val);

// val = nameLast.toLocaleLowerCase();
// console.log(val);

// val = nameFirst[2].toUpperCase();
// console.log(val);

// // indexOf()
// val = nameFirst.indexOf("i");
// console.log(val);
// val = nameFirst.lastIndexOf("l")
// console.log(val);
// val = nameFirst.indexOf("x");
// console.log(val); // we get -1 if it does not exist;

// //charAt();
// val = nameFirst.charAt(2);
// console.log(val);
// val = nameFirst.charAt('2');
// console.log(val);

// //get last character
// val = nameFirst.charAt(nameFirst.length - 1)
// console.log(val);

// //substring()
// val = nameFirst.substring(0, 3)
// console.log(val);

// val = nameFirst.slice(0, 3); //we get first 3 characters
// console.log(val);

// val = nameLast.slice(-3)//we get last 3 characters
// console.log(val);

// //split()
// let str = "Hello I am Valentin"

// val = str.split(" ");
// console.log(val);

// //replace()

// val = str.replace('I', 'you');
// console.log(val);

// //includes()

// val = str.includes('Valentin');
// console.log(val);

//----------------------------

// //Template literals - ES6 but now compatible with all modern browsers;

// const name = 'Val';
// const age = 25;
// const city = 'London';
// const job = 'architect';
// let html;

// //ES5
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>City: ' + city+ '</li></ul';

// console.log(html);
// function hello() {
//    return 'Hellooooo'
// }

// html = `
//    <ul>
//       <li>Name: ${name}</li>
//       <li>Age: ${age}</li>
//       <li>Job: ${job}</li>
//       <li>City: ${city}</li>
//       <li>${2+2}</li>
//       <li>${hello()}</li>
//       <li>${age>30?'Over 30':'Under 30'}</li>
//    </ul>
// `


// console.log(html);
// document.body.innerHTML = html;

//----------------------------

// //Arrays and Array methods

// const nums = [22, 14, 56, 2, 6];
// const numbers2 = new Array(22, 14, 56, 5);

// console.log(nums);
// console.log(numbers2);

// const fruit = ['Apple', 'Orange', 'Banana'];
// const mixed = [2, 'Hello', true, null, undefined, {a:1, b:3}, new Date()]

// console.log(fruit);
// console.log(mixed);

// let val;

// //array length;
// val = nums.length;
// console.log(val);
// console.log(nums);

// //check if array
// console.log(Array.isArray(nums)); //true

// val = nums[0]; //arrays are 0 based
// console.log(val);
// console.log(nums[2]);

// //insert into array:
// nums[2] = 100;
// console.log(nums);

// //find index of value;

// val = nums.indexOf(2);
// console.log(val);
// val = nums.indexOf(3);
// console.log(val);//we get -1 if does not exists

// //add to end
// nums.push(199);
// console.log(nums);

// //add to front
// nums.unshift(7);
// console.log(nums);

// //take off from end
// nums.pop();
// console.log(nums);

// //take one from beginning
// nums.shift();
// console.log(nums);

// //splice()
// nums.splice(2, 1);
// console.log(nums);

// //reverse values inside an array
// nums.reverse();
// console.log(nums);

// //concatenate arrays

// val = nums.concat(numbers2);
// console.log(val);

// //sort()
// val = fruit.sort();
// console.log(val);

// val = nums.sort();
// console.log(val);//this is sorting by the first number
// //use a compare function inside sort to actually sort nums
// val = nums.sort((a, b) => a - b);
// console.log(nums);

// val = nums.sort((a, b) => b-a);
// console.log(nums); //sorts in other direction

// //find()
// function under10 (x) {
//    return x>10
// }

// val = nums.find(under10)
// console.log(val); //this ONLY RETURNS FIRST VALUE that matches the function

//----------------------------

//Object literal reference 

// const person = {
//    firstName: 'Steve',
//    lastName: 'Smith',
//    age: 30,
//    job: 'programmer',
//    email: 'steve@aol.com',
//    hobies: ['music', 'sports', 'movies'],
//    address: {
//       city: 'London',
//       borough: 'Tower Hamlets'
//    },
//    getBirthYear: function () {
//       return 2020 - this.age;
//    }
// }
// let val;

// val = person
// console.log(val);

// //get specific value;
// val = person.firstName;
// console.log(val);

// val = person['lastName'];
// console.log(val);

// val = person.age;
// console.log(val);

// console.log(person.hobies[1]);
// console.log(person.address.city);
// console.log(person.address['borough']);

// val = person.getBirthYear();
// console.log(val);

// //array of objects

// const people = [
//    { name: 'John', age: 30 },
//    { name: 'Sara', age: 20 },
//    { name: 'Alan', age: 45 },
//    { name: 'Dana', age: 34 },
// ]

// for (let i = 0; i < people.length; i++) {
//    console.log(people[i].name);
// }

//----------------------------

// //Dates and Times => date object;

// const today = new Date();//if we dont pass arguments it defaults to today's date
// console.log(today);

// // const someDay = new Date(20/02/2020);
// // console.log(someDay);

// let val = today;

// console.log(val);
// console.log(typeof val);

// let bday = new Date('29-10-1989')//this is default (american M-D-Y)
// console.log(bday);

// bday = new Date('9-Oct-1989')//European
// console.log(bday);

// bday = new Date('September 29 1900')
// console.log(bday);

// val = today.getMonth()
// console.log(val); //months are 0 based so 0 is January, 9 is October

// val = today.getDay()
// console.log(val);//again 0 based, starts Sunday, =>1 Mon =>2 Tue 

// val = today.getDate();
// console.log(val); // actual date number;

// val = today.getFullYear();
// console.log(val);

// val = today.getHours();
// console.log(val);

// val = today.getMinutes();
// console.log(val);

// val = today.getSeconds();
// console.log(val);

// val = today.getMilliseconds();
// console.log(val);

// val = today.getTime();
// console.log(val); //this is a time stamp, amount o ftime since January 1 1970;

// bday.setMonth(2);
// console.log(bday);

// bday.setDate(12);
// console.log(bday);

// bday.setFullYear(1984);
// console.log(bday);

// bday.setHours(3);
// console.log(bday);

// bday.setMinutes(30);
// console.log(bday);

// bday.setSeconds(25);
// console.log(bday);

//----------------------------



//----------------------------





