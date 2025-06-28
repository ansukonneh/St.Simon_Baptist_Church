<<<<<<< HEAD
// Show loading animation while page loads
document.addEventListener('DOMContentLoaded', function() {
  // Simulate loading delay (remove this in production)
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 2000); // 2 seconds delay for demo
  
  // In production, use this instead:
  // window.addEventListener('load', function() {
  //   document.body.classList.add('loaded');
  // });
  
  // Rest of your existing JavaScript...
});
=======
// Keep your existing footer year code
document.getElementById('current-year').textContent = new Date().getFullYear();
>>>>>>> 262155d6e8aee187615f2a745a370f18485f2b55
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality can be added here later
    console.log('Website loaded successfully');
    
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
<<<<<<< HEAD
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // Only show loader if navigation type is 'navigate' or 'reload'
  const navigationType = performance.getEntriesByType("navigation")[0].type;

  if (navigationType === "reload" || navigationType === "navigate") {
    // Show loader
    loader.style.display = 'flex';

    // Hide after 2 seconds (you can change)
    setTimeout(() => {
      loader.style.display = 'none';
    }, 2000);
  } else {
    // Hide instantly if navigating within site
    loader.style.display = 'none';
  }
});
=======
>>>>>>> 262155d6e8aee187615f2a745a370f18485f2b55
