const swiper = new Swiper(".swiper-container", {
  speed: 200,
  slidesPerView: 2,
  // spaceBetween: 80,
  effect: "cards",
  loop: true,
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
});

const VideoController = function (isHovering, videoElement) {
  if (isHovering == true) {
    videoElement.play();
  } else if (isHovering == false) {
    videoElement.pause();
  }
};

// history block accordion
const accordionTitle = document.querySelectorAll(
  ".history__accordion-item .item__title"
);
const accordionContent = document.querySelectorAll(
  ".history__accordion-item .item__text"
);

const disabled = (item) => {
  accordionContent.forEach((elem) => {
    if (item !== elem) {
      elem.classList.remove("active");
    }
  });
};

accordionTitle.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    disabled(accordionContent[index]);
    accordionContent[index].classList.toggle("active");
  });
});

// Feature block accordion
const accordionTitleFeature = document.querySelectorAll(
  ".feature__accordion-item .item__title"
);
const accordionContentFeature = document.querySelectorAll(
  ".feature__accordion-item .item__text"
);

const disabledFeature = (item) => {
  accordionContentFeature.forEach((elem) => {
    if (elem !== item) {
      elem.classList.remove("active");
    }
  });
};

accordionTitleFeature.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    accordionContentFeature[index].classList.toggle("active");
    disabledFeature(accordionContentFeature[index]);
  });
});
// Facts block accordion
const accordionTitleFacts = document.querySelectorAll(
  ".facts__accordion-item .item__title"
);
const accordionContentFacts = document.querySelectorAll(
  ".facts__accordion-item .item__text"
);

const disabledFacts = (item) => {
  accordionContentFacts.forEach((elem) => {
    if (elem !== item) {
      elem.classList.remove("active");
    }
  });
};

accordionTitleFacts.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    accordionContentFacts[index].classList.toggle("active");
    disabledFacts(accordionContentFacts[index]);
  });
});


// HEADER
let menuBtn = document.querySelector(".header__menu-button");
let header = document.querySelector(".header__menu .menu__list");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  header.classList.toggle("active");
});
