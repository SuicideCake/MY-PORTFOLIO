// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typed.js Effect
new Typed('#typed', {
    strings: ["a Web Developer.", "a Designer.", "a Programmer."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Skill Circle Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-circle').forEach(skill => {
        const skillPos = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (skillPos < windowHeight) {
            const percentage = skill.getAttribute('data-skill');
            skill.style.background = `conic-gradient(#ff9800 ${percentage}%, #444 ${percentage}%)`;
        }
    });
});

// Lightbox Gallery
document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        const lightboxImg = document.createElement('img');
        lightboxImg.src = this.src;
        lightbox.appendChild(lightboxImg);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Testimonials Carousel
$(document).ready(function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
});

// Contact Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        // Perform AJAX submission or any other form submission logic
        alert('Message sent successfully');
        this.reset();
    }
});
