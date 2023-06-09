var movableDiv = document.getElementById("movableDiv");
var parentDiv = document.getElementById("parentDiv");

// Add event listener to track mouse movement
document.addEventListener("mousemove", moveDiv);

// Function to move the div
function moveDiv(event) {
  var parentRect = parentDiv.getBoundingClientRect();
  var newX = event.clientX - parentRect.left - (movableDiv.offsetWidth / 2);
  var newY = event.clientY - parentRect.top - (movableDiv.offsetHeight / 2);
  
  // Check if the new position surpasses the parent's boundaries
  if (newX >= 0 && newX + movableDiv.offsetWidth <= parentRect.width &&
      newY >= 0 && newY + movableDiv.offsetHeight <= parentRect.height) {
    // Set the new position of the div
    movableDiv.style.left = newX + "px";
    movableDiv.style.top = newY + "px";
  }
}

//The above source-code is for the moveable div 

$(".section-1-1").click(function (){
  alert("video is played");
})






$('.owl-carousel').owlCarousel({
  loop:false,
  margin:20,
  responsiveClass:false,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
})