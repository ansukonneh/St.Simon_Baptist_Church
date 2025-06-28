// Show loading animation while page loads
document.addEventListener('DOMContentLoaded', function() {
  // Simulate loading delay (remove this in production)
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 2000); // 2 seconds delay for demo
  
});
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality can be added here later
    console.log('Website loaded successfully');
    
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});