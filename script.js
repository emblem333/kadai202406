document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  for (const link of links) {
      link.addEventListener('click', (e) => {
          e.preventDefault(); //新しいページ防止
          const targetId = link.getAttribute('href').substring(1); //.substring(1)先頭の＃を取り除く
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  }

  // Modal
  const openModalButtons = document.querySelectorAll('.openModal');
  const closeModalButtons = document.querySelectorAll('.close');
  const modals = document.querySelectorAll('.modal');
  const overlay = document.getElementById('overlay');
  let isScrolling;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    overlay.style.display = 'block';
    setTimeout(() => {
      modal.style.display = 'block';
    }, 10); // 少し遅らせてdisplay:block;を設定
  }

  function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }, 500); // トランジションの時間に合わせる
  }

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      openModal('modal7');
    }, 150); // 150ミリ秒後にスクロールが終了したと判断
  });

  overlay.addEventListener('click', () => {
    const visibleModal = document.querySelector('.modal.show');
    if (visibleModal) {
      closeModal(visibleModal);
    }
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

