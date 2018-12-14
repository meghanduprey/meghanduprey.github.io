
// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#top").fadeIn("fast"); // Fade in the arrow
  } else {
    $("#top").fadeOut("fast"); // Else fade out the arrow
  }
});

$("#top").click(function() {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    500
  );
});

//DIV JUMP
function jump(h) {
  var top = document.getElementById(h).offsetTop;
  window.scrollTo(0, top);
}

//<!--     HAMBURGER MENU-->

$(function() {
  var width = 200,
    height = 220,
    speed = 300,
    button = $("#menu-button"),
    overlay = $("#overlay"),
    menu = $("#hamburger-menu");

  button.on("click", function(e) {
    if (overlay.hasClass("open")) {
      animate_menu("close");
    } else {
      animate_menu("open");
    }
  });

  overlay.on("click", function(e) {
    if (overlay.hasClass("open")) {
      animate_menu("close");
    }
  });

  $('a[href="#"]').on("click", function(e) {
    e.preventDefault();
  });

  function animate_menu(menu_toggle) {
    if (menu_toggle == "open") {
      overlay.addClass("open");
      button.addClass("on");
      overlay.animate({ opacity: 1 }, speed);
      menu.animate({ width: width, height: height }, speed);
    }

    if (menu_toggle == "close") {
      button.removeClass("on");
      overlay.animate({ opacity: 0 }, speed);
      overlay.removeClass("open");
      menu.animate({ width: "0", height: 0 }, speed);
    }
  }
});
