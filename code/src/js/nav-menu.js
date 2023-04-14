(() => {

  const menuBtn = document.querySelector('.btn__hamburger');
  const menuBtnClose = document.querySelector('.btn__hamburger--close');
  const mobileNav = document.querySelector('.mobile__nav');

  btns = [menuBtn, menuBtnClose];

  btns.forEach(el => el.addEventListener('click', () => {
    if(el === menuBtn) mobileNav.style.left = "0";
    if(el === menuBtnClose) mobileNav.style.left = "-100%";
  }));

})();