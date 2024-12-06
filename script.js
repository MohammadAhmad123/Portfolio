document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        size: { value: 2 },
        move: { speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});





