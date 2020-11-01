//*1----------------------------------------------------

// let re;
// re = /hello/; //Regular Expression literal
// re = /hello/i; // i =  case insensitive
// re = /hello/gi; // Global search

// console.log(re);
// console.log(re.source);

//! exec() - Return result in an array or null
// const result = re.exec('brad hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//! test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

//! match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);
// console.log(result[0]);

//! search() - Returns index of the first match if not found returns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

//! replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

//*2----------------------------------------------------

let re;
let str;
//! Literal Characters
re = /hello/;
re = /hello/gi;

//! Metacharacter Symbols ( ^ $ . * ? \)
re = /^h/i; //~ ^ Must start with 
re = /rld$/i; //~ $ Must end with 
re = /^hello$/i //~ Must begin and end with
re = /h.llo/i //~ . DOT matches any ONE character (Wildcard)
re = /h*llo/i //~ * matches any character 0 or more (Wildcard)
str = 'Hello';

re = /gre?a?y/i //~ ? Optional character grey or gray match
re = /gre?a?y\?/i //~ \ Escape character -> will match a question mark
//todo ! = not
// todo +  one or more
str = 'Grey';

//! Brackets [] - Character sets
re = /gr[ae]y/i; //~ Must be an a OR an e
re = /[GF]ray/i; //~ Must be a G or F
re = /[^GF]ray/i //~ ^ inside brackets [^GF] matches anything except G or F
re = /[A-Z]ray/ //~ Match any upper case letter
re = /[a-z]ray/ //~ Match any lower case letter
re = /[A-Za-z]ray/ //~ Match any case letter
re = /[0-9]ray/ //~ matches all digits
str = 'Xray';

//! Braces {} - Quantifiers
re = /Hel{2}o/i //~ Must occur EXACTLY {x} times
re = /Hel{2,}o/i //~ Must occur AT LEAST {x,} times 
re = /Hel{2,4}o/i //~ Must occur BETWEEN RANGE{x to y} times 
str = 'Hello';

//! Parenthesis () - Gouping
re = /[0-9]y{3}/ //~ only matches 123yyy
re = /([0-9]y){3}/ //~ matches 1y2y3y
str = "1y2y3y";

//! Character Classes - Shorthand
re = /\w/; //~ \w alphanumeric or _
re = /\w+/; //~ + one or more
re = /\W/; //~ \W NON - alphanumeric or _
re = /\d/; //~ \d ANY DIGIT
re = /\D/; //~ \D NON DIGIT
re = /\s/; //~ \s Whitespace char
re = /\S/; //~ \S NON Whitespace char
re = /Hell\b/i; //~ \b word BOUNDARY hell not hello
str = "Hello, welcome to hell";

//! Assertions
re = /x(?=y)/; //~ match x ONLY IF FOLLOWED by y;
re = /x(?!y)/; //~ match x ONLY IF NOT FOLLOWED by y;

str = 'xy';




//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
   if (re.test(str)) {
      console.log(`${str} matches ${re.source}`);
   } else {
      console.log(`${str} does NOT match ${re.source}`);
   }
}

reTest(re, str)