
// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to bottom function
function scrollToBottom() {
  const lastDiv = document.querySelector('.footer'); // Replace with the actual class of the last div
  lastDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

//this shows the arrow btn up animation
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const secondDiv = document.querySelector('.header-content'); 
  const scrollTrigger = secondDiv.offsetTop;

  if (window.scrollY > scrollTrigger) {
    scrollToTopBtn.classList.add('active'); 
  } else {
    scrollToTopBtn.classList.remove('active'); 
  }
});


//custom cursor
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  
  // const hoveredElement = document.elementFromPoint(mouseX, mouseY);

  // // if (hoveredElement) {
  // //   const isInvertHover = hoveredElement.classList.contains('invert-hover');

  // //   if (isInvertHover) {
  // //     customCursor.classList.add('inverted'); // Add the inverted class
  // //   } else {
  // //     customCursor.classList.remove('inverted'); // Remove the inverted class
  // //   }
  // // }
});



//countdown animation from 0 to specific value
function animateCount(element, target, duration) {
  const start = parseInt(element.textContent);
  const range = target - start;
  const startTime = performance.now();

  function updateValue(timestamp) {
      const currentTime = timestamp - startTime;
      const progress = currentTime / duration;

      if (progress < 1) {
          const value = start + range * progress;
          element.textContent = Math.round(value);
          requestAnimationFrame(updateValue);
      } else {
          element.textContent = target;
      }
  }

  requestAnimationFrame(updateValue);
}

const valueElements = document.querySelectorAll('.value');


//this shows the countdown animation only when div 4 is reached using Obeserver API
const div4 = document.querySelector('.div4');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          valueElements.forEach(element => {
              const target = parseInt(element.getAttribute('data-target'));
              animateCount(element, target, 1600);
          });
          observer.unobserve(div4); 
      }
  });
});

observer.observe(div4);



//this is the GAMIC logo 3d HOVER Effect...
const imageContainer = document.getElementById("image-container");

imageContainer.addEventListener("mousemove", (e) => {
    let xPos = (e.clientX / imageContainer.clientWidth) * 10;
    let yPos = (e.clientY / imageContainer.clientHeight) * 10;

    imageContainer.style.backgroundPosition = `${xPos}% ${yPos}%`;
});



//this is ON-Scroll Animations using 3rd party cdn
ScrollReveal({
    // reset: true,
   distance:'110px',
   duration: 1600,
   delay:100
});


ScrollReveal().reveal('.img-col, .img ', { delay: 250,origin:'bottom' });
ScrollReveal().reveal('.text-col2 ', { delay: 90,origin:'bottom' });
ScrollReveal().reveal('.text-col2 p ', { delay: 100,origin:'bottom' });
ScrollReveal().reveal('.text-col2 button ', { delay: 110,origin:'bottom' });


ScrollReveal().reveal('.text-col3 ', { delay:80,origin:'bottom' });
ScrollReveal().reveal('.text-col4 .animate1 ', { delay: 120,origin:'bottom' });
ScrollReveal().reveal('.text-col4 .animate2 ', { delay: 150,origin:'bottom' });


ScrollReveal().reveal('.all-box ', { delay: 300,origin:'bottom',interval:60 });
