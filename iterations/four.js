const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for ( const key in myObject){
    // console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);

}

const arrayOne = ["js","rb","cpp"]

for(const key in arrayOne){
    console.log(arrayOne[key])
}

