window.addEventListener('load', function () {
  // Wait 2 seconds and remove loader
  setTimeout(function () {
    document.body.classList.add('loaded');
    console.log('Loader removed'); // Check this in browser console
  }, 2000); // or 1000 for 1 second
});

// Keep your existing footer year code
document.getElementById('current-year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality can be added here later
    console.log('Website loaded successfully');
    
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
