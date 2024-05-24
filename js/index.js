$(".back-button").click(function (e) {
  e.preventDefault();
  $(this).closest(".mobile-menu-detail-box")
      .removeClass("show");
});