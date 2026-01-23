// Load header content
document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  
  if (headerPlaceholder) {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        
        // Re-initialize mobile menu toggle after header loads
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuToggle && mobileMenu) {
          mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
          });
        }
      })
      .catch(error => console.error('Error loading header:', error));
  }
});
