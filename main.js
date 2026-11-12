/* Site behaviour: builds the gallery from artworks.js, runs the filters,
   the large view, and the dotted ripple in the hero. You should not need
   to edit this file to add artwork. */
(function () {
  "use strict";

  /* The deploy step replaces this with the current version, so browsers
     fetch fresh files after every update instead of using old saved copies. */
  var BUILD = "__BUILD__";

  var DOT_COLORS = ["#14808a", "#f2b544", "#d5e8e4", "#f3a5a0", "#5fb7b5"];

  /* ---------- dotted placeholder, shown until a real picture is added ---------- */
  function seeded(seed) {
    var s = (seed % 2147483646) + 1;
    return function () { s = (s * 16807) % 2147483647; return s / 2147483647; };
  }
  function placeholder(seed) {
    var rand = seeded(seed * 7919 + 13), dots = "";
    for (var ring = 0; ring < 9; ring++) {
      var radius = 14 + ring * 17;
      var count = 6 + ring * 6;
      var size = 2 + rand() * 4;
      var color = DOT_COLORS[Math.floor(rand() * DOT_COLORS.length)];
      var turn = rand() * Math.PI;
      for (var i = 0; i < count; i++) {
        var a = turn + (i / count) * Math.PI * 2;
        dots += '<circle cx="' + (200 + radius * Math.cos(a)).toFixed(1) +
                '" cy="' + (250 + radius * Math.sin(a)).toFixed(1) +
                '" r="' + size.toFixed(1) + '" fill="' + color + '"/>';
      }
    }
    return '<svg viewBox="0 0 400 500" role="img" aria-label="Placeholder, artwork coming soon" ' +
           'preserveAspectRatio="xMidYMid slice"><rect width="400" height="500" fill="#0c3344"/>' + dots + "</svg>";
  }

  function artMarkup(work, index) {
    if (work.image) {
      return '<img src="' + work.image + '?v=' + BUILD + '" alt="' + work.title.replace(/"/g, "&quot;") + '" loading="lazy">';
    }
    return placeholder(index + 1);
  }

  /* ---------- gallery and filters ---------- */
  var gallery = document.getElementById("gallery");
  var filters = document.getElementById("filters");
  var note = document.getElementById("collection-note");
  var current = "all";

  function collectionName(id) {
    for (var i = 0; i < COLLECTIONS.length; i++) if (COLLECTIONS[i].id === id) return COLLECTIONS[i].name;
    return "";
  }

  function renderGallery() {
    gallery.innerHTML = "";
    ARTWORKS.forEach(function (work, index) {
      if (current !== "all" && work.collection !== current) return;
      var button = document.createElement("button");
      button.className = "piece";
      button.type = "button";
      button.innerHTML =
        '<span class="piece-art">' + artMarkup(work, index) + "</span>" +
        '<span class="piece-title"></span><span class="piece-details"></span>';
      button.querySelector(".piece-title").textContent = work.title;
      button.querySelector(".piece-details").textContent =
        current === "all" ? collectionName(work.collection) : (work.details || "");
      /* if a picture file is missing, fall back to the placeholder */
      var img = button.querySelector("img");
      if (img) img.addEventListener("error", function () {
        button.querySelector(".piece-art").innerHTML = placeholder(index + 1);
      });
      button.addEventListener("click", function () { openViewer(work, index); });
      gallery.appendChild(button);
    });
    if (!gallery.children.length) {
      gallery.innerHTML = "<p>New pieces for this collection are on the way.</p>";
    }
  }

  function renderFilters() {
    var options = [{ id: "all", name: "All artwork", note: "" }].concat(COLLECTIONS);
    filters.innerHTML = "";
    options.forEach(function (option) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = option.name;
      b.setAttribute("aria-pressed", String(option.id === current));
      b.addEventListener("click", function () {
        current = option.id;
        note.textContent = option.note || "";
        renderFilters();
        renderGallery();
      });
      filters.appendChild(b);
    });
  }

  /* ---------- large view ---------- */
  var viewer = document.getElementById("viewer");
  function openViewer(work, index) {
    document.getElementById("viewer-art").innerHTML = artMarkup(work, index);
    document.getElementById("viewer-title").textContent = work.title;
    document.getElementById("viewer-details").textContent =
      [collectionName(work.collection), work.details].filter(Boolean).join(". ");
    document.getElementById("viewer-inquire").href =
      "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Inquiry: " + work.title);
    if (viewer.showModal) viewer.showModal(); else viewer.setAttribute("open", "");
  }
  function closeViewer() { if (viewer.close) viewer.close(); else viewer.removeAttribute("open"); }
  document.getElementById("viewer-close").addEventListener("click", closeViewer);
  viewer.addEventListener("click", function (e) { if (e.target === viewer) closeViewer(); });

  /* ---------- hero: rings of dots, placed one at a time ---------- */
  var canvas = document.getElementById("ripple");
  var ctx = canvas.getContext("2d");
  var frame = null;

  function buildDots(w, h) {
    var narrow = w < 760;
    var cx = narrow ? w * 0.88 : w * 0.74;
    var cy = narrow ? h * 0.22 : h * 0.48;
    var reach = Math.max(w, h) * (narrow ? 0.75 : 0.62);
    var dots = [];
    for (var ring = 0, r = 10; r < reach; ring++, r += 19) {
      var count = Math.max(6, Math.floor((Math.PI * 2 * r) / 17));
      var size = 2.2 + 2.4 * (0.5 + 0.5 * Math.sin(ring * 0.9));
      var color = DOT_COLORS[ring % DOT_COLORS.length];
      var fade = Math.pow(Math.max(0, 1 - r / reach), 1.4);
      for (var i = 0; i < count; i++) {
        var a = (i / count) * Math.PI * 2 + ring * 0.35;
        var x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
        if (x < -8 || x > w + 8 || y < -8 || y > h + 8) continue;
        dots.push({ x: x, y: y, size: size, color: color, alpha: 0.12 + 0.88 * fade });
      }
    }
    return dots;
  }

  function drawRipple(animate) {
    if (frame) cancelAnimationFrame(frame);
    var ratio = window.devicePixelRatio || 1;
    var w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    var dots = buildDots(w, h);
    var placed = 0;
    var perFrame = animate ? Math.max(4, Math.ceil(dots.length / 200)) : dots.length;
    function step() {
      var end = Math.min(dots.length, placed + perFrame);
      for (; placed < end; placed++) {
        var d = dots[placed];
        ctx.globalAlpha = d.alpha;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      }
      if (placed < dots.length) frame = requestAnimationFrame(step);
    }
    step();
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lastWidth = 0, resizeTimer = null;
  window.addEventListener("resize", function () {
    if (canvas.clientWidth === lastWidth) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { lastWidth = canvas.clientWidth; drawRipple(false); }, 150);
  });

  /* ---------- start ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  renderFilters();
  renderGallery();
  lastWidth = canvas.clientWidth;
  drawRipple(!reduceMotion);
})();
