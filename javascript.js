const imgs=document.getElementById('imgs');
const left=document.getElementById('left');
const right=document.getElementById('right');
const img=document.querySelectorAll('#imgs img');
let index=0;

let intervale=setInterval(run,2000);

function run(){
    index++;
    changeImage();
}

function changeImage(){
    if(index>img.length-1){
        index=0;
    }else if(index<0){
        index=img.length-1;
    }

    imgs.style.transform=`translateX(${-index*500}px)`;
}

function resetInterval(){

    clearInterval(intervale);
    intervale=setInterval(run,2000);
}

left.addEventListener('click',()=>{
    
    index--;
    changeImage();
    resetInterval();
});

right.addEventListener('click',()=>{
    
    index++;
    changeImage();
    resetInterval();
});