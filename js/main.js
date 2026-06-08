/*
  Unia Games landing page
  Minimal JavaScript for progressive enhancement only.
*/

/*
import { LINKS } from "./links.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#instagram-link").href = LINKS.instagram;
  document.querySelector("#facebook-link").href = LINKS.facebook;
  document.querySelector("#discord-link").href = LINKS.discord;
  document.querySelector("#linkedin-link").href = LINKS.linkedin;
});
*/

(function () {
  const yearElement = document.querySelector('[data-current-year]');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const labels = document.querySelectorAll('[data-theme-label]');

    // Hamburger menu functionality
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  function readSavedTheme() {
    try {
      return window.localStorage.getItem('unia-games-theme');
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem('unia-games-theme', theme);
    } catch (error) {
      /* localStorage may be unavailable in some privacy modes. */
    }
  }

  function setTheme(theme) {
    const isLight = theme === 'light';

    document.body.classList.toggle('light-theme', isLight);

    toggles.forEach(toggle => {
      toggle.setAttribute('aria-pressed', String(isLight));
    });

    labels.forEach(label => {
      label.textContent = isLight
        ? label.dataset.darkLabel
        : label.dataset.lightLabel;
    });
    saveTheme(theme);
  }

  const savedTheme = readSavedTheme();

  if (savedTheme === 'light' || savedTheme === 'dark') {
    setTheme(savedTheme);
  }

    toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {

      const isLight = document.body.classList.contains('light-theme');

      setTheme(isLight ? 'dark' : 'light');

      // Close mobile menu after theme change
      if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
      }
    });
  });

  const languageSwitchers = document.querySelectorAll('.language-switcher');

  document.addEventListener('click', (event) => {
    languageSwitchers.forEach((switcher) => {
      if (!switcher.contains(event.target)) {
        switcher.removeAttribute('open');
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      languageSwitchers.forEach((switcher) => switcher.removeAttribute('open'));
    }
  });



  if (hamburgerMenu && mobileMenu) {
    hamburgerMenu.addEventListener('click', () => {
      const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
      hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.setAttribute('aria-hidden', isExpanded);
      mobileMenu.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!hamburgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
      }
    });

    // Close menu when clicking on navigation links
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
      });
    });
  }
})();
