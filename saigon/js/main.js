/* Saigon Bistro — shared front-end behaviour (no build step, no dependencies) */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initNavDropdown();
  initReveal();
  initSlider();
  initMenuFilters();
  initYear();
});

/* ---------------------------------------------------------------------- */
/* Mobile nav toggle                                                      */
/* ---------------------------------------------------------------------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------------------------------------------------------------- */
/* "Speisekarte" dropdown (Komplette Karte / Mittagsangebote)             */
/* ---------------------------------------------------------------------- */
function initNavDropdown() {
  const dropdown = document.querySelector('.nav-dropdown');
  const toggle = dropdown && dropdown.querySelector('.nav-dropdown-toggle');
  if (!dropdown || !toggle) return;

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const open = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    if (dropdown.classList.contains('open') && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------------------------------------------------------------------- */
/* Scroll reveal                                                          */
/* ---------------------------------------------------------------------- */
function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((t) => t.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  targets.forEach((t) => io.observe(t));
}

/* ---------------------------------------------------------------------- */
/* Dish slider (home page)                                                */
/* ---------------------------------------------------------------------- */
function initSlider() {
  const slider = document.querySelector('[data-slider]');
  if (!slider) return;

  const track = slider.querySelector('.slider-track');
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('[data-slider-prev]');
  const nextBtn = slider.querySelector('[data-slider-next]');
  const dotsWrap = slider.querySelector('[data-slider-dots]');
  let index = 0;
  let timer = null;
  const AUTOPLAY_MS = 5500;

  if (dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Gehe zu Bild ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    if (dotsWrap) {
      Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === index));
    }
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
    restart();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, AUTOPLAY_MS);
  }

  nextBtn && nextBtn.addEventListener('click', next);
  prevBtn && prevBtn.addEventListener('click', prev);

  // touch swipe
  let startX = null;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    startX = null;
  }, { passive: true });

  slider.addEventListener('mouseenter', () => timer && clearInterval(timer));
  slider.addEventListener('mouseleave', restart);

  update();
  restart();
}

/* ---------------------------------------------------------------------- */
/* Speisekarte filter chips                                               */
/* ---------------------------------------------------------------------- */
function initMenuFilters() {
  const bar = document.querySelector('[data-filter-bar]');
  if (!bar) return;

  const chips = Array.from(bar.querySelectorAll('.chip'));
  const dishes = Array.from(document.querySelectorAll('[data-tags]'));
  const categories = Array.from(document.querySelectorAll('[data-menu-category]'));
  const emptyState = document.querySelector('[data-empty-state]');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      applyFilter(chip.dataset.filter);
    });
  });

  function applyFilter(filter) {
    let visibleCount = 0;

    dishes.forEach((dish) => {
      const tags = (dish.dataset.tags || '').split(/\s+/);
      const match = filter === 'alle' || tags.includes(filter);
      dish.classList.toggle('hide', !match);
      if (match) visibleCount++;
    });

    categories.forEach((cat) => {
      const visible = cat.querySelectorAll('[data-tags]:not(.hide)').length;
      cat.style.display = visible === 0 ? 'none' : '';
    });

    if (emptyState) emptyState.classList.toggle('show', visibleCount === 0);
  }
}

/* ---------------------------------------------------------------------- */
function initYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}
