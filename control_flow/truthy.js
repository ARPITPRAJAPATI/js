// const userEmail = "hi@gmail.com"
const userEmail = ""
if(userEmail) {
    console.log("yes")}
else{
    console.log("no")
}

//  falsy values

// false, 0,-0,BigInt 0n,"",null,undefined,NaN

//  truthy values
 // "0",'false'
 if(userEmail.length === 0){
    console.log("array is empty")
 }
 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0){
     console.log(`Object is empty`);
 }
let val = 5 ?? 10 

console.log(val);

let marks =100;

marks>50 ? console.log("pass") : console.log("fail")
