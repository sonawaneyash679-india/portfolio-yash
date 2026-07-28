
/*==============================
MOBILE MENU
==============================*/

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});



/*==============================
CLOSE MENU AFTER CLICK
==============================*/

const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});



/*==============================
TYPING EFFECT
==============================*/

const text = [
    "AI/ML Engineer",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Data Analyst"
];


let index = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");


function typeEffect(){

    if(charIndex < text[index].length){

        typing.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){

    if(charIndex > 0){

        typing.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){
            index=0;
        }

        setTimeout(typeEffect,300);

    }

}


document.addEventListener("DOMContentLoaded",()=>{

    typeEffect();

});



/*==============================
NAVBAR BACKGROUND ON SCROLL
==============================*/

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(8,5,18,.85)";

    }

    else{

        header.style.background =
        "rgba(8,5,18,.55)";

    }


});



/*==============================
SCROLL TOP BUTTON
==============================*/


const scrollTop = document.getElementById("scrollTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        scrollTop.classList.remove("hide");

    }

    else{

        scrollTop.classList.add("hide");

    }


});



scrollTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});



/*==============================
SCROLL REVEAL ANIMATION
==============================*/


const revealElements =
document.querySelectorAll(
".glass, .project-card, .tool-card"
);



const reveal = ()=>{


    revealElements.forEach(element=>{


        let windowHeight =
        window.innerHeight;


        let elementTop =
        element.getBoundingClientRect().top;


        let visible =
        100;


        if(elementTop < windowHeight-visible){

            element.style.opacity="1";

            element.style.transform=
            "translateY(0)";

        }


    });


};



window.addEventListener(
"scroll",
reveal
);


reveal();



/*==============================
ACTIVE NAV LINK
==============================*/


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let sectionTop =
section.offsetTop - 150;


if(scrollY >= sectionTop){

current =
section.getAttribute("id");

}


});


navItems.forEach(item=>{


item.style.color="#fff";


if(item.getAttribute("href")
==
"#"+current){


item.style.color="#ff66d6";


}


});


});
