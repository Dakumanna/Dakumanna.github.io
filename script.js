let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block"; 
  slideIndex++;
  
  if (slideIndex >= slides.length) {
     slideIndex = 0
  }    
  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}