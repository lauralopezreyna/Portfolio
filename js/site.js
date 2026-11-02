/* =====================================================================
   Builds the shared parts of the site and the pages from js/projects.js.
   You normally never need to edit this file.
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- small helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function make(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  /* An image that falls back to a grey box naming the missing file. */
  function imgTag(src, alt, label, light) {
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" data-ph="' + esc(label) + '"' +
           (light ? ' data-light' : '') + ' loading="lazy">';
  }
  function fallback(img) {
    if (!img || img.dataset.done) return;
    img.dataset.done = '1';
    var box = document.createElement('div');
    box.className = 'ph' + (img.hasAttribute('data-light') ? ' light' : '');
    box.setAttribute('role', 'img');
    box.setAttribute('aria-label', img.getAttribute('alt') || img.dataset.ph || 'image placeholder');
    box.innerHTML = '<span>' + esc(img.dataset.ph || '[IMAGE]') + '</span><small>' +
                    esc(img.getAttribute('src') || '') + '</small>';
    img.replaceWith(box);
  }
  function watchImages(root) {
    (root || document).querySelectorAll('img[data-ph]').forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) fallback(img);
    });
  }
  document.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG' && e.target.hasAttribute('data-ph')) fallback(e.target);
  }, true);

  /* ---------- header, footer, contact star (on every page) ---------- */
  function buildChrome() {
    var header = document.getElementById('site-header');
    if (header) {
      header.className = 'site-header';
      header.innerHTML =
        '<a class="brand" href="index.html"><img src="images/logo.png" alt="Laura Lopez Reyna logo" width="46" height="46"><span>laura lopez reyna</span></a>' +
        '<nav class="nav" aria-label="Main">' +
        '<a href="index.html#projects">projects</a>' +
        '<a href="index.html#sketchbook">art</a>' +
        '<a href="index.html#about">about</a>' +
        '<button type="button" id="contact-btn" aria-haspopup="dialog">contact</button>' +
        '</nav>';
    }
    var footer = document.getElementById('site-footer');
    if (footer) {
      footer.className = 'site-footer';
      footer.innerHTML =
        '<a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + '</a>' +
        '<a href="' + esc(SITE.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>';
    }
    var overlay = make(
      '<div class="contact-overlay" id="contact" hidden>' +
        '<div class="contact-star" role="dialog" aria-label="Contact">' +
          '<img src="images/contact_star.png" alt="" aria-hidden="true">' +
          '<div class="contact-text">' +
            '<div class="contact-title">contact</div>' +
            '<a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email).replace('@', '@<br>') + '</a>' +
            '<a href="' + esc(SITE.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>' +
          '</div>' +
          '<button type="button" class="contact-close" aria-label="Close contact">\u00d7</button>' +
        '</div>' +
      '</div>');
    document.body.appendChild(overlay);

    var btn = document.getElementById('contact-btn');
    function openContact() { overlay.hidden = false; overlay.querySelector('.contact-close').focus(); }
    function closeContact() { overlay.hidden = true; if (btn) btn.focus(); }
    if (btn) btn.addEventListener('click', openContact);
    overlay.querySelector('.contact-close').addEventListener('click', closeContact);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeContact(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.hidden) closeContact();
    });
  }

  /* ---------- home page: project cards ---------- */
  function buildCards() {
    var grid = document.getElementById('project-grid');
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(function (p) {
      return '<article class="card">' +
        '<div class="card-thumb">' + imgTag(p.image, 'Image for ' + p.title, '[PROJECT IMAGE]') + '</div>' +
        '<div class="card-body">' +
          '<h3 class="card-title">' + esc(p.file) + '</h3>' +
          '<div class="card-sub">' + esc(p.sub) + '</div>' +
          '<p class="card-text">' + esc(p.cardText) + '</p>' +
          '<div class="card-tools">' + esc(p.cardTools) + '</div>' +
          '<a class="card-link" href="project.html?id=' + encodeURIComponent(p.id) + '">more info \u2192</a>' +
        '</div></article>';
    }).join('');
  }

  /* ---------- home page: sketchbook polaroids + enlarged view ---------- */
  function buildSketchbook() {
    var wrap = document.getElementById('polaroids');
    if (!wrap) return;
    wrap.innerHTML = DRAWINGS.map(function (d, i) {
      return '<button type="button" class="polaroid" data-i="' + i + '" aria-label="Open drawing ' + (i + 1) + ': ' + esc(d.title) + '">' +
        '<div class="polaroid-img">' + imgTag(d.src, d.title, '[YOUR DRAWING]') + '</div>' +
        '<div class="polaroid-title">' + esc(d.title) + '</div></button>';
    }).join('');

    var lb = make(
      '<div class="lb" id="lightbox" hidden role="dialog" aria-modal="true" aria-label="Drawing">' +
        '<figure class="lb-card" id="lb-card">' +
          '<div class="lb-img" id="lb-img"></div>' +
          '<figcaption class="lb-cap">' +
            '<div class="lb-title" id="lb-title"></div>' +
            '<div class="lb-meta" id="lb-medium"></div>' +
            '<div class="lb-meta" id="lb-meta"></div>' +
            '<div id="lb-link"></div>' +
          '</figcaption>' +
        '</figure>' +
        '<button type="button" class="lb-btn lb-prev" aria-label="Previous drawing">\u2039</button>' +
        '<button type="button" class="lb-btn lb-next" aria-label="Next drawing">\u203a</button>' +
        '<button type="button" class="lb-btn lb-close" aria-label="Close">\u00d7</button>' +
        '<div class="lb-count" id="lb-count"></div>' +
      '</div>');
    document.body.appendChild(lb);

    var cur = 0, opener = null, n = DRAWINGS.length;
    function show(i) {
      cur = (i + n) % n;
      var d = DRAWINGS[cur];
      document.getElementById('lb-img').innerHTML = imgTag(d.src, d.title, '[YOUR DRAWING]');
      watchImages(lb);
      document.getElementById('lb-title').textContent = d.title;
      document.getElementById('lb-medium').textContent = 'Medium: ' + d.medium;
      document.getElementById('lb-meta').textContent = d.meta;
      document.getElementById('lb-link').innerHTML = d.project
        ? '<a class="lb-link" href="project.html?id=' + encodeURIComponent(d.project) + '">see the project \u2192</a>' : '';
      document.getElementById('lb-count').textContent = (cur + 1) + ' / ' + n;
      /* alternate the tilt: right, left, right, left ... */
      document.getElementById('lb-card').style.transform = 'rotate(' + (cur % 2 === 1 ? '-3deg' : '3deg') + ')';
    }
    function open(i, from) { opener = from || null; show(i); lb.hidden = false; lb.querySelector('.lb-close').focus(); }
    function close() { lb.hidden = true; if (opener) opener.focus(); }

    wrap.addEventListener('click', function (e) {
      var b = e.target.closest('.polaroid');
      if (b) open(Number(b.dataset.i), b);
    });
    lb.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(cur - 1); });
    lb.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(cur + 1); });
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') show(cur + 1);
      else if (e.key === 'ArrowLeft') show(cur - 1);
    });
  }

  /* ---------- project page ---------- */
  function figure(ph, cls) {
    return '<figure class="figure ' + (cls || '') + '"><div class="figure-box">' +
      '<div class="figure-media">' + imgTag(ph.src, ph.caption || ph.label, ph.label) + '</div>' +
      '<figcaption>' + esc(ph.caption) + '</figcaption></div></figure>';
  }
  function kv(label, value) {
    return '<div class="kv"><span class="kv-label">' + esc(label) + '</span><span class="kv-value">' + esc(value) + '</span></div>';
  }
  function buildProject() {
    var root = document.getElementById('project-root');
    if (!root) return;
    var id = new URLSearchParams(location.search).get('id');
    var i = PROJECTS.findIndex(function (p) { return p.id === id; });
    if (i < 0) {
      document.getElementById('title-block').innerHTML =
        '<div class="title-inner"><a class="back-link" href="index.html#projects">\u2190 back to projects</a>' +
        '<h1>Project not found</h1><p>That project does not exist yet.</p></div>';
      return;
    }
    var p = PROJECTS[i];
    var next = PROJECTS[(i + 1) % PROJECTS.length];
    document.title = p.title + ' \u2014 ' + SITE.name;

    document.getElementById('title-block').innerHTML =
      '<div class="title-inner">' +
        '<a class="back-link" href="index.html#projects">\u2190 back to projects</a>' +
        '<div class="file-name">' + esc(p.file) + '</div>' +
        '<h1>' + esc(p.title) + '</h1>' +
        '<p>' + esc(p.summary) + '</p>' +
      '</div>';

    var photos = p.photos || [];
    var gallery = photos.slice(1).map(function (ph) { return figure(ph, ph.wide ? 'wide' : ''); }).join('');
    root.innerHTML =
      (photos[0] ? '<div class="gallery">' + figure(photos[0], 'hero wide') + '</div>' : '') +
      '<div class="story-row">' +
        '<div class="panel story">' +
          kv('The Challenge', p.story.challenge) + kv('What I Did', p.story.did) +
          kv('The Hard Part', p.story.hard) + kv('How It Ended', p.story.ended) +
          kv('If I Did It Again', p.story.again) +
        '</div>' +
        '<div class="panel glance">' +
          kv('Course', p.course) + kv('Team', p.team) + kv('My Role', p.role) + kv('Tools', p.tools) +
        '</div>' +
      '</div>' +
      '<div class="stats">' + (p.stats || []).map(function (s) {
        return '<div class="stat"><div class="stat-label">' + esc(s.label) + '</div><div class="stat-value">' + esc(s.value) + '</div></div>';
      }).join('') + '</div>' +
      (gallery ? '<div><h2 class="section-title">photos</h2><div class="gallery">' + gallery + '</div></div>' : '') +
      '<div class="pager">' +
        '<a class="btn" href="index.html#projects">\u2190 all projects</a>' +
        '<a class="btn" href="project.html?id=' + encodeURIComponent(next.id) + '">next: ' + esc(next.file) + ' \u2192</a>' +
      '</div>';
  }

  /* ---------- go ---------- */
  buildChrome();
  buildCards();
  buildSketchbook();
  buildProject();
  watchImages(document);
})();
