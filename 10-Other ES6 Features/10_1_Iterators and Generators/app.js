//^ Iterator - advanced loops that can be paused

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } :
//         { done: true }
//     }
//   }
// }

// //! create an array of names
// const namesArr = ['Jack', 'Jill', 'Mary'];

// //! init iterator with names
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());
// console.log(names.next());


//^ Generator - advanced functions that can yield values (* - symbol)
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }
// const name = sayNames()
// console.log(name.next()); //{value: Jack, done: false}
// console.log(name.next().value); //{value: Jill, done: false}
// console.log(name.next()); //{value: Jack, done: false}
// console.log(name.next()); //{value: undefined, done: true}

//^ ID creator
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);  //0
console.log(gen.next().value);  //1
console.log(gen.next().value);  //2
console.log(gen.next().value);  //3 etc...