/* =========================================================
   Valortek — shared layout injection + interactions
   ========================================================= */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const page = document.body.dataset.page || 'home';
  const year = new Date().getFullYear();

  /* ---------- Shared navigation ---------- */
  const NAV = `
    <div class="scroll-progress" id="scrollProgress"></div>
    <header class="nav" id="nav">
      <div class="nav__inner">
        <a href="index.html" class="nav__brand" aria-label="Valortek home">
          <img src="assets/logo.png" alt="Valortek" class="nav__logo" />
        </a>
        <nav class="nav__menu" id="navMenu" aria-label="Primary">
          <a href="index.html"    class="nav__link" data-nav="home">Home</a>
          <a href="about.html"    class="nav__link" data-nav="about">About</a>
          <div class="nav__dropdown" id="navProductsDropdown">
            <a href="products.html" class="nav__link nav__link--caret" data-nav="products">Products</a>
            <div class="megamenu" id="megaMenu">
              <ul class="megamenu__cats" id="megaCats"></ul>
              <div class="megamenu__products" id="megaProducts"></div>
            </div>
          </div>
          <a href="services.html" class="nav__link" data-nav="services">Services</a>
          <a href="contact.html"  class="nav__cta">Contact Us</a>
        </nav>
        <button class="nav__burger" id="navBurger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;

  /* ---------- Shared footer ---------- */
  const FOOTER = `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <img src="assets/logo.png" alt="Valortek" class="footer__logo" />
          <p>PT. Valortek Ratanika Utama — Intelligence Information Technology &amp; Intelligence Equipment (Matsusintel), proudly built for Indonesia since 1995.</p>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <a href="about.html">About Us</a>
          <a href="about.html#vision-mission">Vision &amp; Mission</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer__col">
          <h4>Products</h4>
          <a href="products.html#portable">Portable Equipment</a>
          <a href="products.html#geofence">Geofence Data Crawler</a>
          <a href="products.html#cdi">Continuous Data Intelligence</a>
          <a href="products.html#dmi">Data Mining Intelligence</a>
          <a href="products.html#cyber">Cyber Threat</a>
          <a href="products.html#vr">Virtual Reality</a>
        </div>
        <div class="footer__col">
          <h4>Get in Touch</h4>
          <a href="#">STC Senayan Lt. 2 Room 89</a>
          <a href="#">Jl. Asia Afrika Pintu IX, Gelora Senayan</a>
          <a href="mailto:info@valortek.co.id">info@valortek.co.id</a>
        </div>
      </div>
      <div class="footer__bottom container">
        <span>© ${year} PT. Valortek Ratanika Utama. All rights reserved.</span>
        <span class="footer__legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></span>
      </div>
    </footer>`;

  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = NAV;
  if (footerMount) footerMount.innerHTML = FOOTER;

  // active nav link
  const active = document.querySelector(`.nav__link[data-nav="${page}"]`);
  if (active) active.classList.add('is-active');

  /* ---------- Navbar scroll state + progress ---------- */
  const nav = document.getElementById('nav');
  const progress = document.getElementById('scrollProgress');
  // inner pages keep the nav readable even before scrolling handled by their dark page-hero
  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('navMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      })
    );
  }

  /* ---------- Products mega menu (hover: category -> products) ---------- */
  const dropdownWrap = document.getElementById('navProductsDropdown');
  const megaCats = document.getElementById('megaCats');
  const megaProducts = document.getElementById('megaProducts');
  const CATS = window.VALORTEK_CATEGORIES || [];
  const PRODUCTS = window.VALORTEK_PRODUCTS || [];

  if (dropdownWrap && megaCats && megaProducts && CATS.length) {
    function renderProductsFor(catId) {
      const items = PRODUCTS.filter((p) => p.cat === catId);
      megaProducts.innerHTML = items
        .map(
          (p) =>
            `<a href="product.html?id=${p.id}" class="megamenu__product">
               <span class="megamenu__product-sub">${p.sub}</span>
               <span class="megamenu__product-name">${p.name}</span>
             </a>`
        )
        .join('');
    }

    megaCats.innerHTML = CATS.map(
      (c, i) =>
        `<li class="megamenu__cat${i === 0 ? ' is-active' : ''}" data-cat="${c.id}">
           <span class="megamenu__cat-name">${c.name}</span>
           <span class="megamenu__cat-tagline">${c.tagline}</span>
         </li>`
    ).join('');

    renderProductsFor(CATS[0].id);

    megaCats.querySelectorAll('.megamenu__cat').forEach((li) => {
      li.addEventListener('mouseenter', () => {
        megaCats.querySelectorAll('.megamenu__cat').forEach((x) => x.classList.remove('is-active'));
        li.classList.add('is-active');
        renderProductsFor(li.dataset.cat);
      });
      li.addEventListener('click', () => {
        window.location.href = `products.html#cat-${li.dataset.cat}`;
      });
    });

    let closeTimer;
    function openMega() {
      clearTimeout(closeTimer);
      dropdownWrap.classList.add('is-open');
    }
    function closeMega() {
      closeTimer = setTimeout(() => dropdownWrap.classList.remove('is-open'), 120);
    }
    dropdownWrap.addEventListener('mouseenter', openMega);
    dropdownWrap.addEventListener('mouseleave', closeMega);
  }

  /* ---------- Hero particle network canvas ---------- */
  const canvas = document.getElementById('heroCanvas');
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext('2d');
    let w, h, nodes, raf;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * DPR; canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(90, Math.floor((w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(203,116,41,${(1 - dist / 140) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
          }
        }
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(240,176,106,0.7)'; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    resize(); draw();
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
    const hero = document.getElementById('hero');
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { if (!raf) draw(); }
          else { cancelAnimationFrame(raf); raf = null; }
        });
      }).observe(hero);
    }
  }

  /* ---------- Count-up ---------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const start = performance.now(), dur = 1600;
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const val = target * (1 - Math.pow(1 - p, 3));
      el.textContent = val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Contact form (client-side only) ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.getElementById('formNote');
      if (note) {
        note.textContent = 'Terima kasih — pesan Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1 hari kerja.';
        note.classList.add('show');
      }
      form.reset();
    });
  }

  /* ---------- GSAP ---------- */
  if (window.gsap && !prefersReduced) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      });
    });

    if (document.querySelector('.hero [data-reveal]')) {
      gsap.set('.hero [data-reveal]', { opacity: 0, y: 30 });
      gsap.to('.hero [data-reveal]', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.2 });
    }
    if (document.querySelector('.page-hero [data-reveal]')) {
      gsap.set('.page-hero [data-reveal]', { opacity: 0, y: 24 });
      gsap.to('.page-hero [data-reveal]', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.15 });
    }

    gsap.utils.toArray('[data-float]').forEach((el, i) => {
      gsap.to(el, { y: i % 2 ? 22 : -22, duration: 3 + i, ease: 'sine.inOut', repeat: -1, yoyo: true });
      if (document.querySelector('.hero')) {
        gsap.to(el, { yPercent: -30, ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      }
    });

    gsap.utils.toArray('[data-count]').forEach((el) => {
      ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => countUp(el) });
    });

    const steps = gsap.utils.toArray('.step');
    const tlProgress = document.getElementById('timelineProgress');
    if (steps.length) {
      ScrollTrigger.create({
        trigger: '#timeline', start: 'top 70%', end: 'bottom 60%', scrub: 0.5,
        onUpdate: (self) => {
          if (tlProgress) tlProgress.style.width = (self.progress * 100).toFixed(1) + '%';
          const idx = Math.round(self.progress * (steps.length - 1));
          steps.forEach((s, i) => s.classList.toggle('is-active', i <= idx));
        },
      });
    }
  } else {
    document.querySelectorAll('[data-reveal]').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
    document.querySelectorAll('[data-count]').forEach((el) => {
      const d = parseInt(el.dataset.decimals || '0', 10);
      el.textContent = parseFloat(el.dataset.count).toFixed(d) + (el.dataset.suffix || '');
    });
    document.querySelectorAll('.step').forEach((s) => s.classList.add('is-active'));
  }
})();
