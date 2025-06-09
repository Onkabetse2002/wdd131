// Use DOMContentLoaded to ensure script runs after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Utility: switch visible section and update nav aria-current
  function switchSection(event, sectionId) {
    if (event) {
      event.preventDefault();
    }
    const sections = ['home', 'about', 'contact'];
    sections.forEach(id => {
      document.getElementById(id).hidden = (id !== sectionId);
      let navLink = document.getElementById('nav-' + id);
      if (id === sectionId) {
        navLink.setAttribute('aria-current', 'page');
        // move focus to container section for screen readers
        document.getElementById(id).focus();
      } else {
        navLink.removeAttribute('aria-current');
      }
    });
  }

  window.switchSection = switchSection; // Expose globally for inline handlers

  // Default section shown
  switchSection(null, 'home');

  // Contact form handling with validation and localStorage
  const form = document.getElementById('contactForm');
  const statusElem = document.getElementById('form-status');

  // Load saved data
  function loadFormData() {
    const saved = localStorage.getItem('contactFormData');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.name) form.name.value = data.name;
        if (data.email) form.email.value = data.email;
        if (data.message) form.message.value = data.message;
      } catch { /* ignore parse errors */ }
    }
  }

  loadFormData();

  // Validate fields with visual feedback
  function validateForm(data) {
    const errors = [];
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Please enter your name (at least 2 characters)');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Please enter a valid email address');
    }
    if (!data.message || data.message.trim().length < 5) {
      errors.push('Please enter a message (at least 5 characters)');
    }
    return errors;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    const errors = validateForm(data);
    if (errors.length > 0) {
      statusElem.textContent = errors.join('. ') + '.';
      return;
    }

    // Save to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(data));
    statusElem.textContent = 'Thank you, your message has been saved!';

    // Reset form fields after short delay
    setTimeout(() => {
      form.reset();
      statusElem.textContent = '';
    }, 3000);
  });
});
