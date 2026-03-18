const topbar = document.querySelector(".topbar");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (topbar) {
    const syncTopbar = () => {
        topbar.classList.toggle("is-scrolled", window.scrollY > 10);
    };

    syncTopbar();
    window.addEventListener("scroll", syncTopbar, { passive: true });
}

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("is-open");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
