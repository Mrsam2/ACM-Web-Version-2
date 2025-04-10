document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Sticky Navigation
  const navbar = document.getElementById("navbar")
  const sticky = navbar ? navbar.offsetTop : 0

  window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky")
    }
  }

  // Testimonial Slider
  const slides = document.querySelectorAll(".testimonial-slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0

    // Function to show a specific slide
    function showSlide(n) {
      // Hide all slides
      slides.forEach((slide) => {
        slide.classList.remove("active")
      })

      // Remove active class from all dots
      dots.forEach((dot) => {
        dot.classList.remove("active")
      })

      // Show the specific slide and activate the corresponding dot
      slides[n].classList.add("active")
      dots[n].classList.add("active")

      currentSlide = n
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
      })
    })

    // Event listeners for prev/next buttons
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        let newSlide = currentSlide - 1
        if (newSlide < 0) newSlide = slides.length - 1
        showSlide(newSlide)
      })

      nextBtn.addEventListener("click", () => {
        let newSlide = currentSlide + 1
        if (newSlide >= slides.length) newSlide = 0
        showSlide(newSlide)
      })
    }

    // Auto slide change
    setInterval(() => {
      let newSlide = currentSlide + 1
      if (newSlide >= slides.length) newSlide = 0
      showSlide(newSlide)
    }, 5000)
  }

  // Event Filters
  const filterBtns = document.querySelectorAll(".filter-btn")
  const eventCards = document.querySelectorAll(".past-event-card")

  if (filterBtns.length > 0 && eventCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))

        // Add active class to clicked button
        btn.classList.add("active")

        const filter = btn.getAttribute("data-filter")

        // Show/hide event cards based on filter
        eventCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields")
        return
      }

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show an alert
      alert("Thank you for your message! We will get back to you soon.")

      // Reset the form
      contactForm.reset()
    })
  }
})
