// *important
//& some function
//~ some other stuff
//^ some other comment
//! do not use
//? question
//todo: a todo

//~section 1----------------------------
//^ Constructor and This keyword

// //! Person Constructor

// function Person(nameFirst, nameLast, dob) {
//    this._nameFirst = nameFirst;
//    this._nameLast = nameLast;
//    this._bDay = new Date(dob);
// }


// //! Add get age method to prototype

// Person.prototype.getAge = function () {
//    const diff = Date.now() - this._bDay.getTime();
//    const ageDate = new Date(diff);
//    return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function () {
//    return `${this._nameFirst} ${this._nameLast}`
// }

// //! Gets married
// Person.prototype.getsMarried = function (newNameLast) {
//    this._nameLast = newNameLast;
// }
// //! Instantiate using new keyword

// const me = new Person('Jane', 'Doe', '1989-12-06')
// me.getsMarried('Smith');

// console.log(Person.prototype.hasOwnProperty('getAge'));

// console.log(1);

//----------------------------

//! Constructor function
// function Person(nameFirst, nameLast) {
//    this._nameFirst = nameFirst;
//    this._nameLast = nameLast;
// }
// Person.prototype.greeting = function () {
//    return `Hello there ${this._nameFirst} ${this._nameLast}`
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());


// //! Customer constructor
// function Customer(nameFirst, nameLast, phone,  membership) {
//    Person.call(this, nameFirst, nameLast);

//    this._phone = phone;
//    this._membership = membership;
// }

// //! Inherit the person PROTOTYPE methods
// Customer.prototype = Object.create(Person.prototype);

// //! Make customer.prototype return Customer();
// Customer.prototype.constructor = Customer;

// //! Create a cuustomer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'standard');

// console.log(customer1);
// console.log(customer1.__proto__);
// console.log(customer1.greeting());

// //! Overwrite Person greeting with Customer greeting
// Customer.prototype.greeting = function () {
//    return `Hello ${this._nameFirst}, welcome to our store`
// }
// console.log(customer1.__proto__);
// console.log(customer1.greeting());

//----------------------------

// //! Create a prototype
// const personPrototypes = {
//    greeting: function () {
//       return `Hello there ${this._nameFirst} ${this._nameLast}`;
//    },
//    getsMarried: function (newNameLast) {
//       this._nameLast = newNameLast;
//    }
// }

// //! Alternative way of creating Objects
// const mary = Object.create(personPrototypes);
// mary._nameFirst = 'Mary';
// mary._nameLast = 'Williams';
// mary.age = 30;

// console.log(mary);
// console.log(mary.greeting());

// console.log(mary.getsMarried('Doe'));
// console.log(mary);

// //! Alternative way of creating Objects
// const brad = Object.create(personPrototypes, {
//    _nameFirst: { value: 'Brad' },
//    _nameLast: { value: 'Traversy' },
//    _age: { value: 30 }
// })
// console.log(brad._age);
// console.log(brad.greeting());


//^ ES 6 Classes

//! Create Person class

// class Person {
//    constructor(nameFirst, nameLast, dob) {
//       this._nameFirst = nameFirst;
//       this._nameLast = nameLast;
//       this._birthday = new Date(dob);
//    }
//    greeting() {
//       return `Hello there ${this._nameFirst} ${this._nameLast}`
//    }
//    calculateAge() {
//       const diff = Date.now() - this._birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getFullYear() - 1970);
//    }
//    getsMarried(newNameLast) {
//       this._nameLast = newNameLast;
//    }
//    //! Static method
//    static addNums(x, y) {
//       return x+y
//    }
// }

// const mary = new Person('Mary', 'Williams', '1989-11-03');

// console.log(mary);
// console.log(mary.calculateAge());

// mary.getsMarried('Smith');
// console.log(mary);

// //! STATIC Methods
// //! can use Class methods without instantiating a new object
// // mary.addNums(1, 2); //! Error cannot be called on an instance
// console.log(Person.addNums(1, 2)); //! Works - called on the class

//^ ES6 Subclasses -extends keyword, super keyword

class Person {
   constructor(nameFirst, nameLast) {
      this._nameFirst = nameFirst;
      this._nameLast = nameLast;
   }
   greeting() {
      return `Hello there ${this._nameFirst} ${this._nameLast}`
   }
}

class Customer extends Person {
   constructor(nameFirst, nameLast, phone, membership) {
      super(nameFirst, nameLast); //! calls the parent class constructor

      this._phone = phone;
      this._membership = membership;
   }
   static getMembershipCost() {
      return 500;
   }
}

const john = new Customer('John', 'Doe', '5555656453', 'standard')

console.log(john.greeting());
// console.log(john.getMembershipCost()); // does not worl
console.log(Customer.getMembershipCost());
