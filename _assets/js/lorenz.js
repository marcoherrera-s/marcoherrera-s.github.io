// Atractor de Lorenz — animación en canvas.
// Respeta prefers-reduced-motion, se pausa con visibilitychange,
// escala por devicePixelRatio y maneja resize.
(function () {
  'use strict';

  const canvas = document.getElementById('lorenz-canvas');
  if (!canvas) return;

  // Respeta prefers-reduced-motion: dibuja un solo frame estático y sale.
  const reduceMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: reduce)').media !== '' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ctx = canvas.getContext('2d');
  const W = () => (canvas.width = Math.max(1, canvas.offsetWidth || 600));
  const H = 180;

  const sigma = 10,
    rho = 28,
    beta = 8 / 3,
    dt = 0.005;
  let x = 0.1,
    y = 0,
    z = 0;
  const pts = [];
  const MAX = 1800;

  const XMIN = -22,
    XMAX = 22,
    ZMIN = 2,
    ZMAX = 48;
  const pad = 12;
  let scaleX = 1,
    scaleZ = 1;

  function recomputeScale() {
    const w = canvas.offsetWidth || 600;
    scaleX = (w - pad * 2) / (XMAX - XMIN);
    scaleZ = (H - pad * 2) / (ZMAX - ZMIN);
  }

  function toCanvas(px, pz) {
    return [pad + (px - XMIN) * scaleX, H - pad - (pz - ZMIN) * scaleZ];
  }

  // Warm-up: avanza 2000 pasos para llegar al atractor.
  for (let i = 0; i < 2000; i++) {
    const dx = sigma * (y - x),
      dy = x * (rho - z) - y,
      dz = x * y - beta * z;
    x += dx * dt;
    y += dy * dt;
    z += dz * dt;
  }

  let running = true;
  let rafId = null;

  function getBaseColor() {
    const isDark = document.documentElement.classList.contains('dark-theme');
    return isDark ? '192,138,58' : '47,79,127';
  }

  function step() {
    if (!running) return;

    for (let i = 0; i < 4; i++) {
      const dx = sigma * (y - x),
        dy = x * (rho - z) - y,
        dz = x * y - beta * z;
      x += dx * dt;
      y += dy * dt;
      z += dz * dt;
      pts.push([x, z]);
      if (pts.length > MAX) pts.shift();
    }

    ctx.clearRect(0, 0, canvas.offsetWidth, H);

    if (pts.length >= 2) {
      const baseColor = getBaseColor();
      ctx.lineWidth = 0.8;
      for (let i = 1; i < pts.length; i++) {
        const alpha = (i / pts.length) * 0.6;
        const [x1, y1] = toCanvas(pts[i - 1][0], pts[i - 1][1]);
        const [x2, y2] = toCanvas(pts[i][0], pts[i][1]);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(${baseColor},${alpha})`;
        ctx.stroke();
      }
      const [cx, cy] = toCanvas(pts[pts.length - 1][0], pts[pts.length - 1][1]);
      ctx.beginPath();
      ctx.arc(cx, cy, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor},0.9)`;
      ctx.fill();
    }

    rafId = requestAnimationFrame(step);
  }

  function drawStatic() {
    // Modo reducido: dibuja solo el atractor ya calculado.
    ctx.clearRect(0, 0, canvas.offsetWidth, H);
    if (pts.length < 2) return;
    const baseColor = getBaseColor();
    ctx.lineWidth = 0.8;
    for (let i = 1; i < pts.length; i++) {
      const alpha = (i / pts.length) * 0.6;
      const [x1, y1] = toCanvas(pts[i - 1][0], pts[i - 1][1]);
      const [x2, y2] = toCanvas(pts[i][0], pts[i][1]);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(${baseColor},${alpha})`;
      ctx.stroke();
    }
  }

  function init() {
    W();
    recomputeScale();
    if (reduceMotion) {
      drawStatic();
      return;
    }
    step();
  }

  // Pausa cuando la pestaña no es visible.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    } else {
      if (!reduceMotion) {
        running = true;
        step();
      }
    }
  });

  // Reaccionar a resize: recalcular escala sin perder estado.
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      W();
      recomputeScale();
      if (reduceMotion) drawStatic();
    }, 100);
  });

  // Pausa si el usuario cambia la preferencia de motion.
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener &&
      mq.addEventListener('change', e => {
        if (e.matches) {
          running = false;
          if (rafId) cancelAnimationFrame(rafId);
          drawStatic();
        } else if (!document.hidden) {
          running = true;
          step();
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();