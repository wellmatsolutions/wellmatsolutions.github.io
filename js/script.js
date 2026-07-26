document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------
     Mobile nav toggle
  --------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------
     Product portfolio tabs
  --------------------------------------------- */
  const tabButtons = document.querySelectorAll('.tabs__btn');
  const tabPanels = document.querySelectorAll('.tabs__panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      document.getElementById(targetId)?.classList.add('is-active');
    });
  });

  /* ---------------------------------------------
     Trusted clients marquee
     (placeholder monogram badges — swap in real
     client logos by editing the array below)
  --------------------------------------------- */
  const clientNames = [
    'FOOD CO', 'PACKPRO', 'PHARMA VN', 'PETRO IND',
    'AGRI GROUP', 'ELECTRO MFG', 'BEVCO', 'STEEL WORKS'
  ];
  const track = document.getElementById('marqueeTrack');
  if (track) {
    const buildSet = () => clientNames.map(name => {
      const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2);
      return `<div class="client-badge">
                <span class="client-badge__mark">${initials}</span>
                <span>${name}</span>
              </div>`;
    }).join('');
    // duplicate the set so the loop animation is seamless
    track.innerHTML = buildSet() + buildSet();
  }

  /* ---------------------------------------------
     Hero photo slideshow — real product/factory
     photography, auto-rotating with dot navigation
  --------------------------------------------- */
  const slideshow = document.getElementById('heroSlideshow');
  const dotsWrap = document.getElementById('heroDots');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (slideshow && dotsWrap) {
    const slides = Array.from(slideshow.querySelectorAll('.hero__slide'));
    let current = 0;
    let timer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'hero__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ảnh ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function goTo(index) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = index;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
    }

    function next() { goTo((current + 1) % slides.length); }

    if (!prefersReducedMotion && slides.length > 1) {
      timer = setInterval(next, 5000);
    }
  }

  /* ---------------------------------------------
     RFQ form — client-side only.
     Wire this up to a real endpoint (Formspree,
     Getform, your own API, etc.) before going live.
  --------------------------------------------- */
  const rfqForm = document.getElementById('rfqForm');
  const rfqNote = document.getElementById('rfqNote');

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!rfqForm.checkValidity()) {
        rfqForm.reportValidity();
        return;
      }
      rfqNote.textContent = 'Cảm ơn bạn! Yêu cầu báo giá đã được ghi nhận — đội ngũ kỹ thuật sẽ liên hệ sớm.';
      rfqForm.reset();
    });
  }

  /* ---------------------------------------------
     Header shadow on scroll (subtle depth cue)
  --------------------------------------------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 8px 24px rgba(0,0,0,.28)'
        : '0 1px 0 rgba(255,255,255,.14)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
