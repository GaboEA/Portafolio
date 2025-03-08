var slideIndex = 1;
showDivs(slideIndex);
showSlides();

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("proyect_box");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_pressed", "");
  }
  x[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " dot_pressed";
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("proyect_box");
    let dots = document.getElementsByClassName("dots");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot_pressed", "");
    }
    slides[slideIndex-1].style.display = "flex";   
    dots[slideIndex-1].className += " dot_pressed";
    // dots[slideIndex-1].className += " fade";
    setTimeout(showSlides, 9000);
  }