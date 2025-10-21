const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');


/* Menu show - hidden */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
})
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
const header = document.getElementById('header');

    this.scrollY >= 20
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
 // ABOUT SECTION IMAGE SLIDERS (MULTIPLE)
  // ==============================
  document.querySelectorAll(".about__slider").forEach((slider) => {
    const slides = slider.querySelectorAll("img");
    const dotsContainer = slider.nextElementSibling; // assumes .about__dots is right after slider
    let index = 0;
    let slideInterval;

    // Create dots dynamically
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);

      dot.addEventListener("click", () => {
        clearInterval(slideInterval); // stop auto when user clicks
        showSlide(i);
        startAutoSlide();
      });
    });

    const dots = dotsContainer.querySelectorAll("span");

    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));

      slides[n].classList.add("active");
      dots[n].classList.add("active");

      index = n;
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 3500);
    }

    if (slides.length > 0) {
      showSlide(0);
      startAutoSlide();
    }
  });
/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Active work */

/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/

/* Switcher show */

/* Switcher hidden */

/*=============== THEME COLORS ===============*/

/*=============== LIGHT/DARK MODE ===============*/
