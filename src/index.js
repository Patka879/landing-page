const discountSwiper = new Swiper('.swiper', {
    loop: true,
  
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
  
//   document.querySelector(".dropdown-menu-btn").addEventListener("click", function(event) {
//     event.preventDefault()
//     let nav = document.querySelector(".nav-top")
//     if (nav.classList.contains("nav-top-visible")) {
//       nav.classList.remove("nav-top-visible")
//     } else {
//       nav.classList.add("nav-top-visible")
//     }
//   })

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