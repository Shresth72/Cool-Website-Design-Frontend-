let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`), 
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(()=>{
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}


const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}




// pointer (jQuery)
const point = document.getElementById("pointer");

jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 8;
    mouseY = e.pageY - 8; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#pointer").css({left: xp +'px', top: yp +'px'});
  }, 10);

});


//slide Down animation (jQuery)
const titleSec = document.querySelector(".article-title-section");
const slider1a = document.querySelector(".slider");
const slider2a = document.querySelector(".slider2");

$(titleSec).hover(function(){
  slider1a.dataset.slide = "down";
});

$(titleSec).hover(function(){
  slider2a.dataset.slide = "down";
});

const slider1b = document.querySelector(".slider1b");
const slider2b = document.querySelector(".slider2b");

$(titleSec).hover(function(){
  slider1b.dataset.slide = "down";
});

$(titleSec).hover(function(){
  slider2b.dataset.slide = "down";
});


//image carousel
function slideImg_fir(){
  document.querySelector("#slideimage").src = "https://images.wallpaperscraft.com/image/single/clouds_horizon_photoshop_129739_800x1200.jpg";
  document.querySelector(".gallery-first-image > h6").innerHTML = "Clouds";
}
function slideImg_sec(){
  document.querySelector("#slideimage").src = "https://images.wallpaperscraft.com/image/single/forest_trees_art_127690_800x1200.jpg";
  document.querySelector(".gallery-first-image > h6").innerHTML = "Trees";
}
function slideImg_third(){
  document.querySelector("#slideimage").src = "https://i.pinimg.com/originals/da/fd/41/dafd4140909e5122ad2c93b37827e60b.jpg";
  document.querySelector(".gallery-first-image > h6").innerHTML = "Cats";
}

setInterval(slideImg_sec, 6000);
setInterval(slideImg_third, 12000);
setInterval(slideImg_fir, 18000);



//dissapear Main
const mainVis = document.querySelector("main");
const stack = document.querySelector(".stack");
const back = document.querySelector(".back");
const nav = document.querySelector("nav");

function dissappearMain(){
  mainVis.dataset.appear = "false";
  
  stack.style.display = "none";
  back.style.display = "block";
  
  nav.style.background = "var(--bg-trans)";
  
};

function appearMain(){
  mainVis.dataset.appear = "true";
  
  stack.style.display = "block";
  back.style.display = "none";
};
