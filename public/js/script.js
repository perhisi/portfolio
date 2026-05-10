(function () {
  function init() {
    const mobileOpenButton = document.getElementById("mobile-open-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileCloseButton = document.getElementById("mobile-close-button");

    // Toggle mobile menu (guarded)
    if (mobileOpenButton && mobileMenu) {
      mobileOpenButton.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      });
    }

    // Close mobile menu
    const closeMobileMenu = () => {
      if (mobileMenu) mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    };

    if (mobileCloseButton) {
      mobileCloseButton.addEventListener("click", closeMobileMenu);
    }

    // Close menu when any link inside is clicked
    if (mobileMenu) {
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });
    }

    // Accessibility: close menu on Escape
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        mobileMenu &&
        !mobileMenu.classList.contains("hidden")
      ) {
        closeMobileMenu();
        if (mobileOpenButton) mobileOpenButton.focus();
      }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".project-card, .glass-card").forEach((el) => {
      el.style.opacity = "0";
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
