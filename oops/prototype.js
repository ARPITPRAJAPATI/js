const teacher = {
    available : true,
}

const Teachingsupport = {
    teachername : "lo"
}

Object.setPrototypeOf(teacher,Teachingsupport)

const username = "arushhhh    "

String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`);
}

username.truelength();