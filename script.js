document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const menu = document.getElementById('menu');
  
  // Crear el backdrop si no existe
  let backdrop = document.getElementById('menu-backdrop');
  if (!backdrop && menu) {
    backdrop = document.createElement('div');
    backdrop.id = 'menu-backdrop';
    document.body.appendChild(backdrop);
  }

  if (hamburgerButton && menu && backdrop) {
    // Función para abrir el menú
    const openMenu = () => {
      menu.classList.add('visible');
      backdrop.classList.add('visible');
      hamburgerButton.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    };

    // Función para cerrar el menú
    const closeMenu = () => {
      menu.classList.remove('visible');
      backdrop.classList.remove('visible');
      hamburgerButton.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = ''; // Restaurar scroll
    };

    // Toggle del menú al hacer clic en el botón
    hamburgerButton.addEventListener('click', () => {
      if (menu.classList.contains('visible')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cerrar el menú al hacer clic en el backdrop
    backdrop.addEventListener('click', closeMenu);

    // Cerrar el menú al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('visible')) {
          closeMenu();
        }
      });
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('visible')) {
        closeMenu();
      }
    });
  } else {
    console.error("No se encontró el botón de hamburguesa o el elemento del menú.");
  }
});

// Sistema de indicadores de carrusel tipo Instagram
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('ula');
  
  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll('lia');
    
    // Solo agregar indicadores si hay más de una imagen
    if (items.length <= 1) return;
    
    // Crear contenedor de indicadores
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'carousel-indicators';
    
    // Crear indicador para cada imagen
    items.forEach((item, index) => {
      const indicator = document.createElement('div');
      indicator.className = 'carousel-indicator';
      if (index === 0) indicator.classList.add('active');
      
      // Click en indicador para navegar
      indicator.addEventListener('click', () => {
        items[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      });
      
      indicatorsContainer.appendChild(indicator);
    });
    
    // Insertar indicadores después del carrusel
    carousel.parentNode.insertBefore(indicatorsContainer, carousel.nextSibling);
    
    // Actualizar indicador activo en scroll
    const updateActiveIndicator = () => {
      const scrollLeft = carousel.scrollLeft;
      const itemWidth = items[0].offsetWidth;
      const activeIndex = Math.round(scrollLeft / itemWidth);
      
      const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
      indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    };
    
    // Escuchar scroll con throttle para mejor performance
    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(updateActiveIndicator, 50);
    });
    
    // Actualizar en resize por si cambia el tamaño
    window.addEventListener('resize', updateActiveIndicator);
  });
});