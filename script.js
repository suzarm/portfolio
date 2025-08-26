// Load tsParticles only in the main section
tsParticles.load("tsparticles", {
  particles: {
    number: { 
      value: 80, 
      density: { enable: true, area: 800 }
    },
    color: { value: ["#FFFFFF","#b300ff"] },
    shape: {
      type: "star",
      options: { star: { sides: 5, spikes: 0.2 } }
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
      animation: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false }
    },
    size: {
      value: { min: 2, max: 4 },
      random: true
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: "none",
      outModes: "bounce"
    },
    life: { duration: { value: 20, sync: false }, count: 1 }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "trail",
        parallax: { enable: false }
      }
    },
    modes: {
      trail: {
        delay: 0.01,
        quantity: 8,
        particles: {
          color: { value: "#FFFFFF" },
          shape: "star",
          size: {
            value: { min: 1, max: 5 },
            animation: { enable: true, speed: 3, size_min: 0.1, sync: false }
          },
          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: { enable: true, speed: 1, opacity_min: 0, sync: false }
          },
          move: {
            speed: { min: 1, max: 4 },
            direction: "outside",
            outModes: "destroy",
            straight: false
          },
          life: { duration: { value: 0.8, sync: false } }
        }
      }
    }
  }
});

// Pause particles when hovering the nav
const nav = document.querySelector('nav');

nav.addEventListener('mouseenter', () => {
    if(tsParticles.domItem(0)) tsParticles.domItem(0).pause();
});

nav.addEventListener('mouseleave', () => {
    if(tsParticles.domItem(0)) tsParticles.domItem(0).play();
});
const mainSection = document.querySelector('.main-content-container');
const particles = tsParticles.domItem(0);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      particles.play();   // enable
    } else {
      particles.pause();  // disable when scrolled out
    }
  });
}, { threshold: 0.1 });

observer.observe(mainSection);
