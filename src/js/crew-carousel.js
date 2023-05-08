(() => {
  const carouselDots = document.querySelectorAll('.carousel__dots__wrapper button');

  const crewmateSubtitle = document.querySelector('.crew__about h3');
  const crewmateTitle = document.querySelector('.crew__about h2');
  const crewmateDesc = document.querySelector('.crew__about p');
  const crewmateImage = document.querySelector('.crew__image img');
  
  // Add the class that makes the dot active on the first element (default)
  carouselDots[0].classList.add('--activeDot');

  handleText = (dot) => {
    if (dot === 0) {
      crewmateSubtitle.textContent = "COMMANDER";
      crewmateTitle.textContent = "DOUGLAS HURLEY";
      crewmateDesc.textContent = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and
      former
      NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`;
      crewmateImage.src = "./assets/crew/image-douglas-hurley.webp";
    }

    if (dot === 1) {
      crewmateSubtitle.textContent = "MISSION SPECIALIST";
      crewmateTitle.textContent = "MARK SHUTTLEWORTH";
      crewmateDesc.textContent = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
      the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as
      a space tourist.`;
      crewmateImage.src = "./assets/crew/image-mark-shuttleworth.webp";
    }

    if (dot === 2) {
      crewmateSubtitle.textContent = "PILOT";
      crewmateTitle.textContent = "VICTOR GLOVER";
      crewmateDesc.textContent = `Pilot on the first operational flight of the SpaceX Crew Dragon to the
      International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a
      crew member of Expedition 64, and served as a station systems flight engineer.`;
      crewmateImage.src = "./assets/crew/image-victor-glover.webp";
    }

    if (dot === 3) {
      crewmateSubtitle.textContent = "FLIGHT ENGINEER";
      crewmateTitle.textContent = "ANOUSHEH ANSARI";
      crewmateDesc.textContent = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
      Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the
      first Iranian in space.`;
      crewmateImage.src = "./assets/crew/image-anousheh-ansari.webp";
    }
  }

  resetDots = () => {
    carouselDots.forEach(el => el.classList.remove('--activeDot'));
  }

  carouselDots.forEach(el => el.addEventListener('click', () => {
    resetDots();

    if (el === carouselDots[0]) {
      handleText(0);
      carouselDots[0].classList.add('--activeDot');
    }

    if (el === carouselDots[1]) {
      handleText(1);
      carouselDots[1].classList.add('--activeDot');
    }

    if (el === carouselDots[2]) {
      handleText(2);
      carouselDots[2].classList.add('--activeDot');
    }

    if (el === carouselDots[3]) {
      handleText(3);
      carouselDots[3].classList.add('--activeDot');
    }
  }));

})();