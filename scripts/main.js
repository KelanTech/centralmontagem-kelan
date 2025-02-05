  // Add hover effect to social icons
  document.querySelectorAll('.social-icon img').forEach(icon => {
    icon.addEventListener('click', () => {
      icon.style.transform = 'scale(1.2)';
      setTimeout(() => icon.style.transform = 'scale(1)', 200);
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