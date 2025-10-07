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

// Copy code button functionality
document.addEventListener('DOMContentLoaded', () => {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach((pre) => {
    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    
    // Button content with icon
    button.innerHTML = `
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
      </svg>
      <span class="copy-text">Copiar</span>
    `;
    
    // Add click handler
    button.addEventListener('click', async () => {
      // Get the code content
      const code = pre.querySelector('code');
      const text = code ? code.textContent : pre.textContent;
      
      try {
        // Copy to clipboard
        await navigator.clipboard.writeText(text);
        
        // Show success feedback
        button.classList.add('copied');
        const textSpan = button.querySelector('.copy-text');
        const originalText = textSpan.textContent;
        textSpan.textContent = 'Copiado!';
        
        // Reset after 2 seconds
        setTimeout(() => {
          button.classList.remove('copied');
          textSpan.textContent = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
        const textSpan = button.querySelector('.copy-text');
        textSpan.textContent = 'Error!';
        setTimeout(() => {
          textSpan.textContent = 'Copy';
        }, 2000);
      }
    });
    
    // Append button to pre block
    pre.appendChild(button);
  });
});