// Get width on browser window
const width = window.innerWidth;

// Initialize Swiper
if (width < 766) {
  var swiper = new Swiper(".section-one__swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

// Handle onclick expand button
const EXPAND_BUTTON = document.querySelector(".expand-button");
const SWIPER_WRAPPER = document.querySelector(".swiper-wrapper");

EXPAND_BUTTON.addEventListener("click", () => {
  const isExpand = EXPAND_BUTTON.classList.contains("expand");

  if (isExpand) {
    EXPAND_BUTTON.classList.remove("expand");
    SWIPER_WRAPPER.classList.remove("expand");
  } else {
    EXPAND_BUTTON.classList.add("expand");
    SWIPER_WRAPPER.classList.add("expand");
  }
});
