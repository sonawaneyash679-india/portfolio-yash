console.log("Bhushan AIML Portfolio Loaded Successfully!");


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        let target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Scroll reveal animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let position = section.getBoundingClientRect().top;


        let screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }


    });


});




// Project card click message

const projects = document.querySelectorAll(".project");


projects.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        console.log("Project viewed");

    });


});
