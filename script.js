// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ================= COPYRIGHT YEAR =================

document.getElementById("year").textContent = new Date().getFullYear();


// ================= IMPACT COUNTER =================

const counters = document.querySelectorAll("[data-target]");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;
        const duration = 1800;
        const increment = target / (duration / 16);

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.textContent =
                    Math.floor(current).toLocaleString() + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target.toLocaleString() + "+";
            }
        }

        updateCounter();

        observer.unobserve(counter);
    });

}, {
    threshold: 0.5
});


counters.forEach(counter => {
    observer.observe(counter);
});
