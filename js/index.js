// let mySwiper = new Swiper(".swiper", {
//
// });

const swiper = new Swiper(".swiper-container", {
  speed: 200,
  slidesPerView: 2,
  // spaceBetween: 80,
  effect: "cards",
  // loop: true,
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

const accordionTitle = document.querySelectorAll(".item-title");
const accordionContent = document.querySelectorAll(".item-text");

const disabled = () => {
  accordionContent.forEach((elem) => {
    elem.classList.remove("active");
  });
};

accordionTitle.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    disabled();
    accordionContent[index].classList.add("active");
  });
});

const accordionTitleFeature = document.querySelectorAll(".item-feature-title");
const accordionContentFeature = document.querySelectorAll(".item-feature-text");
console.log(accordionTitle, accordionTitleFeature);
const disabledFeature = () => {
  accordionContentFeature.forEach((elem) => {
    elem.classList.remove("active");
  });
};

accordionTitleFeature.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    disabledFeature();
    accordionContentFeature[index].classList.add("active");
  });
});
