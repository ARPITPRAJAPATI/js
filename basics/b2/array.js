 const arr = [1,2,3,4,5]
const arr2 = new Array(1,3,5,7,9)
console.log(arr[0])
console.log(arr.length)
console.log(arr.reverse())
arr[0]=2
console.log(arr[0])

for(let i =0;i<arr.length;i++){
    console.log(arr[i])
}

const newarr = arr.join();

console.log(typeof(newarr))

slice& splice

console.log(arr)

const sl_arr = arr.slice(0,3)
console.log("A",arr)
console.log(sl_arr)

const sp_arr = arr.splice(0,3)
console.log("B",arr)
console.log(sp_arr)
