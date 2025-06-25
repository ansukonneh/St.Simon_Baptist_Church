// Show loader when links are clicked
document.querySelectorAll('a[href^="http"], a[href^="/"], a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Don't intercept special clicks (new tab, etc.)
        if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey) return;
        
        // Only handle same-domain links
        const href = this.getAttribute('href');
        if (href.startsWith('#') || href.startsWith('javascript:')) return;
        
        e.preventDefault();
        showLoader();
        
        // Delay navigation slightly for animation to show
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader-wrapper';
    loader.innerHTML = `
        <div class="loader">
            <div class="loader-inner">
                <div class="loader-circle"></div>
                <div class="loader-circle"></div>
                <div class="loader-circle"></div>
                <div class="loader-circle"></div>
                <div class="loader-circle"></div>
            </div>
            <div class="loader-text">St. Simon Baptist Church</div>
        </div>
    `;
    document.body.appendChild(loader);
    document.body.classList.add('loading');
}

// Keep your existing footer year code
document.getElementById('current-year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality can be added here later
    console.log('Website loaded successfully');
    
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
