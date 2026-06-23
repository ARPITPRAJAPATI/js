const now = new Date();

console.log(now); 
console.log(now.toLocaleString())                // full date + time
console.log(now.toDateString());   // date only
console.log(now.toTimeString());   // time only
console.log(now.toLocaleString()); // local date + time


console.log(now.toLocaleString("en-IN"));
console.log(now.toLocaleDateString("en-IN"));
console.log(now.toLocaleTimeString("en-IN"));

const date = new Date("2026-06-24");

console.log(date);

const date = new Date("2026-06-24T13:30:00");

console.log(date);