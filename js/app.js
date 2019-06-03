(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict


$("#sendMessageButton").click(function(){

  var url = 'https://fdh2f6oau9.execute-api.us-east-1.amazonaws.com/default/sendEmail';

  var data = {
    name: $("#name").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
    message: $("#message").val(),
  }

  console.log(url);
  console.log(data);
  
  var x = $.post(url, data);
  console.log(x);


  // Email.send({
  //   Host : "email-smtp.us-east-1.amazonaws.com",
  //   // Username : "username",
  //   // Password : "password",
  //   To : 'wagnerlopes.bh@gmail.com',
  //   From : "wagnerlopes.website@gmail.com",
  //   Subject : "This is the subject",
  //   Body : "And this is the body"
  // }).then(
  //   message => alert(message)
  // );
});