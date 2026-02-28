const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));

window.addEventListener("scroll", function(){
const nav = document.querySelector("nav");
nav.style.background =
window.scrollY > 50
? "rgba(0,0,0,0.9)"
: "rgba(0,0,0,0.5)";
});

window.addEventListener("scroll",()=>{
document.querySelector(".hero").style.backgroundPositionY =
window.scrollY * 0.5 + "px";
});

window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("loader")
.classList.add("fade-out");
},1500);
});

document.body.classList.add("loaded");

document.querySelectorAll("a").forEach(link=>{
link.addEventListener("click",function(e){

const target = this.href;

if(target && !target.includes("#")){
e.preventDefault();
document.body.style.opacity="0";

setTimeout(()=>{
window.location=target;
},500);
}
});
});
