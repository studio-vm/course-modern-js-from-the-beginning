//^ MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

//! set keys
const key1 = 'some string';
const key2 = {};
const key3 = function () { };

//! Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

//! Get values by key

// console.log(map1.get(key1), map1.get(key2), map1.get(key3),);

//! Count values

// console.log(map1.size); //3 key value pairs

//^ ITERATE Maps

// //! Loop using for...of to get keys and values

// for (let [key, value] of map1) {
//    console.log(`${key} = ${value}`);
// }

// //! iterate keys only
// for (let key of map1.keys()) {
//    console.log(key);
// }

// //! iterate values only
// for (let value of map1.values()) {
//    console.log(value);
// }

// //! Loop using forEach
// map1.forEach((value, key) => {
//    console.log(`${key} = ${value}`);
// })

//^ convert map to arrays

//! create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

//! create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

//! create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
