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

const abayModal = document.getElementById('abay-modal');
if (abayModal instanceof HTMLDialogElement) {
  document.querySelectorAll('.abay-modal-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      closeMobileMenu();
      abayModal.showModal();
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
    });
  });

  abayModal.querySelector('.abay-modal-close')?.addEventListener('click', () => {
    abayModal.close();
  });

  abayModal.addEventListener('close', () => {
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
  });

  abayModal.addEventListener('click', (event) => {
    if (event.target === abayModal) abayModal.close();
  });
}

const designerImageModal = document.getElementById('designer-image-modal');
if (designerImageModal instanceof HTMLDialogElement) {
  const modalImage = designerImageModal.querySelector('.designer-image-modal-photo');
  const modalCaption = designerImageModal.querySelector('.designer-image-modal-caption');

  document.querySelectorAll('.designer-image-button').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      const designerName = button.closest('.designer-card')?.querySelector('.designer-card-name')?.textContent;
      if (!image || !modalImage || !modalCaption) return;

      modalImage.src = image.currentSrc || image.src;
      modalImage.alt = image.alt;
      modalCaption.textContent = designerName || image.alt;
      designerImageModal.showModal();
    });
  });

  designerImageModal.querySelector('.designer-image-modal-close')?.addEventListener('click', () => {
    designerImageModal.close();
  });

  designerImageModal.addEventListener('click', (event) => {
    if (event.target === designerImageModal) designerImageModal.close();
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
