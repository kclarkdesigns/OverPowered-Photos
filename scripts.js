let slideIndex = 0;
let autoSlideTimeout;
let pauseDuration = 30000; // 30 seconds

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    autoSlideTimeout = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManual(slideIndex = n);
}

function showSlidesManual(n) {
    clearTimeout(autoSlideTimeout); // Clear any existing timeouts
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // Set a timeout to resume autoplay after 30 seconds
    autoSlideTimeout = setTimeout(showSlides, pauseDuration);
}

// Start the slideshow
showSlides();

