let person = {
  name: "Alice",
  age: 25,

  // Method
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// Access object properties
console.log(person.name); // Alice
console.log(person.age);  // 25

// Modify object properties
person.name = "Bob";
person.age = 30;

console.log(person.name); // Bob
console.log(person.age);  // 30

// Call the object method
person.sayHello(); // Hello, my name is Bob
