const arush = {
    name : "aarush",
    price: 250,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(arush,"name"));

object.defineProperties(arush,'name',{
    Writable: false,
    enumerable: false
})

for(let[key,value] of Object.entries(arush)){
    console.log(`${key} : ${value}`)
}