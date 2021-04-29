import './style.css';

document.querySelector('#grandparent').addEventListener("click",()=>{
  console.log('GP');
},true);

document.querySelector('#parent').addEventListener("click",(e)=>{
  console.log('P');
  e.stopPropagation();
},true);

document.querySelector('#child').addEventListener("click",()=>{
  console.log('C');
},true);