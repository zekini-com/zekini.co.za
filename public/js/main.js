// Zekini CC — marketing site interactions

(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      mobileNav.hidden = !open;
      mobileNav.setAttribute('data-open', String(open));
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
  }

  // Funky AI copilot typing demo
  var typing = document.getElementById('demo-typing');
  if (typing) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var lines = [
      "Scanning 2,481 accounts… 14 show churn signals: usage down >40% and no login in 21 days. Top risk: Northwind Ltd. Want me to draft a win-back email?"
    ];
    if (reduce) {
      typing.textContent = lines[0];
      typing.classList.add('done');
    } else {
      var full = lines[0];
      var i = 0;
      var tick = function () {
        typing.textContent = full.slice(0, i);
        i++;
        if (i <= full.length) {
          setTimeout(tick, 18 + Math.random() * 30);
        } else {
          typing.classList.add('done');
        }
      };
      // Start once the hero is on screen
      setTimeout(tick, 700);
    }
  }

  // Scroll reveal
  var revealTargets = document.querySelectorAll(
    '.card, .work-card, .steps li, .why-copy, .why-panel, .section-head, .stack-grid li'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }
})();
