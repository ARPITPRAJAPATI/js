function user(username,count,value){
    this.username = username
    this.count = count
    this.value = value
}
user.prototype.increment = function (){
    this.count++;
}
user.prototype.printme = function (){
    console.log(`this is ${this.username}`)
}

const user1 = new user("arush",7,true)

user1.increment();

console.log(user1.count);

