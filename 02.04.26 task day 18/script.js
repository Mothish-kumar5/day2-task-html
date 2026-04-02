// For Loop;
console.log("For Loop");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//While loop
console.log("While Loop");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Do While loop
console.log("Do While Loop");

 i = 1;  

do {
    console.log(i);
    i++;
} while (i <= 3);

// Continue And Break

console.log("Cont And Break");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // skip 5
    }
    if (i === 8) {
        break; // stop at 8
    }
    console.log(i);
}

