document.getElementById('themeSwitch').addEventListener('change', function(event) {
    var contactImg = document.getElementById('contact');
    var aboutImg = document.getElementById('about');
    document.body.classList.toggle('dark-mode', event.target.checked);
    document.body.classList.toggle('light-mode', !event.target.checked);
    
  
    if (event.target.checked) {
        // Dark mode
        contactImg.src = "images/black.png";
        aboutImg.src="images/black.png"
      } else {
        // Light mode
        contactImg.src = "images/profile.png";
        aboutImg.src="images/profile.png"
      }
  });

