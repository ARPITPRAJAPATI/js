// let a =10;
// const b = 20
// var c =30

// console.log(a);
// console.log(b);
// console.log(c);

// some functions scopes

function one (){
    const username = "arush"
    function two (){
        const website = "youtube"
        console.log(username)
    }
    
    two()
    

}          
one()