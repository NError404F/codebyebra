      (function () {
         const btn = document.querySelector('.hamburger');
         const panel = document.getElementById('mobile-menu');
         const bar = btn.querySelector('.bar');

         function open() {
            btn.setAttribute('aria-expanded', 'true');
            btn.setAttribute('aria-label', 'Close menu');
            panel.classList.add('open');
            panel.setAttribute('aria-hidden', 'false');
            // animate bar to X
            bar.style.transform = 'rotate(45deg)';
            bar.style.background = 'white';
            bar.style.marginTop = '0';
            bar.style.opacity = '1';
            bar.style.setProperty('transition', 'transform .22s ease');
         }

         function close() {
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Open menu');
            panel.classList.remove('open');
            panel.setAttribute('aria-hidden', 'true');
            bar.style.transform = '';
            bar.style.background = '';
            bar.style.removeProperty('margin-top');
         }

         btn.addEventListener('click', function () {
            if (btn.getAttribute('aria-expanded') === 'true') close(); else open();
         });

         // close on outside click
         document.addEventListener('click', function (e) {
            if (!panel.contains(e.target) && !btn.contains(e.target) && panel.classList.contains('open')) close();
         });

         // close on escape
         document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      })();