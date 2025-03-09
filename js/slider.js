var valid = false;
var slideIndex = 1;
let interval, index = 0;
let seconds = 0;


showDivs(slideIndex);
showSlides();
startTimer();
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

function currentDiv(n) {
  showDivs(slideIndex = n);
};

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("proyect_box");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].style.opacity = "0";
    x[i].addEventListener("pointerenter", (event) => {
      valid = true;
      console.log(valid);
      stopTimer();
    });
    x[i].addEventListener("pointerleave", (event) => {
      valid = false;
      console.log(valid);
      stopSlider();
      resetTimer();
      startTimer();
    });  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_pressed", "");
  }
  x[slideIndex-1].style.display = "flex";
  x[slideIndex-1].style.opacity = "1";  
  dots[slideIndex-1].className += " dot_pressed";
  stopSlider();
};

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("proyect_box");
    let dots = document.getElementsByClassName("dots");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = "0"; //
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_pressed", "");
      }
      slides[slideIndex-1].style.display = "flex";   
      slides[slideIndex-1].style.opacity = "1";   
      dots[slideIndex-1].className += " dot_pressed";
        // setTimeout(showSlides, 1000);
};


function updateDisplay() {  
        console.log(seconds);
        stopSlider();
};

function startTimer() {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
        }
        updateDisplay();
    }, 1000); // Actualiza cada segundo
};

function stopTimer() {
    clearInterval(interval);
};

function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    updateDisplay();
};

function stopSlider(){
  let limit = 6;
  if(seconds > limit){
    console.log("activado");
    setTimeout(showSlides, 1000);
    resetTimer();
    startTimer();
    };
};