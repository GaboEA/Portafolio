var valid = false;
var slideIndex = 1;

let interval, index = 0;
let seconds = 0;

// var expandVideo = document.getElementById("v_expand");
// var img = document.getElementById("p_img");
var expandVideo = document.getElementsByClassName("video_expand");
var img = document.getElementsByClassName("proyect_img");
var span = document.getElementsByClassName("close");
var nav = document.getElementById("--nav_bg");
var _body = document.getElementById("_body");
var tempVideo;

var txt_videos = [];
txt_videos[0] = "<iframe class=\"video_content\" id=\"video_youtube\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Zn3HLaHcv1Q?si=-E4H9urHVKx-M3wN\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen class=\"proyect_video\"></iframe>";
txt_videos[1] = "<p id=\"video_youtube\" style=\"Color: #ffffff\">Aquí va el video 02</p>";
txt_videos[2] = "<p id=\"video_youtube\" style=\"Color: #ffffff\">Aquí va el video 03</p>";


var videoValid = false;
var indexNum = 0;

showDivs(slideIndex);
showSlides();

if(!videoValid){
  startTimer();
}
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
      // console.log(valid);
      stopTimer();
    });
    x[i].addEventListener("pointerleave", (event) => {
      valid = false;
      // console.log(valid);
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
  indexNum = slideIndex-1;
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
  indexNum = slideIndex-1;
  // setTimeout(showSlides, 1000);
};


function updateDisplay() {
  // console.log(seconds);
  stopSlider();
};

function startTimer() {
  if(!videoValid){ //validador video tamaño grande
    interval = setInterval(() => {
      seconds++;
      
      if (seconds === 60) {
        seconds = 0;
      }
      updateDisplay();
    }, 1000); // Actualiza cada segundo
  }
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
    // console.log("activado");
    setTimeout(showSlides, 1000);
    resetTimer();
    startTimer();
  };
};

// clic image function

function numDetection(n){
  n = indexNum;
  return n;
}

img[0].onclick = function(){
  expandVideo[indexNum].style.display = "block";
  span[indexNum].insertAdjacentHTML("afterend", txt_videos[indexNum]);
  tempVideo = document.getElementById("video_youtube");
  nav.style.position = "static";
  _body.style.overflow = "hidden";
  videoValid = true;
  console.log(indexNum);
}
img[1].onclick = function(){
  expandVideo[indexNum].style.display = "block";
  span[indexNum].insertAdjacentHTML("afterend", txt_videos[indexNum]);
  tempVideo = document.getElementById("video_youtube");
  nav.style.position = "static";
  _body.style.overflow = "hidden";
  videoValid = true;
  console.log(indexNum);
}
img[2].onclick = function(){
  expandVideo[indexNum].style.display = "block";
  span[indexNum].insertAdjacentHTML("afterend", txt_videos[indexNum]);
  tempVideo = document.getElementById("video_youtube");
  nav.style.position = "static";
  _body.style.overflow = "hidden";
  videoValid = true;
}

span[0].onclick = function(){
  expandVideo[indexNum].style.display = "none";
  tempVideo.remove();
  nav.style.position = "sticky";
  _body.style.overflow = "auto";
  videoValid = false
}
span[1].onclick = function(){
  expandVideo[indexNum].style.display = "none";
  tempVideo.remove();
  nav.style.position = "sticky";
  _body.style.overflow = "auto";
  videoValid = false
}
span[2].onclick = function(){
  expandVideo[indexNum].style.display = "none";
  tempVideo.remove();
  nav.style.position = "sticky";
  _body.style.overflow = "auto";
  videoValid = false
}