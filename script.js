// Theme Management - Dark mode as default
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.querySelector(".theme-toggle");
  const icon = themeToggle.querySelector("i");

  // 1. Initialize with dark mode if no preference exists
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }

  // 2. Apply the stored theme (default is dark)
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    // Dark mode is default - no need to add class
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // 3. Toggle functionality
  themeToggle.addEventListener("click", function() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    icon.classList.toggle("fa-moon", isLight);
    icon.classList.toggle("fa-sun", !isLight);
  });
});
// Mobile menu toggle
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Typing effect
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  
  const textArray = ["Frontend Developer", "Java Developer", "Student", "YouTuber"];
  const typingDelay = 100;
  const erasingDelay = 60;
  const newTextDelay = 1000;
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
  });
  
  // Initialize particles.js
  document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 120,  // Increased particle count
                density: {
                    enable: true,
                    value_area: 1000  // Larger area for better distribution
                }
            },
            color: {
                value: ["#4a90e2", "#50c878", "#f4a261", "#e9c46a"]  // Multiple colors
            },
            shape: {
                type: ["circle", "triangle", "star"],  // Mixed shapes
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 180,  // Increased connection distance
                color: "#ffffff",  // White connections
                opacity: 0.4,
                width: 1.5  // Thicker lines
            },
            move: {
                enable: true,
                speed: 3,  // Faster movement
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",  // Particles bounce at edges
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",  // Particles follow cursor
                    parallax: {
                        enable: true,
                        force: 60,
                        smooth: 10
                    }
                },
                onclick: {
                    enable: true,
                    mode: "bubble",  // Creates bubble effect on click
                    bubble: {
                        distance: 250,
                        size: 10,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    }
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1  // Connections become visible on hover
                    }
                },
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 0.3
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});
  
  // Slider functionality
  function initializeSlider(sliderClass) {
    const slider = document.querySelector(`.${sliderClass} .slider-container`);
    const slides = document.querySelectorAll(`.${sliderClass} .slide`);
    const prevBtn = document.querySelector(`.${sliderClass} .prev-btn`);
    const nextBtn = document.querySelector(`.${sliderClass} .next-btn`);
    const dotsContainer = document.querySelector(`.${sliderClass} .dots-container`);
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    
    // Initialize first slide
    slides[0].classList.add("active");
    
    // Next slide function
    function nextSlide() {
      goToSlide((currentSlide + 1) % totalSlides);
    }
    
    // Previous slide function
    function prevSlide() {
      goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }
    
    // Go to specific slide
    function goToSlide(index) {
      slides[currentSlide].classList.remove("active");
      document.querySelectorAll(`.${sliderClass} .dot`)[currentSlide].classList.remove("active");
      
      currentSlide = index;
      
      slides[currentSlide].classList.add("active");
      document.querySelectorAll(`.${sliderClass} .dot`)[currentSlide].classList.add("active");
    }
    
    // Event listeners
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });
  }
  
  // Initialize all sliders
  document.addEventListener("DOMContentLoaded", function() {
    initializeSlider("projects-slider");
    initializeSlider("achievements-slider");
    initializeSlider("certificates-slider");
  });
  
  // Theme toggle functionality
  document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".theme-toggle");
    const icon = themeToggle.querySelector("i");
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      if (savedTheme === "dark-mode") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark-mode");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
    
    // Toggle theme
    themeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      
      if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark-mode");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light-mode");
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });