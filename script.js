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
  const openModalButtons = document.querySelectorAll('.openModal');
  const closeModalButtons = document.querySelectorAll('.close');
  const modals = document.querySelectorAll('.modal');

  openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modalId = button.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          modal.classList.add('show');
          setTimeout(() => {
              modal.style.display = 'block';
          }, 10);  // 少し遅らせてdisplay:block;を設定
      });
  });

  closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          modal.classList.remove('show');
          setTimeout(() => {
              modal.style.display = 'none';
          }, 500);  // トランジションの時間に合わせる
      });
  });

  window.addEventListener('click', (e) => {
      modals.forEach(modal => {
          if (e.target === modal) {
              modal.classList.remove('show');
              setTimeout(() => {
                  modal.style.display = 'none';
              }, 500);  // トランジションの時間に合わせる
          }
      });
  });
});
