class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password =password;
    }
    addCourse(){
        console.log(`A new c was added by ${this.username}`)
    }

}

const arush = new Teacher("arush","eamil.com","123")

arush.addCourse();

console.log(arush instanceof Teacher)