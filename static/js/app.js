/**
 * Mobile Navigation
 */
document.addEventListener("DOMContentLoaded", () => {
  const menu = new MmenuLight(document.querySelector("#mobile-nav"));
  const navigator = menu.navigation({ theme: "GAF" });
  const drawer = menu.offcanvas({
    position: "right",
    top: "96px",
  });
  document
    .querySelector(".mobile-nav-opener")
    .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.open();
    });
  document
    .querySelector(".mobile-nav-closer")
    .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.close();
    });
});

/*
 * Event Slider
 */

$(window).on("load", function () {
  var $slider = $(".event-slider");

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement("div");
    sliderCounter.classList.add("slider__counter");

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + "/" + slidesCount);
    };

    $slider.on("init", function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on("afterChange", function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
  }
});

$(document).ready(function () {
  /**
   * Header and Search Interactions
   */
  const headerEl = document.querySelector(".header");
  const searchField = document.querySelector(".search input");

  document
    .querySelector(".desktop-search-opener")
    .addEventListener("click", () => {
      headerEl.classList.add("header--desktop-search");
      searchField.focus();
    });

  document
    .querySelector(".desktop-search-closer")
    .addEventListener("click", () => {
      headerEl.classList.remove("header--desktop-search");
    });

  document
    .querySelector(".mobile-search-opener")
    .addEventListener("click", () => {
      headerEl.classList.add("header--mobile-search");
    });

  document.querySelectorAll(".mobile-search-closer").forEach((el) => {
    el.addEventListener("click", () => {
      headerEl.classList.remove("header--mobile-search");
    });
  });

  /**
   * Sticky Header
   */
  const body = document.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

  /**
   * Toggle
   */
  $("[data-toggle]").on("click", function () {
    const container = $(this).parents("[data-toggle-container]");
    const target = container.find("[data-toggle-target]");
    target.slideToggle();
    target.toggleClass("toggle-target--open");
    $(this).toggleClass("toggle--open");
    container.toggleClass("toggle-container--open");
  });
  /**
   * Homepage video
   */
  $(".hero__video-wrap").on("click", function () {
    $(this).toggleClass("player");
  });
});
