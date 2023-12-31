let knob =document.querySelector(".knob");
let body=document.body;
let audio=document.querySelector("#audio");

 knob.addEventListener("click",()=>{
  body.classList.toggle("on");
  audio.play();
});