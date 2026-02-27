const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));

.hidden{
opacity:0;
transform:translateY(60px);
transition:all 1s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

nav{
backdrop-filter:blur(10px);
}

.hero p{
font-size:1.3em;
opacity:0.9;
}

.section h2{
font-size:2.5em;
margin-bottom:20px;
}
