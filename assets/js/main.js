    const container = document.getElementById('tiltShake');

    container.addEventListener('mouseenter', () => {
      container.classList.remove('bounce-back');
      container.classList.add('hovered');
    });

    container.addEventListener('mouseleave', () => {
      container.classList.remove('hovered');
      container.classList.add('bounce-back');
    });


    gsap.from("#about .space-y-6", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    const circle = document.getElementById('circle');
    const hoverText = document.getElementById('hoverText');

    const originalText = hoverText.textContent;
    const hoverTextContent = "I also enjoy crafting animations, exploring new tech, and creating delightful user interfaces.";

    function showCircle() {
      circle.style.display = 'block';
      hoverText.textContent = hoverTextContent;
    }

    function hideCircle() {
      circle.style.display = 'none';
      hoverText.textContent = originalText;
    }

    function checkRadius(e) {
      const rect = hoverText.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const radius = 0.2 * Math.min(rect.width, rect.height);

      if (distance <= radius) {
        if (circle.style.display === 'none') {
          showCircle();
        }
        circle.style.top = e.clientY + 'px';
        circle.style.left = e.clientX + 'px';
      } else {
        if (circle.style.display !== 'none') {
          hideCircle();
        }
      }
    }

    // Attach event to the whole document so it always tracks mouse
    document.addEventListener('mousemove', checkRadius);
    hoverText.addEventListener('mouseleave', hideCircle);

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particlesArray = [];
  let shootingStars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  class ShootingStar {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height * 0.5;
      this.len = Math.random() * 80 + 50;
      this.speed = Math.random() * 10 + 6;
      this.angle = Math.PI / 4;
      this.alpha = 1;
      this.trail = 0;
    }

    update() {
      this.x += this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);
      this.alpha -= 0.01;
      this.trail += 1;
      if (this.alpha <= 0 || this.trail > 100) this.reset();
    }

    draw() {
      ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - this.len, this.y - this.len);
      ctx.stroke();
    }
  }

  function initParticles(count = 150) {
    particlesArray = [];
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }

  function initShootingStars(count = 2) {
    shootingStars = [];
    for (let i = 0; i < count; i++) {
      shootingStars.push(new ShootingStar());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });

    shootingStars.forEach(s => {
      s.update();
      s.draw();
    });

    requestAnimationFrame(animate);
  }

  initParticles();
  initShootingStars();
  animate();
});

      // Typing effect
    const text = "Frontend wizard + WordPress tamer — crafting fun & fabulous websites.";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      }
    }
    window.onload = typeWriter;

    const fixedHeader = document.getElementById('fixed-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
        fixedHeader.classList.add('visible');
        } else {
        fixedHeader.classList.remove('visible');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        navLinks.forEach(other => {
        if (other !== link) {
            other.classList.add('dimmed');
            other.classList.remove('hovered');
        } else {
            other.classList.add('hovered');
            other.classList.remove('dimmed');
        }
        });
    });

    link.addEventListener('mouseleave', () => {
        navLinks.forEach(other => {
        other.classList.remove('dimmed');
        other.classList.remove('hovered');
        });
    });
    });

    const burger = document.getElementById('burger');
    let isOpen = false;

    burger.addEventListener('click', () => {
        isOpen = !isOpen;
        burger.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}" class="w-6 h-6 text-white"></i>`;
        lucide.createIcons(); // Re-render icon
    });

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const aboutSection = document.getElementById("about");
  const heroContent = document.getElementById("heroContent");

  // Wait for text animation to complete
  setTimeout(() => {
    loadingScreen.classList.add("slice-out");

    loadingScreen.addEventListener("animationend", () => {
      loadingScreen.style.display = "none";

      // Reveal sections
      aboutSection.classList.remove("opacity-0", "translate-y-10");
      heroContent.classList.remove("opacity-0");
      heroContent.style.transform = "translateX(0)";
    });
  }, 1200); // 1.2s delay to allow text animation
});






    gsap.from("#hero h1", {
  opacity: 0,
  y: 40,
  duration: 1.4,
  ease: "power3.out"
});

gsap.from("#hero p", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  delay: 0.3,
  ease: "power2.out"
});


    const socialLinks = document.querySelectorAll('.social-links-sidebar a');

    socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        socialLinks.forEach(other => {
        if (other !== link) {
            other.classList.add('dimmed');
            other.classList.remove('hovered');
        } else {
            other.classList.add('hovered');
            other.classList.remove('dimmed');
        }
        });
    });

    link.addEventListener('mouseleave', () => {
        socialLinks.forEach(other => {
        other.classList.remove('dimmed', 'hovered');
        });
    });
    });

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 30) {
    header.classList.add("bg-black/60", "backdrop-blur-lg", "shadow-lg");
  } else {
    header.classList.remove("bg-black/60", "backdrop-blur-lg", "shadow-lg");
  }
});

// GSAP + ScrollTrigger animation
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    wrapper: '#app',
    content: '#app > *',
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
  });
});


// ✅ Let Lenis and GSAP ScrollTrigger talk
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // <-- this line is crucial
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


document.querySelectorAll('.hover-tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'transform 0.3s ease';
    setTimeout(() => card.style.transition = '', 300);
  });
});


// Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
});

// Scroll progress bar
window.addEventListener('scroll', () => {
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / scrollHeight) * 100;
  const bar = document.getElementById('scroll-bar');
  bar.style.height = `${progress}vh`;
  bar.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; // ← Change color here
});


    document.getElementById("year").textContent = new Date().getFullYear();

const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

(() => {
  const navLinks = document.querySelectorAll('.nav-link');
  let lastScrollY = window.scrollY;

  function setActiveLink() {
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    const scrollDirection = window.scrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = window.scrollY;

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        if (!link.classList.contains('active')) {
          link.classList.add('active');
          link.classList.add(scrollDirection === 'down' ? 'slide-in-left' : 'slide-in-right');

          setTimeout(() => {
            link.classList.remove('slide-in-left', 'slide-in-right');
          }, 300);
        }
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
})();

  


(() => {

  const text = document.getElementById('cursor-follow-text');

  document.addEventListener('mousemove', (e) => {
    const rect = text.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const radius = 10;

    if (distance <= radius) {
      const moveFactor = 4;
      const moveX = -dx / moveFactor;
      const moveY = -dy / moveFactor;
      text.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      text.style.transform = 'translate(0px, 0px)';
    }
  });
})();
