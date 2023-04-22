(() => {
  // Selectors of which card is visible
  const destCard = document.querySelectorAll('.destination__wrapper');
  const destNavItem = document.querySelectorAll('.destination__nav ul li');

  // Selector of the system image
  const destImage = document.querySelector('.destination__preview img');

  // Selectors of every "sub-page"
  const moonCard = destCard[0];
  const marsCard = destCard[1];
  const europaCard = destCard[2];
  const titanCard = destCard[3];


  clearAllCards = () => {
    destCard.forEach(el => el.classList.remove('destination--visible'));
    destNavItem.forEach(el => el.classList.remove('destination__nav--active'));
  }

  showCard = (el) => {
    el.classList.add('destination--visible');
  }

  destNavItem.forEach(el => el.addEventListener('click', () => {
    if(el === destNavItem[0]) {
      clearAllCards();
      destNavItem[0].classList.add('destination__nav--active');
      destImage.src = "./assets/destination/image-moon.webp";
      showCard(moonCard);
    }

    if(el === destNavItem[1]) {
      clearAllCards();
      destNavItem[1].classList.add('destination__nav--active');
      destImage.src = "./assets/destination/image-mars.webp";
      showCard(marsCard);
    }

    if(el === destNavItem[2]) {
      clearAllCards();
      destNavItem[2].classList.add('destination__nav--active');
      destImage.src = "./assets/destination/image-europa.webp";
      showCard(europaCard);
    }

    if(el === destNavItem[3]) {
      clearAllCards();
      destNavItem[3].classList.add('destination__nav--active');
      destImage.src = "./assets/destination/image-titan.webp";
      showCard(titanCard);
    }
  }))

})();