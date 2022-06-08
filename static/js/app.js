
//$(document).ready(function () {
  // $(".hero__video-wrap").on("click", function () {
  //   $(this).toggleClass("player");
  // })

  // $(function() { 
  //   var videos  = $(".hero__video-wrap");
  
  //       videos.on("click", function(){
  //           var elm = $(this);              
  
  //           elm.addClass("player");
  //           elm.off("click");
  //       });
  // });

  /**
   * Mobile Navigation
   */
  // document.addEventListener("DOMContentLoaded", () => {
  //   const menu = new MmenuLight(document.querySelector("#mobile-nav"));
  //   const navigator = menu.navigation({ theme: "GAF" });
  //   const drawer = menu.offcanvas({
  //     position: "right",
  //     top: "96px",
  //   });

  //   document
  //     .querySelector(".mobile-nav-opener")
  //     .addEventListener("click", (evnt) => {
  //       evnt.preventDefault();
  //       drawer.open();
  //     });

  //   document
  //     .querySelector(".mobile-nav-closer")
  //     .addEventListener("click", (evnt) => {
  //       evnt.preventDefault();
  //       drawer.close();
  //     });
  // });

  /**
   * Toggle
   */
  // $("[data-toggle]").on("click", function () {
  //   const container = $(this).parents("[data-toggle-container]");
  //   const target = container.find("[data-toggle-target]");
  //   target.slideToggle();
  //   target.toggleClass("toggle-target--open");
  //   $(this).toggleClass("toggle--open");
  //   container.toggleClass("toggle-container--open");
  // });

//});

//$(document).ready(function () {
  /**
   * Side Nav
   */

  // $(".sidenav__item ").on("click", function () {
  //   const isActive = $(this).hasClass("sidenav__item--active");

  //   if (isActive) {
  //     $(this).closest("li").find(".sidenav__content").fadeOut();
  //     $(this).removeClass("sidenav__item--active");
  //     $(this).closest(".sidenav").removeClass("sidenav--active");
  //   } else {
  //     $(".sidenav__content").fadeOut();
  //     $(".sidenav__item ").removeClass("sidenav__item--active");
  //     $(this).closest("li").find(".sidenav__content").fadeIn();
  //     $(this).addClass("sidenav__item--active");
  //     $(this).closest(".sidenav").addClass("sidenav--active");
  //   }
  // });

  // $(".sidenav__close").on("click", function () {
  //   $(".sidenav__content").fadeOut();
  //   $(".sidenav__item span").removeClass("sidenav__item--active");
  //   $(".sidenav").removeClass("sidenav--active");
  // });

  /**
   * Sticky Header
   */
  // const body = document.body;
  // const scrollUp = "scroll-up";
  // const scrollDown = "scroll-down";
  // let lastScroll = 0;

  // window.addEventListener("scroll", () => {
  //   const currentScroll = window.pageYOffset;
  //   if (currentScroll <= 0) {
  //     body.classList.remove(scrollUp);
  //     return;
  //   }
  //   if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
  //     // down
  //     body.classList.remove(scrollUp);
  //     body.classList.add(scrollDown);
  //   } else if (
  //     currentScroll < lastScroll &&
  //     body.classList.contains(scrollDown)
  //   ) {
  //     // up
  //     body.classList.remove(scrollDown);
  //     body.classList.add(scrollUp);
  //   }
  //   lastScroll = currentScroll;
  // });

  /**
   * Header and Search Interactions
   */
  // const headerEl = document.querySelector(".header");
  // const searchField = document.querySelector(".search input");

  // document
  //   .querySelector(".desktop-search-opener")
  //   .addEventListener("click", () => {
  //     headerEl.classList.add("header--desktop-search");
  //     searchField.focus();
  //   });

  // document
  //   .querySelector(".desktop-search-closer")
  //   .addEventListener("click", () => {
  //     headerEl.classList.remove("header--desktop-search");
  //   });

  // document
  //   .querySelector(".mobile-search-opener")
  //   .addEventListener("click", () => {
  //     headerEl.classList.add("header--mobile-search");
  //   });

  // document.querySelectorAll(".mobile-search-closer").forEach((el) => {
  //   el.addEventListener("click", () => {
  //     headerEl.classList.remove("header--mobile-search");
  //   });
  // });

  /**
   * Accordion
   */
  // $(".accordion").on("click", function () {
  //   const isThisOpen = $(this).hasClass("accordion--open");
  //   $(".accordion").removeClass("accordion--open");
  //   $(".accordion__content").slideUp();

  //   if (!isThisOpen) {
  //     $(this).find(".accordion__content").slideDown();
  //     $(this).addClass("accordion--open");
  //   }
  // });



//});


/*************7th jun2022  video poster iFrame ********/


$(document).ready(function ()  {
 
    // var videos = $(".hero__video-wrap");

    // videos.on("click", function () {
    //   var elm = $(this),
    //     conts = elm.contents(),
    //     le = conts.length,
    //     ifr = document.getElementsByTagName("iframe") ;

    //   for (var i = 0; i < le; i++) {
    //     if (conts[i].nodeType == 8) ifr = conts[i].textContent;
    //   }

    //   elm.addClass("player").html(ifr);
    //   elm.off("click");
    // });


  $(".hero__video-wrap").on("click", function () {
    
    $(this).toggleClass("player");
  });
  });




