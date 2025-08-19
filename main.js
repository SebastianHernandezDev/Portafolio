

  document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      updateIcon('light');
    }
  });


  document.getElementById('toggle-theme').addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateIcon(isLight ? 'light' : 'dark');
  });

  
  function updateIcon(mode) {
    const icon = document.querySelector('#toggle-theme i');
    if (mode === 'light') {
      icon.classList.remove('bi-moon-stars');
      icon.classList.add('bi-sun');
    } else {
      icon.classList.remove('bi-sun');
      icon.classList.add('bi-moon-stars');
    }
  }

