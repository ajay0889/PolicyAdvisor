// document.addEventListener('DOMContentLoaded', function(event) {

//     var navbarToggler = document.querySelectorAll('.back-button')[0];
//     navbarToggler.addEventListener('click', function(e) {
//       e.target.children[0].classList.toggle('hide');
//     });

//   });


$(function() {
  $(".back-button").click(function() {
    // $(this).toggleClass("hide");
    $('.mobile-menu-detail-box').toggleClass("hide");
  });
});