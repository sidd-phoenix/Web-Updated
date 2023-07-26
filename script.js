// JavaScript for Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.opacity = index === slideIndex ? 1 : 0;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentSlide);

let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseover', stopAutoPlay);
carouselContainer.addEventListener('mouseout', startAutoPlay);

// Search Functionality
function search() {
  const searchTerm = document.querySelector('.search-bar input').value.trim().toLowerCase();
  if (searchTerm !== '') {
    // Allow only specific technology terms for searching
    const allowedTerms = [
      'ai',
      'artificial intelligence',
      'ml',
      'machine learning',
      'iot',
      'internet of things',
      'cybersecurity',
      'ar',
      'augmented reality',
      'vr',
      'virtual reality',
    ];

    if (allowedTerms.includes(searchTerm)) {
      // Show the loading overlay for 2 seconds before redirecting to the page
      showLoadingOverlay();
      setTimeout(() => {
        if (searchTerm === 'ar' || searchTerm === 'vr') {
          window.location.href = 'arvr.html';
        } else {
          window.location.href = `${searchTerm}.html`;
        }
      }, 2000); // Redirect after 2 seconds
    } else {
      // Display a message indicating that the entered term is not allowed
      console.log('Invalid search term. Please enter a valid technology term.');
    }
  } else {
    // Handle empty search input
    console.log('Please enter a search term.');
  }
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', search);

// Show loading overlay
function showLoadingOverlay() {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'block';
  setTimeout(() => {
    loadingOverlay.style.display = 'none';
  }, 2000); // Hide loading overlay after 2 seconds
}
// Navigation Links Functionality
function navigateTo(technology) {
    showLoadingOverlay();
    setTimeout(() => {
      window.location.href = `${technology}.html`;
    }, 2000);
  }

// JavaScript for Login Modal
const loginModal = document.getElementById('loginModal');

function openModal() {
  loginModal.style.display = 'block';
}

function closeModal() {
  loginModal.style.display = 'none';
}

// Close modal when user clicks outside the modal content
window.onclick = function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};

const signupModal = document.getElementById('signupModal');

function openSignupModal() {
  signupModal.style.display = 'block';
}

function closeSignupModal() {
  signupModal.style.display = 'none';
}
