function greet(name, callback) {
  const message = "Hello, " + name + "!";
  callback(message); // calling the callback
}

// Example callback function
function printMessage(msg) {
  console.log(msg);
}

// Using the function
greet("Alice", printMessage);