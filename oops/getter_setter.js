class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password
    }
    set password(value){
        this._password = value;
    }

    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }
}

const arush = new User("kiet@2123","abc")

console.log(arush.password);