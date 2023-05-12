(() => {
  // Nav Round Buttons
  const techNavBtn = document.querySelectorAll('.tech__main nav button');

  // Images
  const techImage = document.querySelector('.tech__main picture img');
  const techImageDesktop = document.querySelector('.tech__main picture source');

  // Text Tags
  const techInfoH2 = document.querySelector('.tech__info h2');
  const techInfoP = document.querySelector('.tech__info p');

  // Quickstart
  techNavBtn[0].classList.add('tech__nav__btn--active');

  // Function to "reset" button state when the user clicks on another button.
  resetBtnState = () => techNavBtn.forEach(el => el.classList.remove("tech__nav__btn--active"));

  // Function to handle text manipulation.
  textHandler = btn => {

    if (btn === "launch") {
      techImage.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
      techImageDesktop.srcset = "./assets/technology/image-launch-vehicle-portrait.jpg";

      techInfoH2.textContent = "LAUNCH VEHICLE";

      techInfoP.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    }

    if (btn === "port") {
      techImage.src = "./assets/technology/image-spaceport-landscape.jpg";
      techImageDesktop.srcset = "./assets/technology/image-spaceport-portrait.jpg";

      techInfoH2.textContent = "SPACEPORT";

      techInfoP.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    }

    if (btn === "capsule") {
      techImage.src = "./assets/technology/image-space-capsule-landscape.jpg";
      techImageDesktop.srcset = "./assets/technology/image-space-capsule-portrait.jpg";

      techInfoH2.textContent = "SPACE CAPSULE";

      techInfoP.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    }
  }


  techNavBtn.forEach(el => el.addEventListener('click', () => {

    const dataSet = el.dataset.name;

    resetBtnState();

    textHandler(dataSet);
    el.classList.add('tech__nav__btn--active');

  }))

})();