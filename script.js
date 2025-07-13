// Hamburger Menu

const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", ()=>{
    if(window.innerWidth <= 520){
    nav.classList.toggle("show");
}
})

// Nav Links And Pages

const homeLink = document.getElementById("home");
const aboutLink = document.getElementById("about");
const projectLink = document.getElementById("project");
const contactLink = document.getElementById("contact");

const about = document.querySelector(".about");
const project = document.querySelector(".projects");
const contact = document.querySelector(".contact");

homeLink.addEventListener("click", (e)=>{
    e.preventDefault();
    location.reload();
});
aboutLink.addEventListener("click", (e)=>{
    e.preventDefault();
    about.scrollIntoView({behavior:"smooth"});
});
projectLink.addEventListener("click", (e)=>{
    e.preventDefault();
    project.scrollIntoView({behavior:"smooth"});
});
contactLink.addEventListener("click", (e)=>{
    e.preventDefault();
    contact.scrollIntoView({behavior:"smooth"});
});

// Contact Message

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("showMessage").textContent = "Thank You";
    contactForm.classList.remove("hidden");
    contactForm.reset();
})