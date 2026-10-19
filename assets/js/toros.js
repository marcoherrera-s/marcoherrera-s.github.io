// Mapa estándar de Chirikov — secciones de Poincaré en canvas.
//   p' = p + K sin θ,   θ' = θ + p'   (mod 2π)
// Cada órbita deja un punto por iteración: las regulares trazan toros KAM
// e islas, las caóticas llenan el mar. Se dibuja de forma incremental (sin
// borrar el canvas) y se detiene al terminar, así que después no gasta CPU.
// Respeta prefers-reduced-motion, se pausa con visibilitychange, escala por
// devicePixelRatio y redibuja al cambiar de tema o de tamaño.
(function () {
  'use strict';

  const canvas = document.getElementById('toros-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const TAU = 2 * Math.PI;
  const K = 0.971635;       // umbral de Greene: muere el último toro KAM
  const ORBITS = 90;
  const ITERS = 450;        // puntos por órbita
  const PER_FRAME = 3;      // iteraciones por órbita en cada cuadro

  // Condiciones iniciales aleatorias por visita; se guardan para poder
  // redibujar exactamente lo mismo al cambiar de tema o de tamaño.
  const th0 = new Float64Array(ORBITS);
  const p0 = new Float64Array(ORBITS);
  for (let i = 0; i < ORBITS; i++) {
    th0[i] = Math.random() * TAU;
    p0[i] = ((i + Math.random()) / ORBITS) * TAU;
  }
  const th = new Float64Array(ORBITS);
  const p = new Float64Array(ORBITS);

  const reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };

  let w = 0, h = 0, dpr = 1, periods = 1, sx = 1, sy = 1, dot = 1;
  let done = 0;             // iteraciones ya dibujadas por órbita
  let rafId = null;

  function color() {
    return document.documentElement.classList.contains('dark-theme')
      ? 'rgba(192,138,58,0.6)'
      : 'rgba(47,79,127,0.5)';
  }

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = canvas.offsetWidth || 600;
    h = canvas.offsetHeight || 180;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    // El toro se repite en θ las veces necesarias para que la escala sea
    // casi isótropa y las islas no salgan aplastadas.
    periods = Math.max(1, Math.round(w / h));
    sx = canvas.width / (periods * TAU);
    sy = canvas.height / TAU;
    dot = Math.max(1, Math.floor(dpr * 0.75));
  }

  // Avanza todas las órbitas de la iteración `from` a la `to` y las pinta.
  function draw(from, to) {
    ctx.fillStyle = color();
    const H = canvas.height;
    for (let i = 0; i < ORBITS; i++) {
      let t = th[i], q = p[i];
      for (let n = from; n < to; n++) {
        q = (q + K * Math.sin(t)) % TAU; if (q < 0) q += TAU;
        t = (t + q) % TAU;
        const y = H - q * sy;
        for (let k = 0; k < periods; k++) {
          ctx.fillRect((t + k * TAU) * sx, y, dot, dot);
        }
      }
      th[i] = t; p[i] = q;
    }
  }

  function reset() {
    th.set(th0);
    p.set(p0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function frame() {
    const next = Math.min(ITERS, done + PER_FRAME);
    draw(done, next);
    done = next;
    rafId = done < ITERS && !document.hidden ? requestAnimationFrame(frame) : null;
  }

  function start() {
    if (rafId === null && done < ITERS && !document.hidden) {
      rafId = requestAnimationFrame(frame);
    }
  }

  // Redibuja de golpe lo que ya iba (o todo, con movimiento reducido).
  function redraw() {
    reset();
    if (reduceMotion.matches) done = ITERS;
    draw(0, done);
    start();
  }

  function init() {
    resize();
    redraw();
  }

  document.addEventListener('visibilitychange', start);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (canvas.offsetWidth === w) return;
      resize();
      redraw();
    }, 150);
  });

  new MutationObserver(redraw).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener('change', redraw);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
