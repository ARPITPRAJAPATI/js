// const eww = ["world","is","great"]

// eww.forEach(function print(item){
//     console.log(item)
// });

// eww.forEach( (item) => {
//     console.log(item)
// });

// function print(item){
//     console.log(item)
// };
// eww.forEach(print);

const eww = [
    {
        langName: "javascript",
        lang:"js"
    },
    {
        langName: "python",
        lang:"py"
    },
    {
        langName: "cpp",
        lang:"cpp"
    }
    
]

eww.forEach( (item) =>{
    console.log(item.langName)
    console.log(item.lang)
}
)