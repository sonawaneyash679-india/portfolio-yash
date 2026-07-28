// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// =========================
// REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".card,.box,.stat-card,.project,.tech-card,.timeline-item"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


// =========================
// NAVBAR BACKGROUND
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 70) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

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


// =========================
// TYPING EFFECT
// =========================

const typing = document.querySelector(".tag");

if (typing) {

    const words = [

        "AI Engineer",

        "Machine Learning Engineer",

        "Data Scientist",

        "Deep Learning Enthusiast",

        "Python Developer",

        "Power BI Developer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 120);

    }

    typeEffect();

}


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stat-card h2");

const speed = 200;

counters.forEach(counter => {

    const animate = () => {

        const target = +counter.innerText.replace(/\D/g, "");

        const count = +counter.getAttribute("data-count") || 0;

        const increment = target / speed;

        if (count < target) {

            counter.setAttribute("data-count", Math.ceil(count + increment));

            counter.innerText = Math.ceil(count + increment) + "+";

            requestAnimationFrame(animate);

        } else {

            counter.innerText = target + "+";

        }

    };

    animate();

});


// =========================
// HERO IMAGE FLOAT
// =========================

const heroImage = document.querySelector(".hero-image");

if (heroImage) {

    let position = 0;

    setInterval(() => {

        position = position === 0 ? 15 : 0;

        heroImage.style.transform = `translateY(${position}px)`;

    }, 2500);

}


// =========================
// SCROLL PROGRESS BAR
// =========================

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background = "#00d084";
progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});


// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#00d084";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =========================
// CARD HOVER EFFECT
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,208,132,.18),
        #111 65%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#111";

    });

});


// =========================
// PRELOADER (OPTIONAL)
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
