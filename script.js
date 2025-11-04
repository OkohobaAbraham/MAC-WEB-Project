document.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const particlesContainer = document.querySelector('.particles');
const particlesContainer2 = document.querySelector('.particles2');
const particlesContainer3 = document.querySelector('.particles3');

function createParticle(container, num, size, speed, colors) {
    for (let i = 0; i < num; i++) {
        let particle = document.createElement('span');
        let x = Math.random() * 100;
        let y = Math.random() * 100;
        let particleSize = Math.random() * size + 1;
        let animationDuration = Math.random() * speed + 5;
        let color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.left = x + 'vw';
        particle.style.top = y + 'vh';
        particle.style.width = particleSize + 'px';
        particle.style.height = particleSize + 'px';
        particle.style.animationDuration = animationDuration + 's';
        particle.style.background = color;

        if (Math.random() > 0.5) {
            particle.classList.add('square');
        }

        container.appendChild(particle);
    }
}

createParticle(particlesContainer, 50, 2, 10, ['white', '#8A2BE2', '#4B0082', '#bdb4ff']);
createParticle(particlesContainer2, 30, 3, 15, ['white', '#8A2BE2', '#4B0082', '#bdb4ff']);
createParticle(particlesContainer3, 20, 4, 20, ['white', '#8A2BE2', '#4B0082', '#bdb4ff']);

const infoParticlesContainer = document.querySelector('.info-particles');
createParticle(infoParticlesContainer, 50, 3, 12, ['#3f377e', '#bdb4ff']);

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const infoTabs = document.querySelectorAll('.info-tab');
const infoContents = document.querySelectorAll('.info-content');

infoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        infoTabs.forEach(t => t.classList.remove('active'));
        infoContents.forEach(c => c.classList.remove('active'));

        // Add active class to the clicked tab
        tab.classList.add('active');

        // Add active class to the corresponding content
        const contentId = tab.getAttribute('data-tab');
        const content = document.querySelector(`.info-content[data-content='${contentId}']`);
        if (content) {
            content.classList.add('active');
        }
    });
});

window.addEventListener('load', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const dots = document.querySelectorAll('.dot');
    const nextButton = document.querySelector('.next-arrow');
    const prevButton = document.querySelector('.prev-arrow');

    if (track && cards.length > 0) {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const cardMarginRight = parseInt(window.getComputedStyle(cards[0]).marginRight);
        const slideWidth = cardWidth + cardMarginRight;
        let currentIndex = 0;

        const moveToSlide = (index) => {
            const slideAmount = slideWidth * index;
            track.style.transform = `translateX(-${slideAmount}px)`;
            currentIndex = index;

            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                moveToSlide(index);
            });
        });

        nextButton.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= cards.length) {
                nextIndex = 0; // Loop to start
            }
            moveToSlide(nextIndex);
        });

        prevButton.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = cards.length - 1; // Loop to end
            }
            moveToSlide(prevIndex);
        });
    }
});

const playButton = document.querySelector('.play-button');
const video = document.querySelector('.video-box');

playButton.addEventListener('click', () => {
  video.play();
  playButton.style.display = 'none';
  video.poster = '';
});