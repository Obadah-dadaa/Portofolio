/* ================================
   PORTFOLIO SCRIPT
================================ */

(function () {
  'use strict';

  // ====== ROTATING TITLE ======
  var titles = ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
  var titleEl = document.getElementById('rotatingTitle');
  var currentIndex = 0;

  function rotateTitle() {
    if (!titleEl) return;
    titleEl.style.opacity = '0';
    titleEl.style.transform = 'translateY(-12px)';
    setTimeout(function () {
      currentIndex = (currentIndex + 1) % titles.length;
      titleEl.textContent = titles[currentIndex];
      titleEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      titleEl.style.opacity = '1';
      titleEl.style.transform = 'translateY(0)';
    }, 400);
  }

  if (titleEl) {
    titleEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setInterval(rotateTitle, 3000);
  }

  // ====== PARTICLES ======
  var particlesContainer = document.getElementById('particles');

  function createParticles() {
    if (!particlesContainer) return;
    var count = 30;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.width = (Math.random() * 2 + 1) + 'px';
      p.style.height = p.style.width;
      p.style.animationDuration = (Math.random() * 12 + 8) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      particlesContainer.appendChild(p);
    }
  }

  createParticles();

  // ====== MOBILE NAV TOGGLE ======
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      var bars = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('open')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        var bars = navToggle.querySelectorAll('span');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      });
    });
  }

  // ====== SMOOTH SCROLL ======
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 64;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ====== ACTIVE NAV LINK ON SCROLL ======
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    var scrollY = window.pageYOffset;
    sections.forEach(function (section) {
      var top = section.offsetTop - 100;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ====== REVEAL ON SCROLL ======
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ====== PROJECT FILTER ======
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Show/hide cards with animation
      projectCards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Re-trigger reveal animation
          card.classList.remove('visible');
          setTimeout(function () { card.classList.add('visible'); }, 20);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ====== NAVBAR SHADOW ON SCROLL ======
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (!navbar) return;
    if (window.pageYOffset > 60) {
      navbar.style.background = 'rgba(10, 10, 15, 0.95)';
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.80)';
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });

})();
