class Typewriter {
    constructor(element, options = {}) {
      this.element = element;
      this.options = {
        speed: 50,
        randomizeSpeed: false,
        flicker: false, // Nuevo: efecto de parpadeo
        flickerIntensity: 0.2, // Nuevo: intensidad del parpadeo (0.0 - 1.0)
        cursor: true, // Nuevo: mostrar un cursor
        cursorChar: "|", // Nuevo: carácter del cursor
        cursorBlinkSpeed: 500, // Nuevo: velocidad de parpadeo del cursor
        chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        onComplete: () => {},
        ...options,
      };
      this.currentText = "";
      this.iteration = 0;
      this.inProgress = false;
      this.rafId = null;
      this.cursorInterval = null; // Nuevo: para el intervalo del cursor
      this.originalText = ""; // Nuevo: almacena el texto original
    }
  
    randomChar() {
      return this.options.chars[
        Math.floor(Math.random() * this.options.chars.length)
      ];
    }
  
    animate() {
      if (this.iteration <= this.originalText.length) {
        // Efecto de parpadeo (flicker)
        const flickerEffect =
          this.options.flicker && Math.random() < this.options.flickerIntensity
            ? `style="opacity: 0.5;"` // Ajusta la opacidad para el parpadeo
            : "";
  
        this.currentText = this.originalText
          .split("")
          .map(
            (char, index) =>
              `<span ${
                index < this.iteration ? "" : flickerEffect
              }>${index < this.iteration ? char : this.randomChar()}</span>`
          )
          .join("");
  
        this.element.innerHTML = this.currentText;
        this.iteration++;
  
        const next = this.options.randomizeSpeed
          ? Math.random() * this.options.speed
          : this.options.speed;
        this.rafId = setTimeout(() => requestAnimationFrame(this.animate.bind(this)), next);
      } else {
        this.element.innerHTML = this.originalText
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("");
        this.stopCursorAnimation(); // Detiene la animación del cursor
        this.options.onComplete();
        if (this.rafId) clearTimeout(this.rafId);
        this.inProgress = false;
      }
    }
  
    // Nuevo: Inicia la animación del cursor
    startCursorAnimation() {
      if (this.options.cursor) {
        let cursorVisible = true;
        this.cursorInterval = setInterval(() => {
          const cursorSpan = `<span class="cursor" style="border-right: 2px solid; margin-right: 3px; animation: cursor-blink ${this.options.cursorBlinkSpeed}ms infinite;">${
            cursorVisible ? this.options.cursorChar : ""
          }</span>`;
          this.element.innerHTML = this.currentText + cursorSpan;
          cursorVisible = !cursorVisible;
        }, this.options.cursorBlinkSpeed);
      }
    }
  
    // Nuevo: Detiene la animación del cursor
    stopCursorAnimation() {
      if (this.cursorInterval) {
        clearInterval(this.cursorInterval);
        this.cursorInterval = null;
        // Limpia el cursor al finalizar
        this.element.innerHTML = this.currentText;
      }
    }
  
    start(text) {
      if (!this.inProgress) {
        this.inProgress = true;
        this.iteration = 0;
        this.originalText = text; // Guarda el texto original
        this.currentText = ""; // Reinicia el texto actual
        this.animate();
        this.startCursorAnimation(); // Inicia la animación del cursor
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".typewriter-text");
  
    elements.forEach((element) => {
      const text = element.dataset.text;
      if (text) {
        const options = {
          speed: 40,
          randomizeSpeed: true,
          flicker: true, // Activa el efecto de parpadeo
          flickerIntensity: 0.3, // Intensidad del parpadeo
          cursor: true, // Activa el cursor
          cursorChar: "█", // Carácter del cursor (bloque sólido)
          cursorBlinkSpeed: 600, // Velocidad de parpadeo del cursor
        };
  
        const typewriter = new Typewriter(element, options);
        typewriter.start(text);
  
        // Reinicia la animación al pasar el cursor
        element.addEventListener("mouseenter", () => typewriter.start(text));
      }
    });
  });