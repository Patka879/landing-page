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
  
document.getElementById('toggle-menu-button').addEventListener("click", function(event) {
    event.preventDefault()
    let nav = document.querySelector(".nav-mobile-overlay")
    if (!nav.classList.contains(".opened")) {
        nav.style.display = "flex"
    } else if (nav.classList.contains(".opened")) {
        nav.style.display = "none"
    }
})

document.querySelector(".submit-btn").addEventListener("click", function(event) {
    event.preventDefault()
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".form-overlay").style.display = "block";
})

document.querySelector(".ok-btn").addEventListener("click", function(event) {
    event.preventDefault()
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".form-overlay").style.display = "none";
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