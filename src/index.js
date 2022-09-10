const hamburgerButton = document.querySelector('.hamburger-btn')
const mobileOverlay = document.querySelector(".nav-mobile-overlay")
const overlay = document.querySelector(".overlay")
const formOverlay = document.querySelector(".form-overlay")


const discountSwiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
  },
  
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
  
hamburgerButton.addEventListener("click", function(event) {
    event.preventDefault()
    this.classList.toggle('active')
    if (hamburgerButton.classList.contains('active')) {
        mobileOverlay.style.display = "flex" 
    } else {
        mobileOverlay.style.display = "none"
    }
})

document.querySelector(".nav-mobile-btn").addEventListener("click", function(event) {
  event.preventDefault()
  mobileOverlay.style.display = "none";
  hamburgerButton.classList.remove('active')
})

document.querySelector(".nav-mobile-link").addEventListener("click", function(event) {
  event.preventDefault()
  mobileOverlay.style.display = "none";
  hamburgerButton.classList.remove('active')
})

document.querySelector(".submit-btn").addEventListener("click", function(event) {
  event.preventDefault()
  overlay.style.display = "block";
  formOverlay.style.display = "block";
})

document.querySelector(".ok-btn").addEventListener("click", function(event) {
  event.preventDefault()
  overlay.style.display = "none";
  formOverlay.style.display = "none";
})

function reveal() {
    let reveals = document.querySelectorAll(".facts-section, .innovation-section, .gallery-section, .form-section");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);
reveal();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});