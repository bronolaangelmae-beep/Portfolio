const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');


/* Menu show - hidden */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
})
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('animate-toggle');
}

navLink.forEach((a)=> a.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
const header = document.getElementById('header');

    this.scrollY >= 20
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/*=============== FADE IN & OUT ON SCROLL AND CLICK + ACTIVE LINK FIX ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  /*=== Fade on Scroll ===*/
  const fadeOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100 && rect.bottom > 100) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", fadeOnScroll);
  fadeOnScroll();


  /*=== Active Link on Scroll ===*/
  const scrollActive = () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 80; // adjust for header height
      const sectionId = current.getAttribute("id");
      const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove("active-link"));
        if (link) link.classList.add("active-link");
      }
    });
  };

  window.addEventListener("scroll", scrollActive);
  scrollActive();


  /*=== Smooth Fade on Nav Click ===*/
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Fade out all sections
      sections.forEach(s => s.classList.remove("visible"));

      // Scroll smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Highlight clicked link immediately
      navLinks.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");

      // Fade in target section after short delay
      setTimeout(() => {
        targetSection.classList.add("visible");
      }, 600);
    });
  });
});


/*===============  ABOUT SECTION IMAGE SLIDERS (MULTIPLE) ===============*/
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
var mixer = mixitup('.work-container', {
  selectors: {
    target: '.mix'
  },
  animation: {
    duration: 300
  }
});
/* Active work */
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
  linkWork.forEach((a)=>{
    a.classList.remove('active-work');
  });

  this.classList.add('active-work');
}
linkWork.forEach((a)=> a.addEventListener('click', activeWork));
/*=============== RESUME ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.resume-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.resume-header');
    const content = item.querySelector('.resume-content');
    const icon = item.querySelector('.resume-icon i');

    header.addEventListener('click', () => {
      const isOpen = item.classList.toggle('accordion-open');

      // Toggle height for the current item
      content.style.height = isOpen ? content.scrollHeight + 'px' : '0px';
      icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';

      // Close other open items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('accordion-open')) {
          otherItem.classList.remove('accordion-open');
          otherItem.querySelector('.resume-content').style.height = '0';
          otherItem.querySelector('.resume-icon i').className = 'ri-add-line';
        }
      });
    });
  });
});


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
 contactName = document.getElementById('contact-name');
 contactEmail = document.getElementById('contact-email');
 contactSubject = document.getElementById('contact-subject');
 contactMessage = document.getElementById('contact-message');
 message = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();

  if (contactName.value === '' || 
    contactEmail.value === '' || 
    contactSubject.value === '' || 
    contactMessage.value === ''
  ) {
    message.classList.remove('color-first');
    message.textContent = 'Please fill in all fields.';
    message.classList.add('color-red');

    setTimeout(() => {
      message.textContent = '';
    }, 3000);
  } else {
emailjs.sendForm('service_febbyqm', 'template_1oevlry', '#contact-form', 'Byt_0JJzmqRdPmSMv').then(
  () => {
    message.textContent = 'Message Sent';
    message.classList.add('color-first');

    setTimeout(() => {
      message.textContent = '';
    }, 5000);
  },
  (error) => {
    alert('OOPs! Something went wrong...', error);
  },
);

    contactName.value='';
    contactEmail.value='';
    contactSubject.value='';
    contactMessage.value='';

  }
};

contactForm.addEventListener('submit', sendEmail);
/*=============== LIGHT/DARK MODE ===============*/
const themeButton = document.getElementById('theme-toggle');
 darkTheme = 'dark-theme',
  iconTheme = 'ri-sun-line';

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle('ri-sun-line');
});    