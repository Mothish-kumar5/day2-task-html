// function to add two numbers

function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // 8

// Multiply two numbers

const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 6)); // 24

// Subtract two numbers

const subtract = function(a, b) {
    return a - b ;
};

console.log(subtract(10, 3)); // 7

// Parameters and return value

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Kumar")); // Hello, kumar!

// Global vs local scope

let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();

console.log(globalVar); // Accessible
// console.log(localVar); // Error: localVar is not defined