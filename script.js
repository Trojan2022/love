const imgList=[{id:'img/1.jpg'},{id:'img/2.jpg'},{id:'img/3.jpg'},{id:'img/4.jpg'},{id:'img/5.jpg'},{id:'img/6.jpg'},{id:'img/7.jpg'},{id:'img/8.jpg'},{id:'img/9.jpg'},{id:'img/10.jpg'},{id:'img/11.jpg'},{id:'img/12.jpg'},{id:'img/13.jpg'},{id:'img/14.jpg'},{id:'img/15.jpg'},{id:'img/16.jpg'},{id:'img/17.jpg'}];
const firstBtn=document.querySelector('.button-85');
const changeAnna=document.querySelector('.changeAnna');
const changeDanny=document.querySelector('.changeDanny');
const second=document.querySelector('.second');
const first=document.querySelector('.first');
const anna=document.querySelector('.anna');
const bgmusic=document.querySelector('.bgmusic');
const danny=document.querySelector('.danny');
let A=0;
changeAnna.addEventListener('click',()=>{
  if(A==5){
    A=0;
  }
  anna.src=imgList[A].id;
  
  A++;
  
})

let D=5;
changeDanny.addEventListener('click',()=>{
  if(D==12){
    D=5;
  }
  danny.src=imgList[D].id;
  
  D++;
  
})


const opening=()=>{
  first.style.display='none';
  second.style.display='inline';
  second.style.top=`-${second.offsetHeight}px`;
  setTimeout(()=>{
    second.style.top=`0px`;
  },1000);
  ;;
  
}

firstBtn.addEventListener('click', ()=>{
  bgmusic.play();
  opening();
})

