// Typing Effect

const text = [
"AI/ML Engineer",
"Data Scientist",
"Machine Learning Developer",
"Deep Learning Enthusiast"
];


let index = 0;
let charIndex = 0;

const heading = document.querySelector(".hero h2");


function typeEffect(){

    if(charIndex < text[index].length){

        heading.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){

    if(charIndex > 0){

        heading.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index=0;

        }

        setTimeout(typeEffect,500);

    }

}



document.addEventListener(
"DOMContentLoaded",
()=>{

heading.textContent="";

typeEffect();

});





// Navbar shadow on scroll


window.addEventListener(
"scroll",
()=>{


const header=document.querySelector("header");


if(window.scrollY>50){

header.style.boxShadow=
"0 5px 30px rgba(6,182,212,0.2)";

}

else{

header.style.boxShadow="none";

}


});






// Reveal animation


const cards=document.querySelectorAll(
".skill-card,.project-card,.about-box"
);


const observer=new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


},
{
threshold:0.2
}
);




cards.forEach(
(card)=>{


card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.8s";


observer.observe(card);


});
