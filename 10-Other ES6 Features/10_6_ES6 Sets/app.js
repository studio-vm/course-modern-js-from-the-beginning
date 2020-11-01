//^ SETS - Store UNIQUE values of any type

const set1 = new Set();

//! Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);

// console.log(set1); // has 4 values

// set1.add(100);
// console.log(set1); // still has 4 values


// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// //! Get Count
// console.log(set1.size); //4

// //! Check for values
// console.log(set1.has(100)); //true //primitive stored by value
// console.log(set1.has(50 + 50)); //true //primitive stored by value
// console.log(set1.has({ name: 'John' })); //false because objects are stored in the heap by reference
// console.log({ name: 'John' } === { name: 'John' }); //false because objects are stored in the heap by reference

// //! Delete from set
// set1.delete(100);
// console.log(set1.size);//now 3

//^ iterating through sets
// for (let item of set1.entries()) {
//       console.log(item);
//    }
// for (let item of set1.keys()) {
//       console.log(item);
//    }
// for (let item of set1.values()) {
//       console.log(item);
//    }
// //! forEach loop
// set1.forEach(val => {
//    console.log(val);
// })

//^ Convert Sets to Arrays

const setArr = Array.from(set1);
console.log(setArr);
