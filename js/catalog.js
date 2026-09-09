/* =========================================================
   Valortek — catalog renderer
   - products.html : grouped listing + search + category filter
   - product.html  : single product detail (via ?id=)
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

    // category dropdown
    var optData = [{ id: 'all', name: 'All Products' }].concat(CATS);
    optData.forEach(function (c) {
      categorySelect.appendChild(el('<option value="' + c.id + '">' + esc(c.name) + '</option>'));
    });

    // category sections + cards
    CATS.forEach(function (c) {
      var section = el('<section class="catcat" id="cat-' + c.id + '" data-cat="' + c.id + '"></section>');
      section.appendChild(el(
        '<div class="catcat__head">' +
          '<span class="tag">' + esc(c.name) + '</span>' +
        '</div>'
      ));
      if (c.img) {
        // If the banner image is missing (e.g. not yet generated), hide the <img>
        // so it falls back to the styled banner box instead of a broken-image icon.
        section.appendChild(el(
          '<div class="prod-banner"><img src="' + c.img + '" alt="' + esc(c.name) + '" loading="lazy" onerror="this.style.display=\'none\'" />' +
          '<span class="prod-banner__tag">' + esc(c.name) + '</span></div>'
        ));
      }
      section.appendChild(el(
        '<p class="catcat__tag' + (c.img ? ' catcat__tag--below' : '') + '">' + esc(c.tagline) + '</p>'
      ));
      var grid = el('<div class="cards pgrid"></div>');
      PRODUCTS.filter(function (p) { return p.cat === c.id; }).forEach(function (p) {
        var hay = (p.name + ' ' + p.sub + ' ' + c.name).toLowerCase();
        var reviewBadge = p.flag === 'review'
          ? '<span class="review-badge" title="Positioning under internal review">Under Review</span>'
          : '';
        grid.appendChild(el(
          '<a class="pcard' + (p.flag === 'review' ? ' pcard--review' : '') + '" href="product.html?id=' + p.id + '" data-hay="' + esc(hay) + '" data-cat="' + p.cat + '">' +
            reviewBadge +
            '<span class="pcard__sub">' + esc(p.sub) + '</span>' +
            '<h3 class="pcard__name">' + esc(p.name) + '</h3>' +
            '<p class="pcard__short">' + esc(p.short) + '</p>' +
            '<span class="pcard__more">View details <i class="ico-arrow"></i></span>' +
          '</a>'
        ));
      });
      section.appendChild(grid);
      listing.appendChild(section);
    });

    // filtering
    var activeCat = 'all';
    function apply() {
      var q = (searchInput.value || '').trim().toLowerCase();
      var anyVisible = false;
      CATS.forEach(function (c) {
        var section = document.getElementById('cat-' + c.id);
        var cards = section.querySelectorAll('.pcard');
        var shownInCat = 0;
        cards.forEach(function (card) {
          var matchCat = activeCat === 'all' || card.getAttribute('data-cat') === activeCat;
          var matchQ = !q || card.getAttribute('data-hay').indexOf(q) !== -1;
          var show = matchCat && matchQ;
          card.style.display = show ? '' : 'none';
          if (show) shownInCat++;
        });
        section.style.display = shownInCat ? '' : 'none';
        if (shownInCat) anyVisible = true;
      });
      if (emptyMsg) emptyMsg.hidden = anyVisible;
    }

    categorySelect.addEventListener('change', function () {
      activeCat = categorySelect.value;
      apply();
      if (activeCat !== 'all') {
        var s = document.getElementById('cat-' + activeCat);
        if (s) window.scrollTo({ top: s.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
      }
    });
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
        '<a href="products.html">Products</a><span>/</span>Not found</nav>' +
        '<h1>Product not found</h1><p>The product you are looking for is unavailable.</p>' +
        '<a href="products.html" class="btn btn--primary" style="margin-top:1.4rem">Back to Products <i class="ico-arrow"></i></a>' +
        '</div></section>';
      document.title = 'Product not found | Valortek';
      return;
    }

    document.title = p.name + ' (' + p.sub + ') | Valortek';

    // hero
    detail.appendChild(el(
      '<section class="page-hero"><div class="page-hero__grid" aria-hidden="true"></div>' +
      '<div class="page-hero__glow" aria-hidden="true"></div><div class="page-hero__inner">' +
      '<nav class="breadcrumb"><a href="index.html">Home</a><span>/</span>' +
      '<a href="products.html">Products</a><span>/</span>' +
      '<a href="products.html#cat-' + cat.id + '">' + esc(cat.name) + '</a><span>/</span>' + esc(p.sub) + '</nav>' +
      '<span class="page-hero__eyebrow">' + esc(cat.name) + '</span>' +
      '<h1>' + esc(p.name) + '</h1>' +
      '<p class="detail__code">' + esc(p.sub) + '</p></div></section>'
    ));

    // body
    var media = cat.img
      ? '<div class="detail__media"><img src="' + cat.img + '" alt="' + esc(cat.name) + '" /><span class="prod-banner__tag">' + esc(cat.name) + '</span></div>'
      : '<div class="detail__media detail__media--plain"><span>' + esc(p.sub) + '</span></div>';

    var reviewNotice = p.flag === 'review'
      ? '<div class="review-notice" role="note">' +
          '<strong>⚠ Under Review</strong> This product\u2019s positioning and wording are still under internal review and have not yet been aligned to Valortek\u2019s enterprise positioning.' +
        '</div>'
      : '';

    detail.appendChild(el(
      '<section class="section"><div class="container"><div class="detail">' +
        '<div class="detail__main">' +
          '<span class="tag">' + esc(cat.name) + '</span>' +
          '<h2>' + esc(p.name) + '</h2>' +
          reviewNotice +
          '<p class="detail__full">' + esc(p.full) + '</p>' +
          '<div class="detail__actions">' +
            '<a href="contact.html" class="btn btn--primary">Request Information <i class="ico-arrow"></i></a>' +
            '<a href="products.html" class="btn btn--ghost btn--dark">Back to Products</a>' +
          '</div>' +
        '</div>' +
        media +
      '</div></div></section>'
    ));

    // related
    var related = PRODUCTS.filter(function (x) { return x.cat === p.cat && x.id !== p.id; });
    if (related.length) {
      var relGrid = '';
      related.forEach(function (r) {
        relGrid +=
          '<a class="pcard" href="product.html?id=' + r.id + '">' +
            '<span class="pcard__sub">' + esc(r.sub) + '</span>' +
            '<h3 class="pcard__name">' + esc(r.name) + '</h3>' +
            '<p class="pcard__short">' + esc(r.short) + '</p>' +
            '<span class="pcard__more">View details <i class="ico-arrow"></i></span>' +
          '</a>';
      });
      detail.appendChild(el(
        '<section class="section section--alt"><div class="container">' +
        '<div class="section__head"><span class="tag">More in ' + esc(cat.name) + '</span>' +
        '<h2 class="section__title">Related products</h2></div>' +
        '<div class="cards pgrid">' + relGrid + '</div></div></section>'
      ));
    }
  }
})();
