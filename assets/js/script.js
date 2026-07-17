// =============================================================
// Menu hamburguesa + carrusel tipo Instagram
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  initCarousels();
});

// -------------------------------------------------------------
// Menú lateral
// -------------------------------------------------------------
function initHamburgerMenu() {
  const hamburgerButton = document.getElementById('hamburger-button');
  const menu = document.getElementById('menu');
  if (!hamburgerButton || !menu) return;

  // Crear el backdrop si no existe
  let backdrop = document.getElementById('menu-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'menu-backdrop';
    document.body.appendChild(backdrop);
  }

  const openMenu = () => {
    menu.classList.add('visible');
    backdrop.classList.add('visible');
    hamburgerButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('visible');
    backdrop.classList.remove('visible');
    hamburgerButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburgerButton.addEventListener('click', () => {
    if (menu.classList.contains('visible')) closeMenu(); else openMenu();
  });

  backdrop.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('visible')) closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('visible')) closeMenu();
  });
}

// -------------------------------------------------------------
// Carrusel con indicadores tipo Instagram
// -------------------------------------------------------------
function initCarousels() {
  const carousels = document.querySelectorAll('ula');

  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll('lia');
    if (items.length <= 1) return;

    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'carousel-indicators';

    items.forEach((item, index) => {
      const indicator = document.createElement('div');
      indicator.className = 'carousel-indicator';
      if (index === 0) indicator.classList.add('active');

      indicator.addEventListener('click', () => {
        items[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      });

      indicatorsContainer.appendChild(indicator);
    });

    carousel.parentNode.insertBefore(indicatorsContainer, carousel.nextSibling);

    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');

    const updateActiveIndicator = () => {
      const itemWidth = items[0].offsetWidth || 1;
      const activeIndex = Math.round(carousel.scrollLeft / itemWidth);
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === activeIndex);
      });
    };

    // requestAnimationFrame para evitar trabajo redundante en cada scroll event
    let ticking = false;
    carousel.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveIndicator();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', updateActiveIndicator, { passive: true });
  });
}
