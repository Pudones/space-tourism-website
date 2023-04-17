(() => {
  const navLinks = document.querySelectorAll('.desktop__nav__item a');
  const currentWindow = window.location.href;

  navLinks.forEach(el => {
    if (currentWindow.includes('index.html') && el === navLinks[0])
      el.classList.add('active__anchor');
    if (currentWindow.includes('destination.html') && el === navLinks[1])
      el.classList.add('active__anchor');
  })

})();