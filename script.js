 // Auto-update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Form submission handler with better feedback
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Simulate network delay for demo (remove in production)
        setTimeout(() => {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        }, 1500);
      });
    }
    
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item h4');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.parentElement.classList.toggle('active');
      });
    });