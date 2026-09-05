// ===== NAV SCROLL =====.  
// scroll del menú y hamburguesa

const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });
}

// ===== HAMBURGER =====
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}

// ===== ETHIOPIA CARD FLIP =====
document.querySelectorAll('.ethiopia-card').forEach((card) => {
  const toggleCard = () => {
    const isFlipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(isFlipped));
  };

  card.addEventListener('click', toggleCard);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard();
    }
  });
});

// ===== GUESTS CAROUSEL =====
const guestsTrack = document.getElementById('guests-track');
const guestsPreviousButton = document.querySelector('.guests-carousel-button-prev');
const guestsNextButton = document.querySelector('.guests-carousel-button-next');

if (guestsTrack && guestsPreviousButton && guestsNextButton) {
  const scrollGuests = (direction) => {
    guestsTrack.scrollBy({ left: direction * guestsTrack.clientWidth * 0.8, behavior: 'smooth' });
  };

  guestsPreviousButton.addEventListener('click', () => scrollGuests(-1));
  guestsNextButton.addEventListener('click', () => scrollGuests(1));
}
