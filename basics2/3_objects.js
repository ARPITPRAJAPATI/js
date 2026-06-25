 const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name= "sammy" 
tinderUser.isLogged = false

console.log(tinderUser);

const regularUser = {
    name: "arush",
    roll_no : 2,
    fullname: {
        userfullname:{
            firstname: "aru",
            lastname: "hehe"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj3 = {5: "a",6:"b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

const users = [
    {
        id: 1,
        email: "arush@gmail.com"
    },
    {
        id : 2,
        email: "arush2005@gmial.com"
    }
]

console.log(users[1].email)

console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))


console.log(Object.entries(tinderUser))

