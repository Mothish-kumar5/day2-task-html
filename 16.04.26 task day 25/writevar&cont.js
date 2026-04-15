// write var and cont


var x = 10;
var y = 20;
var total = x + y;

var name = "Alice";
name = "Bob";

//Literals with variables

const name = "Alice";
const age = 30;

//const message = 'Hello ${name}, you are ${age} years old.';
var message = "Hello " + name + ", you are " + age + " years old.";

console.log(message);

//Create a function with default parameter values.
function greet(name = "Guest", age = 18) {
  return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet());            
console.log(greet("Alice"));  
console.log(greet("Bob", 25));  