// ===============================
// NAVBAR BACKGROUND ON SCROLL
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold:0.2
});

document.querySelectorAll(
".skill-card,.tool-card,.project-card,.experience-card,.education-card,.certificate-card,.contact-card,.stat-box,.about-container"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// HERO TYPING EFFECT
// ===============================

const typing = document.querySelector(".typing");

const words = [

    "AI / ML Engineer",

    "Data Scientist",

    "Python Developer",

    "Power BI Developer",

    "Machine Learning Engineer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(type,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(type,deleting ? 50 : 100);

}

type();

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = parseInt(counter.innerText);

let count = 0;

const update = ()=>{

count += Math.ceil(target/speed);

if(count < target){

counter.innerText = count + "+";

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ===============================
// HERO IMAGE FLOAT
// ===============================

const heroImage = document.querySelector(".image-circle");

if(heroImage){

setInterval(()=>{

heroImage.classList.toggle("float");

},2000);

}

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("showBtn");

}else{

topBtn.classList.remove("showBtn");

}

});

// ===============================
// PROJECT CARD EFFECT
// ===============================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ===============================
// CURRENT YEAR
// ===============================

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright p");

if(copy){

copy.innerHTML =
`© ${year} Bhushan Sonawane | AI / ML Engineer | All Rights Reserved`;

}

// ===============================
// PRELOADER
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
