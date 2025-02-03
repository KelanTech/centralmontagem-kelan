  // Add hover effect to social icons
  document.querySelectorAll('.social-icon img').forEach(icon => {
    icon.addEventListener('click', () => {
      icon.style.transform = 'scale(1.2)';
      setTimeout(() => icon.style.transform = 'scale(1)', 200);
    });
  });
  
  // Display modal for PDFs (future integration)
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const pdfUrl = this.getAttribute('href');
      alert(`Abrindo o manual: ${pdfUrl}`);
    });
  });
  
  
  document.querySelectorAll('.social-icon img').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });