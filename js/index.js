// show menu
$(".menu-icon i").click(function (e) {
  $(".navbar-content").removeClass("hide");
  $("body").addClass("noscroll");
});

// hide menu
$(".close-nav i").click(function (e) {
  $(".navbar-content").addClass("hide");
  $("body").removeClass("noscroll");
});

// click on menu link go to section
$("body").on("click", ".menu-link", function (e) {
  $(".item-active").removeClass("item-active");
  e.target.parentElement.classList.add("item-active");
  $(".navbar-content").addClass("hide");
  $("body").removeClass("noscroll");

});
