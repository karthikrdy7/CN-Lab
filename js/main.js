// Highlight the current page in the sidebar
document.addEventListener('DOMContentLoaded', () => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-port').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here) a.classList.add('active');
  });
});

/**
 * Animate a small dot element along an SVG <path> over `duration` ms.
 * Returns a promise that resolves when the animation completes.
 * el: DOM element (e.g. a <div class="packet"> positioned absolutely, or an SVG <circle>)
 * pathEl: an SVG <path> element to follow
 * opts: { duration, svgMode } — svgMode true if el is an SVG circle (uses cx/cy), else left/top
 */
function animateAlongPath(el, pathEl, { duration = 1400, onDone = null } = {}) {
  const len = pathEl.getTotalLength();
  const start = performance.now();
  const isSvg = el.tagName && el.tagName.toLowerCase() === 'circle';

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // ease-in-out
    const pt = pathEl.getPointAtLength(eased * len);
    if (isSvg) {
      el.setAttribute('cx', pt.x);
      el.setAttribute('cy', pt.y);
    } else {
      el.style.left = pt.x + 'px';
      el.style.top = pt.y + 'px';
    }
    el.style.opacity = 1;
    if (t < 1) {
      requestAnimationFrame(frame);
    } else if (onDone) {
      onDone();
    }
  }
  requestAnimationFrame(frame);
}
