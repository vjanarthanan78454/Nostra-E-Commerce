// Close announcement
function closeOffer() {
    document.getElementById("offer").style.display = "none";
}

// Hero slider
var slides = [
    "Summer Collections",
    "New Fashion Styles",
    "Latest Trends"
];

var currentSlide = 0;

function showSlide() {
    document.querySelector(".slider-content h2").innerText = slides[currentSlide];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

// Most Wanted slider
function moveRight() {
    document.getElementById("wantedTrack").scrollBy({
        left: 250,
        behavior: "smooth"
    });
}

function moveLeft() {
    document.getElementById("wantedTrack").scrollBy({
        left: -250,
        behavior: "smooth"
    });
}

// Newsletter
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("newsletterMessage").innerText =
        "Thank you for subscribing!";
    this.reset();
});