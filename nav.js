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

document.querySelectorAll('.abay-popup-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    const popupUrl = new URL(link.href);
    popupUrl.searchParams.set('lang', document.documentElement.lang);
    link.href = popupUrl.href;

    const width = Math.min(1100, window.screen.availWidth);
    const height = Math.min(850, window.screen.availHeight);
    const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
    const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));
    const popup = window.open(
      popupUrl.href,
      'abayPopup',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (popup) {
      event.preventDefault();
      popup.focus();
    }
  });
});

const popupLanguage = new URLSearchParams(window.location.search).get('lang');
if (popupLanguage && typeof i18n !== 'undefined' && i18n[popupLanguage]) {
  const languageButton = [...document.querySelectorAll('[data-lang]')]
    .find((button) => button.dataset.lang === popupLanguage);
  if (languageButton) setLang(popupLanguage, languageButton);
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
