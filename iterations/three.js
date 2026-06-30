//for of

// const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num);
// }

// const greetings = "hello world"

// for(const greet of greetings){
//     console.log(`each char is ${greet}`)
// }


//maps unique

const  map = new Map()

map.set('IN',"India")
map.set('US',"United State of America")
map.set('Fr',"France")

// console.log(map);

for (const mp of map){
    console.log(mp[0])
    console.log(mp[1])
} 

const mBje = {
    name : "arush",
    class: 5
}
for (const mp of mBje){
    console.log(mp)
    
} 

