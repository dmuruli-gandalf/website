// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      // In a real application, you would send this data to a server
      console.log('Form submitted with data:', data);
      
      // Show success message
      formSuccess.classList.add('active');
      
      // Reset form
      contactForm.reset();
      
      // Scroll to success message
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Hide success message after 5 seconds
      setTimeout(function() {
        formSuccess.classList.remove('active');
      }, 5000);
    });
  }
});
