const mysym = Symbol("key1")
const jsUser = {
    name: "Arush",
    "fullname": "arushk",
    [mysym]: "key11",
    age: 20,
    location: "delhi",
    email: "arush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","staturday"]

}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullname"])
// console.log(jsUser[mysym])

// jsUser.email = "arush-gpt.com"
// Object.freeze(jsUser)
// jsUser.email ="arush@gmail.com"

// console.log(jsUser)


jsUser.greet = function(){
    console.log("hello js user")
}
jsUser.greettwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greet());
console.log(jsUser.greettwo());