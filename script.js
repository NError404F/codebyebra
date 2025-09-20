document.addEventListener("DOMContentLoaded", () => {
   // --- Mobile Menu Toggle ---
   const menuBtn = document.getElementById("menu-btn");
   const menuIcon = document.getElementById("menu-icon");
   const mobileNav = document.getElementById("mobile-nav");

   menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");

      if (mobileNav.classList.contains("hidden")) {
         menuIcon.classList.replace("bi-x", "bi-list");
      } else {
         menuIcon.classList.replace("bi-list", "bi-x");
      }
   });

   // --- Smooth Scroll Function (reusable) ---
   function smoothScrollTo(targetY, duration) {
      const startY = window.scrollY || window.pageYOffset;
      const diff = targetY - startY;
      let startTime = null;

      function step(currentTime) {
         if (!startTime) startTime = currentTime;
         const timeElapsed = currentTime - startTime;
         const progress = Math.min(timeElapsed / duration, 1);

         // easeInOutCubic
         const ease =
            progress < 0.5 ?
            4 * progress * progress * progress :
            1 - Math.pow(-2 * progress + 2, 3) / 2;

         window.scrollTo(0, startY + diff * ease);

         if (timeElapsed < duration) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
   }

   // --- Anchor Links Smooth Scroll ---
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute("href"));
         if (target) {
            smoothScrollTo(target.offsetTop, 600);
         }
      });
   });

   // --- Go To Top Button ---
   const goTopBtn = document.getElementById("goTopBtn");

   window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
         goTopBtn.classList.add("show");
         goTopBtn.classList.remove("hide");
      } else {
         goTopBtn.classList.add("hide");
         goTopBtn.classList.remove("show");
      }
   });

   goTopBtn.addEventListener("click", () => {
      smoothScrollTo(0, 600);
   });
});