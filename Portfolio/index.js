/* TOGGLE ICON NAVBAR */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (menuIcon.classList.contains("bx-menu")) {
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bxs-x-circle");
    }else {
        menuIcon.classList.remove("bxs-x-circle");
        menuIcon.classList.add("bx-menu");
    }
});


/* SCROLL SECTION */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        }
    })
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bxs-x-circle");
        menuIcon.classList.add("bx-menu");
    });
});

/* NAME CHANGE */
const typed = new Typed(".multiple-text", {
    strings: ["Front-End Developer", "Web Developer", "JavaScript Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/* content reveal */
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal(".about-content", { origin: "top" });
ScrollReveal().reveal(".about-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" })
