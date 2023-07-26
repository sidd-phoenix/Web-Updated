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
      // Special case for "ar" or "vr" search term to redirect to "arvr.html"
      if (searchTerm === 'ar' || searchTerm === 'vr') {
        window.location.href = 'arvr.html';
      } else {
        // Navigate to the searched page (assuming page URLs follow the format: [technology-term].html)
        const url = `${searchTerm}.html`;
        window.location.href = url;
      }
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

function openPage(url) {
  window.location.href = url;
}

function onHover(technology) {
  const technologyButtons = document.querySelectorAll('.technology-button');

  technologyButtons.forEach((button) => {
    if (button.classList.contains(technology)) {
      button.classList.remove('blur-effect');
    } else {
      button.classList.add('blur-effect');
    }
  });
}

function onMouseOut() {
  const technologyButtons = document.querySelectorAll('.technology-button');

  technologyButtons.forEach((button) => {
    button.classList.remove('blur-effect');
  });
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
