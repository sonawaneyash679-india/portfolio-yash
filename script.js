// Smooth reveal animation

const elements = document.querySelectorAll(
".card, .box"
);


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},
{
threshold:0.15
}
);



elements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="0.7s ease";

observer.observe(el);

});




// Navbar background effect

window.addEventListener("scroll",()=>{

let header=document.querySelector("header");


if(window.scrollY>50){

header.style.background="#050505";

}
else{

header.style.background="rgba(10,10,10,0.85)";

}


});
