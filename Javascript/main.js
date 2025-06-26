// Show preloader while page loads
window.addEventListener('load', function () {
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 2000); // Loader duration in milliseconds
});

// Keep your existing footer year code
document.getElementById('current-year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality can be added here later
    console.log('Website loaded successfully');
    
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
