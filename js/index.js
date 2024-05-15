document.addEventListener('DOMContentLoaded', function(event) {

    var navbarToggler = document.querySelectorAll('.navbar-toggler')[0];
    navbarToggler.addEventListener('click', function(e) {
      e.target.children[0].classList.toggle('active');
    });

  });
