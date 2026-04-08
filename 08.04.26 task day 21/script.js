//Double all number using map
let a = [1,2,3,4];

let doubled = a.map(num => num * 2);
console.log(doubled);

// Get even number using filter

let b = [1,2,3,4,5,6];

let evens = b.filter(num => num % 2 === 0);
console.log(evens);

//Find sum using reduce

let c = [1,2,3,4];

let sum = c.reduce((total,num) => total + num,0);
console.log(sum);

//Find the first number gerater than 10

let d = [5,8,12,3,20];

let firstGreaterThan10 = d.find(num => num > 10);
console.log(firstGreaterThan10);

//Check if array includes a specific value

let e = [1,2,3,4];

let hasValue = e.includes(3);
console.log(hasValue);





