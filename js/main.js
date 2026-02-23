// Limberlost — Main JavaScript

(function () {
  'use strict';

  // --- Navigation scroll effect ---
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Mobile navigation toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Scroll reveal animations ---
  function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;

    reveals.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      var revealPoint = 100;

      if (top < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('load', revealOnScroll);
  revealOnScroll();

  // --- Contact form handling ---
  var contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;

      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      setTimeout(function () {
        btn.textContent = 'Inquiry Sent';
        btn.style.backgroundColor = 'var(--color-moss)';
        btn.style.color = 'var(--color-cream)';

        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.style.color = '';
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1000);
    });
  }

  // --- Smooth anchor scrolling for hash links ---
  document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      var hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      var hash = href.substring(hashIndex);
      var target = document.querySelector(hash);

      if (target) {
        // Only prevent default if we're on the same page
        var pagePath = href.substring(0, hashIndex);
        if (!pagePath || window.location.pathname.endsWith(pagePath)) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();
