document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll functionality
  const links = document.querySelectorAll('nav ul li a');
  for (const link of links) {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  }

  // Modal functionality
  const modals = [
      { buttonId: 'openModal1', modalId: 'modal1', closeId: 'closeModal1' },
      { buttonId: 'openModal2', modalId: 'modal2', closeId: 'closeModal2' }
  ];

  for (const modal of modals) {
      const openButton = document.getElementById(modal.buttonId);
      const closeButton = document.getElementById(modal.closeId);
      const modalElement = document.getElementById(modal.modalId);

      openButton.addEventListener('click', () => {
          modalElement.style.display = 'block';
      });

      closeButton.addEventListener('click', () => {
          modalElement.style.display = 'none';
      });

      window.addEventListener('click', (e) => {
          if (e.target === modalElement) {
              modalElement.style.display = 'none';
          }
      });
  }
});
