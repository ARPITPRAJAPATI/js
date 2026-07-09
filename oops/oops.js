const user = {
    username: "arush",
    email: "arush@example.com",
    login:8,
    getinfo: () => {
        console.log("got the user")
    }
}

// console.log(user.username)
// console.log(user.getinfo())


function users(username,Count,value){
     this.username = username
     this.Count = Count
     this.value = value

     return this
}

const userOne = new users("arush",2,true)
const userTwo = new users("arpit",1,true)

console.log(userOne)
console.log(userTwo)