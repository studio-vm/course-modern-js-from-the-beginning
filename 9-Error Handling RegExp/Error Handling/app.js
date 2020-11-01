const user = { email: 'jdoe@gmail.com' };

//~ Try Catch - we can catch errors without stopping the entire script

try {
  //Produces a ReferenceError
  // myFunction();

  // Produces a TypeError
  // null.myFunction();

  //Will Produce a SyntaxError
  // console.log(eval('2+2'));
  // eval(hello);

  //Will Produce URIError
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch (e) {
  //Catch the error
  console.log(e);
  console.log(e.name);
  console.log(e.message);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
  console.log(e instanceof SyntaxError);
  console.log(e instanceof URIError);

} finally {
  //Runs no matter what
  console.log('Finally runs regardless');
}

console.log('program continues....');
