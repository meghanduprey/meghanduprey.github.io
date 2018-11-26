//slideshow
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

//function to validate form inputs and alert when something is missing
function validate() {
    var email = document.forms["contact"]["email"];
    var message = document.forms["contact"]["message"];

    if (email.value=="") {
       alert("Validation Failed: Please enter an email address");
       return false;
    }
    if (message.value=="") {
        alert("Validation Failed: Please enter a message")
        return false;
    }
    return true;
}