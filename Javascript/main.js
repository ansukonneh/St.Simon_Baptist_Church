
window.addEventListener('load', function () {
  console.log("Page fully loaded");
  setTimeout(function () {
    console.log("Setting loaded class");
    document.body.classList.add('loaded');
  }, 2000);
});

// Keep your existing footer year code
document.getElementById('current-year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality can be added here later
    console.log('Website loaded successfully');
    
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
