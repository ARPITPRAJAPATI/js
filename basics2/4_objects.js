const user = {
    name: "Arush",
    age: 20,
    location: "delhi",
    email: "arush@gmail.com"
}
// destructuring
const {email : userEmail} = user
console.log(userEmail)