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
