/* Saigon Bistro — shared front-end behaviour (no build step, no dependencies) */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initSlider();
  initMenuFilters();
  initReservationForm();
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
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
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
/* Reservation / contact form                                             */
/*                                                                        */
/* Ships wired for Formspree (https://formspree.io) — a free service      */
/* that lets a static, backend-less site (like one hosted on GitHub       */
/* Pages) receive form submissions by e-mail. See README.md for the       */
/* two-minute setup. Until an endpoint is configured, submissions fall    */
/* back to opening the visitor's e-mail client with the details pre-      */
/* filled, so the form is always usable.                                  */
/* ---------------------------------------------------------------------- */
function initReservationForm() {
  const form = document.querySelector('[data-reservation-form]');
  if (!form) return;

  const status = form.querySelector('[data-form-status]');
  const submitBtn = form.querySelector('[type="submit"]');
  const endpoint = form.getAttribute('action') || '';
  const isConfigured = endpoint && !endpoint.includes('YOUR_FORM_ID');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // honeypot spam trap
    if (form.querySelector('.honeypot input')?.value) return;

    const data = new FormData(form);

    if (!isConfigured) {
      openMailFallback(data);
      return;
    }

    setStatus('Wird gesendet …', null);
    submitBtn && (submitBtn.disabled = true);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('Vielen Dank! Ihre Reservierungsanfrage ist eingegangen — wir melden uns kurzfristig zur Bestätigung.', 'ok');
        form.reset();
      } else {
        setStatus('Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.', 'err');
      }
    } catch (err) {
      setStatus('Keine Verbindung möglich. Bitte versuchen Sie es erneut oder schreiben Sie uns per E-Mail.', 'err');
    } finally {
      submitBtn && (submitBtn.disabled = false);
    }
  });

  function setStatus(message, kind) {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('ok', 'err');
    if (kind) status.classList.add(kind);
    status.classList.add('show');
  }

  function openMailFallback(data) {
    const to = form.dataset.fallbackEmail || 'info@saigon-bistro-langenfeld.de';
    const lines = [
      `Name: ${data.get('name') || ''}`,
      `E-Mail: ${data.get('email') || ''}`,
      `Telefon: ${data.get('phone') || ''}`,
      `Datum: ${data.get('date') || ''}`,
      `Uhrzeit: ${data.get('time') || ''}`,
      `Personen: ${data.get('guests') || ''}`,
      '',
      data.get('message') || '',
    ];
    const subject = encodeURIComponent('Tischreservierung Saigon Bistro');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setStatus('Ihr E-Mail-Programm wird geöffnet, damit Sie die Anfrage direkt an uns senden können.', 'ok');
  }
}

/* ---------------------------------------------------------------------- */
function initYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}
