// Portfolio Loaded
console.log("Bhushan Portfolio Loaded Successfully!");


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Scroll reveal animation
const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.3;


        if(sectionTop < screenPosition){

            section.classList.add("show");

        }

    });

});


// Button click message
const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Button clicked");

    });

});
