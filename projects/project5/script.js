const randomColor = function(){
    const hex = '012356789ABCDEF'
    let color = '#'
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalidId;

const startChangingColor = function(){
    if(!intervalidId){
         intervalidId = setInterval(changeColor,1000);
    }

    function changeColor(){
        document.body.style.background = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(intervalidId)
    intervalidId = null;
}

document.querySelector('#start').
addEventListener('click',startChangingColor());
document.querySelector('#stop').
addEventListener('click',startChangingColor());