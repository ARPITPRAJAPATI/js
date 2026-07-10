class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPass(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const arush = new User("arush","arush@kiet","123")

console.log(arush.encryptPass());
console.log(arush.changeUsername())