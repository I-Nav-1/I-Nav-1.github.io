function cycleTheme() {
  const themes = ['light', 'dark', 'blue', 'green', 'sunset'];
  const body = document.body;
  const current = body.getAttribute('data-theme') || 'light';
  const index = themes.indexOf(current);
  const next = themes[(index + 1) % themes.length];
  body.setAttribute('data-theme', next);
}

// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', function () {
  const navbarMenu = document.getElementById('navbar-menu');
  navbarMenu.classList.toggle('active');
});

// Carousel Functionality

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
  const offset = -index * 100; // each slide = 100% width
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = totalItems - 1;
  if (currentIndex >= totalItems) currentIndex = 0;

  showSlide(currentIndex);
}

showSlide(currentIndex);


// Image Popup Modal
// Image Popup Logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

// attach click to all carousel images
document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// close modal
closeModal.onclick = function() {
  modal.style.display = "none";
};

// close when clicking outside image
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


