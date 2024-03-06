// how to generate random color -> using hex value
// hex value => "0123456789ABCDEF"
// color -> "#XXXXXX"
// X=> hex value-> total 16

const body=document.querySelector('body');
const Start=document.querySelector('#start');
const Stop=document.querySelector('#stop');

const randomColor=()=>{
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        let randomIndex=(Math.floor(Math.random()*16));
        color+=hex[randomIndex];
    }
    return color;
}

// how to change color using random generated color

const ChangeColor=function(){
const color=randomColor();
if(color==="#000000"){
    body.style.color=`white`;
}
body.style.backgroundColor=`${color}`;
}

// how to start button will work
let ColorInterval;
const colorChange=()=>{
    if(!ColorInterval){
    ColorInterval=setInterval(ChangeColor,1000);
}
}
Start.addEventListener('click',colorChange);


// how to start button will work

Stop.addEventListener('click',()=>{
    clearInterval(ColorInterval);
    ColorInterval=null;
})

