class Typewriter {
  constructor(element, options = {}) {
    // Opciones por defecto
    const defaults = {
      speed: 50,
      randomizeSpeed: false,
      flicker: false,
      flickerIntensity: 0.2,
      cursor: true,
      cursorChar: "|",
      cursorBlinkSpeed: 500,
      chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
      onComplete: () => {},
    };

    // Combina opciones del usuario con las opciones por defecto
    this.options = { ...defaults, ...options };

    this.element = element;
    this.originalText = "";
    this.currentText = "";
    this.iteration = 0;
    this.inProgress = false;
    this.rafId = null;
    this.cursorInterval = null;
  }

  /**
   * Devuelve un carácter aleatorio de la lista de caracteres permitidos.
   */
  randomChar = () => {
    const { chars } = this.options;
    return chars[Math.floor(Math.random() * chars.length)];
  };

  /**
   * Ejecuta la animación de tipeo con efecto de flicker opcional.
   */
  animate = () => {
    const { flicker, flickerIntensity, speed, randomizeSpeed, onComplete } = this.options;

    // Si todavía no hemos llegado al final del texto original
    if (this.iteration <= this.originalText.length) {
      const arrText = this.originalText.split("");

      // Calcula el efecto de parpadeo (flicker)
      const flickerEffect = flicker && Math.random() < flickerIntensity ? `style="opacity: 0.5;"` : "";

      // Construye el texto con o sin flicker
      this.currentText = arrText
        .map((char, index) => {
          const isTyped = index < this.iteration;
          return `<span ${isTyped ? "" : flickerEffect}>${isTyped ? char : this.randomChar()}</span>`;
        })
        .join("");

      this.element.innerHTML = this.currentText;
      this.iteration += 1;

      // Controla la velocidad (con o sin aleatoriedad)
      const nextSpeed = randomizeSpeed ? Math.random() * speed : speed;

      // Llama a la siguiente iteración
      this.rafId = setTimeout(
        () => requestAnimationFrame(this.animate),
        nextSpeed
      );
    } else {
      // Si ya completó el texto, lo escribe sin caracteres aleatorios
      this.element.innerHTML = this.originalText
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");

      this.stopCursorAnimation(); // Detiene la animación del cursor
      if (this.rafId) clearTimeout(this.rafId);

      this.inProgress = false;
      onComplete();
    }
  };

  /**
   * Inicia la animación del cursor parpadeante (si está activado).
   */
  startCursorAnimation = () => {
    const { cursor, cursorChar, cursorBlinkSpeed } = this.options;

    if (!cursor) return;

    let cursorVisible = true;
    this.cursorInterval = setInterval(() => {
      // Span que representa el cursor
      const cursorSpan = `<span class="cursor" style="border-right: 2px solid; margin-right: 3px; animation: cursor-blink ${cursorBlinkSpeed}ms infinite;">${
        cursorVisible ? cursorChar : ""
      }</span>`;

      this.element.innerHTML = this.currentText + cursorSpan;
      cursorVisible = !cursorVisible;
    }, cursorBlinkSpeed);
  };

  /**
   * Detiene la animación del cursor y elimina el span del cursor.
   */
  stopCursorAnimation = () => {
    if (this.cursorInterval) {
      clearInterval(this.cursorInterval);
      this.cursorInterval = null;
    }
    this.element.innerHTML = this.currentText;
  };

  /**
   * Inicia el proceso de tipeo.
   */
  start = (text) => {
    // Evita superponer animaciones si ya está en progreso
    if (this.inProgress) return;

    this.inProgress = true;
    this.iteration = 0;
    this.originalText = text;
    this.currentText = "";

    this.animate();           // Comienza a animar el texto
    this.startCursorAnimation(); // Comienza la animación del cursor
  };
}

// Ejemplo de uso al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typewriter-text");

  elements.forEach((element) => {
    const text = element.dataset.text;
    if (text) {
      const options = {
        speed: 15,
        randomizeSpeed: true,
        flicker: true,
        flickerIntensity: 0.3,
        cursor: true,
        cursorChar: "█",
        cursorBlinkSpeed: 600,
      };

      const typewriter = new Typewriter(element, options);
      typewriter.start(text);

      // Reinicia la animación al pasar el cursor (si se desea)
      element.addEventListener("mouseenter", () => typewriter.start(text));
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const menu = document.getElementById('menu');
  // Opcional: Si quieres empujar el contenido principal
  // const mainContent = document.getElementById('main');
  // const body = document.body;

  if (hamburgerButton && menu) {
    hamburgerButton.addEventListener('click', () => {
      // Alterna la clase 'visible' en el menú
      menu.classList.toggle('visible');

      // Actualiza el atributo aria-expanded para accesibilidad
      const isExpanded = menu.classList.contains('visible');
      hamburgerButton.setAttribute('aria-expanded', isExpanded);

      // Opcional: Alterna una clase en el body para empujar el contenido
      // body.classList.toggle('menu-open');
    });

    // Opcional: Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
      // Comprueba si el menú está visible y si el clic fue FUERA del menú y FUERA del botón
      if (menu.classList.contains('visible') &&
          !menu.contains(event.target) &&
          !hamburgerButton.contains(event.target)) {
        menu.classList.remove('visible');
        hamburgerButton.setAttribute('aria-expanded', 'false');
        // Opcional: Quita la clase del body si la usaste
        // body.classList.remove('menu-open');
      }
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace del menú (útil para SPAs o enlaces #)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('visible')) {
          menu.classList.remove('visible');
          hamburgerButton.setAttribute('aria-expanded', 'false');
          // Opcional: Quita la clase del body si la usaste
          // body.classList.remove('menu-open');
        }
      });
    });
  } else {
    console.error("No se encontró el botón de hamburguesa o el elemento del menú.");
  }
});