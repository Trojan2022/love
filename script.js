const imgList=[{id:'1.jpg'},{id:'2.jpg'},{id:'3.jpg'},{id:'4.jpg'},{id:'5.jpg'},{id:'6.jpg'},{id:'7.jpg'},{id:'8.jpg'},{id:'9.jpg'},{id:'10.jpg'},{id:'11.jpg'},{id:'12.jpg'},{id:'13.jpg'},{id:'14.jpg'},{id:'15.jpg'},{id:'16.jpg'},{id:'17.jpg'}];
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

