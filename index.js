import './style.css';

document.querySelector('#grandparent').addEventListener("click",(e)=>{
  console.log('GP');
  //e.stopPropagation();
},false);

document.querySelector('#parent').addEventListener("click",(e)=>{
  console.log('P');
},true);

document.querySelector('#child').addEventListener("click",()=>{
  console.log('C');
},false);

//Note : Capturing is done first than bubbling in case they are together.