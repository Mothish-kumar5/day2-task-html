function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("John", sayBye);

// with parameters in callback
function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

function display(result) {
  console.log("Result is: " + result);
}

calculate(5, 3, display);