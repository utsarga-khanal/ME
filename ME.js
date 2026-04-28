// 🔥 Fade-in on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});



// 🔥 Create glow element
const glowDiv = document.createElement("div");
glowDiv.classList.add("glow");
document.body.appendChild(glowDiv);


// Glow styling via JS
glowDiv.style.position = "fixed";
glowDiv.style.width = "300px";
glowDiv.style.height = "300px";
glowDiv.style.background = "radial-gradient(circle, rgba(56,189,248,0.15), transparent 60%)";
glowDiv.style.pointerEvents = "none";
glowDiv.style.transform = "translate(-50%, -50%)";
glowDiv.style.zIndex = "0";
