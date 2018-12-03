//<!--     SCROLL TO TOP SCRIPT-->
// When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};
            function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    document.getElementById("myBtn").style.display = "block";
                } else {
                    document.getElementById("myBtn").style.display = "none";
                }
            }
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            };

//DIV JUMP
function jump(h){
            var top = document.getElementById(h).offsetTop;
            window.scrollTo(0, top);
       };

//<!--     HAMBURGER MENU-->

           $(function(){
          var width   = 200,
              height  = 220,
              speed   = 300,
              button  = $('#menu-button'),
              overlay = $('#overlay'),
              menu    = $('#hamburger-menu');

          button.on('click',function(e){
            if(overlay.hasClass('open')) {
              animate_menu('close');
            } else {
              animate_menu('open');
            }
          });

          overlay.on('click', function(e){
            if(overlay.hasClass('open')) {
              animate_menu('close');
            }
          });

          $('a[href="#"]').on('click', function(e){
            e.preventDefault();
          });

          function animate_menu(menu_toggle) {
            if(menu_toggle == 'open') {
              overlay.addClass('open');
              button.addClass('on');
              overlay.animate({opacity: 1}, speed);
              menu.animate({width: width, height: height}, speed);
            }

            if(menu_toggle == 'close') {
              button.removeClass('on');
              overlay.animate({opacity: 0}, speed);
              overlay.removeClass('open');
              menu.animate({width: "0", height: 0}, speed);
            }
          }
        });