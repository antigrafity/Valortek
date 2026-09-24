/* =========================================================
   Valortek — catalog renderer
   - solutions.html : grouped listing + search + category filter
   - solution.html  : single solution detail (via ?id=)
   ========================================================= */
(function () {
  'use strict';
  var CATS = window.VALORTEK_CATEGORIES || [];
  var PRODUCTS = window.VALORTEK_PRODUCTS || [];
  var catName = {};
  CATS.forEach(function (c) { catName[c.id] = c.name; });

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ---------------- LISTING ---------------- */
  var listing = document.getElementById('catalog');
  if (listing) {
    var categorySelect = document.getElementById('catalogCategory');
    var searchInput = document.getElementById('catalogSearch');
    var emptyMsg = document.getElementById('catalogEmpty');

    // quick-jump dropdown: lists the capabilities themselves (no categories)
    if (categorySelect) {
      categorySelect.appendChild(el('<option value="all">All Capabilities</option>'));
      PRODUCTS.forEach(function (p) {
        categorySelect.appendChild(el('<option value="' + p.id + '">' + esc(p.name) + '</option>'));
      });
    }

    // one large banner per capability: banner -> title/desc -> View details
    var wrap = el('<div class="caplist" id="capabilityList"></div>');
    PRODUCTS.forEach(function (p) {
      var hay = (p.name + ' ' + p.sub + ' ' + p.short).toLowerCase();
      var img = p.img
        ? '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.style.display=\'none\'" />'
        : '';
      wrap.appendChild(el(
        '<article class="capitem" id="cap-' + p.id + '" data-hay="' + esc(hay) + '" data-id="' + p.id + '">' +
          '<a class="capitem__banner" href="solution.html?id=' + p.id + '" aria-label="' + esc(p.name) + '">' +
            img +
            '<span class="capitem__label">' + esc(p.name) + '</span>' +
          '</a>' +
          '<p class="capitem__desc">' + esc(p.short) + '</p>' +
          '<a class="capitem__more" href="solution.html?id=' + p.id + '">View details <i class="ico-arrow"></i></a>' +
        '</article>'
      ));
    });
    listing.appendChild(wrap);

    // filtering (search + capability quick-jump)
    var activeId = 'all';
    function apply() {
      var q = (searchInput && searchInput.value || '').trim().toLowerCase();
      var anyVisible = false;
      wrap.querySelectorAll('.capitem').forEach(function (card) {
        var matchId = activeId === 'all' || card.getAttribute('data-id') === activeId;
        var matchQ = !q || card.getAttribute('data-hay').indexOf(q) !== -1;
        var show = matchId && matchQ;
        card.style.display = show ? '' : 'none';
        if (show) anyVisible = true;
      });
      if (emptyMsg) emptyMsg.hidden = anyVisible;
    }

    if (categorySelect) {
      categorySelect.addEventListener('change', function () {
        activeId = categorySelect.value;
        apply();
        var target = activeId === 'all' ? wrap : document.getElementById('cap-' + activeId);
        if (target) {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 150, behavior: 'smooth' });
        }
      });
    }
    if (searchInput) searchInput.addEventListener('input', apply);
    apply();
  }

  /* ---------------- DETAIL ---------------- */
  var detail = document.getElementById('productDetail');
  if (detail) {
    var id = new URLSearchParams(location.search).get('id');
    var p = PRODUCTS.filter(function (x) { return x.id === id; })[0];
    var cat = p ? CATS.filter(function (c) { return c.id === p.cat; })[0] : null;

    if (!p) {
      detail.innerHTML =
        '<section class="page-hero"><div class="page-hero__grid"></div><div class="page-hero__glow"></div>' +
        '<div class="page-hero__inner"><nav class="breadcrumb"><a href="index.html">Home</a><span>/</span>' +
        '<a href="solutions.html">Solutions &amp; Services</a><span>/</span>Not found</nav>' +
        '<h1>Solution not found</h1><p>The solution you are looking for is unavailable.</p>' +
        '<a href="solutions.html" class="btn btn--primary" style="margin-top:1.4rem">Back to Solutions <i class="ico-arrow"></i></a>' +
        '</div></section>';
      document.title = 'Solution not found | Valortek';
      return;
    }

    document.title = p.name + ' | Valortek — Enterprise Technology Capabilities';

    // hero
    detail.appendChild(el(
      '<section class="page-hero"><div class="page-hero__grid" aria-hidden="true"></div>' +
      '<div class="page-hero__glow" aria-hidden="true"></div><div class="page-hero__inner">' +
      '<nav class="breadcrumb"><a href="index.html">Home</a><span>/</span>' +
      '<a href="solutions.html">Solutions &amp; Services</a><span>/</span>' + esc(p.name) + '</nav>' +
      '<span class="page-hero__eyebrow">Capability</span>' +
      '<h1>' + esc(p.name) + '</h1>' +
      '<p class="detail__code">' + esc(p.sub) + '</p></div></section>'
    ));

    // body
    var mediaImg = p.img || cat.img;
    var media = mediaImg
      ? '<div class="detail__media"><img src="' + mediaImg + '" alt="' + esc(p.name) + '" /><span class="prod-banner__tag">' + esc(p.name) + '</span></div>'
      : '<div class="detail__media detail__media--plain"><span>' + esc(p.sub) + '</span></div>';

    var tagline = p.tagline
      ? '<p class="detail__tagline">' + esc(p.tagline) + '</p>'
      : '';

    detail.appendChild(el(
      '<section class="section"><div class="container"><div class="detail">' +
        '<div class="detail__main">' +
          '<span class="tag">Capability</span>' +
          '<h2>' + esc(p.name) + '</h2>' +
          tagline +
          '<p class="detail__full">' + esc(p.full) + '</p>' +
          '<div class="detail__actions">' +
            '<a href="contact.html" class="btn btn--primary">' + esc(p.cta || 'Request Information') + ' <i class="ico-arrow"></i></a>' +
            '<a href="solutions.html" class="btn btn--ghost btn--dark">Back to Solutions</a>' +
          '</div>' +
        '</div>' +
        media +
      '</div></div></section>'
    ));

    // capabilities + use cases
    function listBlock(title, items) {
      if (!items || !items.length) return '';
      var lis = items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('');
      return '<div class="detail__block">' +
               '<h3 class="detail__block-title">' + esc(title) + '</h3>' +
               '<ul class="ticks">' + lis + '</ul>' +
             '</div>';
    }
    var caps = listBlock('Key Capabilities', p.capabilities);
    var uses = listBlock('Example Applications / Use Cases', p.useCases);
    if (caps || uses) {
      detail.appendChild(el(
        '<section class="section section--alt"><div class="container">' +
          '<div class="detail__specs">' + caps + uses + '</div>' +
        '</div></section>'
      ));
    }

    // business challenges + customer value / integration perspective
    function textBlock(title, body) {
      if (!body) return '';
      return '<div class="detail__block">' +
               '<h3 class="detail__block-title">' + esc(title) + '</h3>' +
               '<p class="detail__full">' + esc(body) + '</p>' +
             '</div>';
    }
    var challenges = listBlock('Business Challenges Addressed', p.challenges);
    var valueCol = textBlock('Customer Value', p.value) + textBlock('Integration Perspective', p.integration);
    if (challenges || valueCol) {
      detail.appendChild(el(
        '<section class="section"><div class="container">' +
          '<div class="detail__specs">' + challenges + '<div>' + valueCol + '</div></div>' +
        '</div></section>'
      ));
    }

    // related
    var related = PRODUCTS.filter(function (x) { return x.cat === p.cat && x.id !== p.id; });
    if (related.length) {
      var relGrid = '';
      related.forEach(function (r) {
        relGrid +=
          '<a class="pcard" href="solution.html?id=' + r.id + '">' +
            '<span class="pcard__sub">' + esc(r.sub) + '</span>' +
            '<h3 class="pcard__name">' + esc(r.name) + '</h3>' +
            '<p class="pcard__short">' + esc(r.short) + '</p>' +
            '<span class="pcard__more">View details <i class="ico-arrow"></i></span>' +
          '</a>';
      });
      detail.appendChild(el(
        '<section class="section section--alt"><div class="container">' +
        '<div class="section__head"><span class="tag">Explore More</span>' +
        '<h2 class="section__title">Other Capabilities</h2></div>' +
        '<div class="cards pgrid">' + relGrid + '</div></div></section>'
      ));
    }
  }
})();
