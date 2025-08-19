// Simple JS for dropdown hover delay
document.querySelectorAll('.dropdown').forEach(drop => {
  let timer;
  drop.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    drop.querySelector('.dropdown-content').style.display = 'block';
  });
  drop.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      drop.querySelector('.dropdown-content').style.display = 'none';
    }, 120);
  });
});

