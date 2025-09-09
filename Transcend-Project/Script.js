   
   // Progress Bar
   
   window.addEventListener('load', () => {
      const progressBar = document.getElementById('progress-bar');
      const progressContainer = document.getElementById('progress-container');

      // Start loading animation
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 100);

      // Remove the loading bar after it's filled
      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 2200); // 2s for line + 0.2s buffer
    });
//      // Use Intersection Observer for scroll reveal
    const steps = document.querySelectorAll(".step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 400); // delay for staggered animation
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    steps.forEach((step) => {
      observer.observe(step);
    });
 const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sideMenu = document.getElementById('sideMenu');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Open menu
    menuBtn.addEventListener('click', () => {
      sideMenu.classList.add('open');
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
      sideMenu.classList.remove('open');
    });

    // Auto close menu when a link is clicked
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        sideMenu.classList.remove('open');
      });
    });
//Do section
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.Do-step');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Optional: Stop observing after showing
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Trigger when 20% of the element is visible
  });

  steps.forEach(step => {
    observer.observe(step);
  });
});

  //Featured Images Section
    let images = Array.from(document.querySelectorAll('.Featured-img img '));

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.Featured-img img');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Optional: Stop observing after showing
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Trigger when 20% of the element is visible
  });

  steps.forEach(step => {
    observer.observe(step);
  });
});

//Count-Section
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200; // Adjust speed

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});


  // Get the button
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        // Show the button when scrolled down
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        };

        // Scroll to top when the button is clicked
        scrollToTopBtn.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };



     
        