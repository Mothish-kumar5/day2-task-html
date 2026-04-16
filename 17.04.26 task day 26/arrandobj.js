//array destructuring

let arr = [10, 20, 30];

let [a, b] = arr;

console.log(a);
console.log(b);

// object destructuring

let user = {
  name: "John",
  age: 25
};

let { name, age } = user;

console.log(name); 

//Spread operator copy array

let original = [1, 2, 3];

let copy = [...original];

console.log(copy); 

//Rest operator function

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 