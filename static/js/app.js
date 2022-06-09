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
});

/*************7th jun2022  video poster iFrame ********/

// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("player", {
//     height: "170",
//     width: "300",
//     videoId: "NUsoVlDFqZg",
//     playerVars: {
//       autoplay: 0,
//       controls: 1,
//       info: 0,
//       showinfo: 0,
//       rel: 0,
//       modestbranding: 1,
//       wmode: "transparent"
//     },
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     }
//   });
// }
// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   document.getElementById("demo").innerHTML = "video ready!";
//   let theOverlay = document.getElementById("overlay");
//   player.mute();
//   theOverlay.onclick = function() {
//     this.style.display = "none";
//     player.playVideo();
//     document.getElementById("demo").innerHTML =
//       "Hide overlay and play the video!";
//   };
// }
// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// function onPlayerStateChange(event) {
//   if (event.data == 2) {
//     document.getElementById("demo").innerHTML = "paused!";
//   }
//   if (event.data == 1) {
//     document.getElementById("demo").innerHTML = "play!";
//   }
//   if (event.data == -1) {
//     document.getElementById("demo").innerHTML = "Loading!";
//   }
// }
