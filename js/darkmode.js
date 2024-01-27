document.getElementById('themeSwitch').addEventListener('change', function(event) {
    document.body.classList.toggle('dark-mode', event.target.checked);
    document.body.classList.toggle('light-mode', !event.target.checked);
  });