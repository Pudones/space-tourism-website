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

  handleMoonCard = () => {
    destNavItem[0].classList.add('destination__nav--active');
    destImage.src = "./assets/destination/image-moon.webp";
    showCard(moonCard);
  }

  handleMarsCard = () => {
    destNavItem[1].classList.add('destination__nav--active');
    destImage.src = "./assets/destination/image-mars.webp";
    showCard(marsCard);
  }

  handleEuropaCard = () => {
    destNavItem[2].classList.add('destination__nav--active');
    destImage.src = "./assets/destination/image-europa.webp";
    showCard(europaCard);
  }

  handleTitanCard = () => {
    destNavItem[3].classList.add('destination__nav--active');
    destImage.src = "./assets/destination/image-titan.webp";
    showCard(titanCard);
  }

  destNavItem.forEach(el => el.addEventListener('click', () => {
    if (el === destNavItem[0]) {
      clearAllCards();
      handleMoonCard();
    }

    if (el === destNavItem[1]) {
      clearAllCards();
      handleMarsCard();
    }

    if (el === destNavItem[2]) {
      clearAllCards();
      handleEuropaCard();
    }

    if (el === destNavItem[3]) {
      clearAllCards();
      handleTitanCard();
    }
  }))

  // // Swipe Handler

  // let touchstartX = 0;
  // let touchendX = 0;

  // function checkDirection() {

  //   // Swipe Left
  //   if (touchendX < touchstartX) {

  //     if (destNavItem[0].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleMarsCard();
  //       return;
  //     }

  //     if (destNavItem[1].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleEuropaCard();
  //       return;
  //     }

  //     if (destNavItem[2].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleTitanCard();
  //       return;
  //     }

  //     if (destNavItem[3].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleMoonCard();
  //       return;
  //     }
  //   }
  //   // Swipe Right
  //   if (touchendX > touchstartX) {
  //     if (destNavItem[0].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleTitanCard();
  //       return;
  //     }

  //     if (destNavItem[1].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleMoonCard();
  //       return;
  //     }

  //     if (destNavItem[2].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleMarsCard();
  //       return;
  //     }

  //     if (destNavItem[3].classList.contains('destination__nav--active')) {
  //       clearAllCards();
  //       handleEuropaCard();
  //       return;
  //     }
  //   }
  // }

  // document.addEventListener('touchstart', el => {
  //   touchstartX = el.changedTouches[0].screenX;
  //   console.log(touchstartX)
  // })

  // document.addEventListener('touchend', el => {
  //   touchendX = el.changedTouches[0].screenX;
  //   console.log(touchendX)
  //   checkDirection();
  // })

})();