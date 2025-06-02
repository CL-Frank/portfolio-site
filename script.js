particlesJS("particles-js", {
    particles: {
      number: {
        value: 30,         // 🔧 Number of dots
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ff7675", "#74b9ff", "#ffeaa7"]  // 🎨 Dot colors
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3,
        random: true
      },
      size: {
        value: 6,
        random: true
      },
      move: {
        enable: true,
        speed: 0.5,         // 🌀 Animation speed
        direction: "top",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false
        }
      }
    },
    
    retina_detect: true,
    
  });

    document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const recaptcha = grecaptcha.getResponse();
    if (!recaptcha) {
      e.preventDefault();
      alert("Please complete the CAPTCHA.");
    }
  });