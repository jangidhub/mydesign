(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isFinePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------------------------------------------------------------
     Render content from data.js
     --------------------------------------------------------------- */

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

  function linkIconSVG() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  }

  function renderWorkList() {
    var el = document.getElementById("workList");
    if (!el || typeof PROJECTS === "undefined") return;

    var html = PROJECTS.map(function (p, i) {
      var index = String(i + 1).padStart(2, "0");
      var status = p.status ? '<span class="work-status">' + escapeHtml(p.status) + "</span>" : "";
      var features = (p.features || []).map(escapeHtml).join(" · ");
      var tech = (p.tech || []).map(escapeHtml).join(" · ");
      var links = "";
      if (p.github) {
        links += '<a href="' + p.github + '" target="_blank" rel="noopener">' + linkIconSVG() + "GitHub</a>";
      }
      if (p.demo) {
        links += '<a href="' + p.demo + '" target="_blank" rel="noopener">' + linkIconSVG() + "Live demo</a>";
      }

      return (
        '<article class="work-item reveal">' +
        '<div class="work-index">' + index + "</div>" +
        '<div class="work-text">' +
        "<h3>" + escapeHtml(p.name) + "</h3>" +
        status +
        '<p class="work-desc">' + escapeHtml(p.description) + "</p>" +
        '<div class="work-meta">' +
        (features ? '<div class="work-meta-row"><span class="k">Features</span><span class="v">' + features + "</span></div>" : "") +
        (tech ? '<div class="work-meta-row"><span class="k">Stack</span><span class="v">' + tech + "</span></div>" : "") +
        "</div>" +
        (links ? '<div class="work-links">' + links + "</div>" : "") +
        "</div>" +
        '<div class="work-visual"><div class="pattern" data-pattern="' + (p.pattern || "grid") + '"></div></div>' +
        "</article>"
      );
    }).join("");

    el.innerHTML = html;
    renderPatterns(el);
  }

  function renderPatterns(scopeEl) {
    var palettes = {
      grid: { a: "#0071e3", b: "#161719" },
      waves: { a: "#6fd0ff", b: "#111214" },
      lines: { a: "#7c5cff", b: "#101012" },
      dots: { a: "#ff8a4c", b: "#121213" },
    };
    scopeEl.querySelectorAll(".pattern").forEach(function (node) {
      var kind = node.dataset.pattern;
      var colors = palettes[kind] || palettes.grid;
      var svg = "";
      if (kind === "grid") {
        svg =
          '<svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">' +
          '<rect width="400" height="300" fill="' + colors.b + '"/>' +
          '<defs><pattern id="g" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="' + colors.a + '" stroke-opacity="0.18"/></pattern></defs>' +
          '<rect width="400" height="300" fill="url(#g)"/>' +
          '<circle cx="120" cy="150" r="70" fill="' + colors.a + '" fill-opacity="0.14"/>' +
          '<circle cx="280" cy="90" r="30" fill="' + colors.a + '" fill-opacity="0.22"/>' +
          "</svg>";
      } else if (kind === "waves") {
        svg =
          '<svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">' +
          '<rect width="400" height="300" fill="' + colors.b + '"/>' +
          '<path d="M0 160 Q 50 120 100 160 T 200 160 T 300 160 T 400 160" stroke="' + colors.a + '" stroke-opacity="0.5" stroke-width="2" fill="none"/>' +
          '<path d="M0 190 Q 50 150 100 190 T 200 190 T 300 190 T 400 190" stroke="' + colors.a + '" stroke-opacity="0.3" stroke-width="2" fill="none"/>' +
          '<path d="M0 130 Q 50 90 100 130 T 200 130 T 300 130 T 400 130" stroke="' + colors.a + '" stroke-opacity="0.2" stroke-width="2" fill="none"/>' +
          "</svg>";
      } else if (kind === "lines") {
        svg =
          '<svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">' +
          '<rect width="400" height="300" fill="' + colors.b + '"/>' +
          Array.from({ length: 9 })
            .map(function (_, i) {
              return '<line x1="' + (i * 46 - 40) + '" y1="0" x2="' + (i * 46 + 100) + '" y2="300" stroke="' + colors.a + '" stroke-opacity="0.16" stroke-width="1"/>';
            })
            .join("") +
          '<circle cx="200" cy="150" r="46" fill="none" stroke="' + colors.a + '" stroke-opacity="0.55" stroke-width="1.4"/>' +
          "</svg>";
      } else {
        svg =
          '<svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">' +
          '<rect width="400" height="300" fill="' + colors.b + '"/>' +
          Array.from({ length: 60 })
            .map(function () {
              var x = Math.round(Math.random() * 400);
              var y = Math.round(Math.random() * 300);
              var r = Math.random() * 2 + 0.6;
              var o = (Math.random() * 0.5 + 0.15).toFixed(2);
              return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + colors.a + '" fill-opacity="' + o + '"/>';
            })
            .join("") +
          "</svg>";
      }
      node.innerHTML = svg;
    });
  }

  function renderBuilding() {
    var el = document.getElementById("buildingSection");
    if (!el || typeof CURRENTLY_BUILDING === "undefined") return;
    var cb = CURRENTLY_BUILDING;
    var tags = (cb.tech || []).map(function (t) { return "<li>" + escapeHtml(t) + "</li>"; }).join("");

    el.innerHTML =
      '<div class="building-text reveal">' +
      "<h3>" + escapeHtml(cb.name) + "</h3>" +
      '<span class="work-status">' + escapeHtml(cb.status) + "</span>" +
      "<p>" + escapeHtml(cb.description) + "</p>" +
      '<ul aria-label="Technologies">' + tags + "</ul>" +
      "</div>" +
      '<div class="nfc-card-stage reveal">' +
      '<div class="nfc-card" id="nfcCard">' +
      '<div class="nfc-card-top">' +
      '<div class="nfc-chip" aria-hidden="true"></div>' +
      '<svg class="nfc-wave" viewBox="0 0 24 24" fill="none" stroke="#4da3ff" stroke-width="1.6" aria-hidden="true">' +
      '<path d="M6 12a6 6 0 0 1 12 0"/><path d="M3 12a9 9 0 0 1 18 0"/><circle cx="12" cy="12" r="1.4" fill="#4da3ff" stroke="none"/>' +
      "</svg>" +
      "</div>" +
      '<div class="nfc-card-bottom">' +
      '<div class="nfc-card-name">Sudhanshu Jangid</div>' +
      '<div class="nfc-card-role">Software Developer</div>' +
      "</div>" +
      "</div>" +
      "</div>";

    initNfcTilt();
  }

  function initNfcTilt() {
    var card = document.getElementById("nfcCard");
    if (!card || prefersReducedMotion || !isFinePointer) return;
    var stage = card.parentElement;

    stage.addEventListener("mousemove", function (e) {
      var rect = stage.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var rotY = x * 14;
      var rotX = y * -14;
      card.style.transform = "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) translateZ(10px)";
    });

    stage.addEventListener("mouseleave", function () {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  function renderCapabilities() {
    var el = document.getElementById("capabilitiesList");
    if (!el || typeof CAPABILITIES === "undefined") return;
    el.innerHTML = CAPABILITIES.map(function (c, i) {
      return (
        '<div class="capability">' +
        '<div class="capability-index">' + String(i + 1).padStart(2, "0") + "</div>" +
        '<div><div class="capability-title">' + escapeHtml(c.title) + "</div>" +
        '<p class="capability-desc">' + escapeHtml(c.description) + "</p></div>" +
        "</div>"
      );
    }).join("");
  }

  function renderSkills() {
    var el = document.getElementById("skillsGrid");
    if (!el || typeof SKILLS === "undefined") return;
    el.innerHTML = SKILLS.map(function (group) {
      var items = group.items.map(function (i) { return "<li>" + escapeHtml(i) + "</li>"; }).join("");
      return (
        '<div class="skills-group">' +
        '<div class="skills-group-label">' + escapeHtml(group.group) + "</div>" +
        '<ul class="skills-tags">' + items + "</ul>" +
        "</div>"
      );
    }).join("");
  }

  function renderTimeline() {
    var el = document.getElementById("timelineList");
    if (!el || typeof EDUCATION === "undefined" || typeof EXPERIENCE === "undefined") return;
    var items = EXPERIENCE.concat(EDUCATION);
    el.innerHTML = items.map(function (item) {
      return (
        '<div class="timeline-item">' +
        '<div class="timeline-period">' + escapeHtml(item.period || "") + "</div>" +
        "<div>" +
        '<div class="timeline-title">' + escapeHtml(item.title) + "</div>" +
        '<div class="timeline-org">' + escapeHtml(item.org) + "</div>" +
        (item.description ? '<p class="timeline-desc">' + escapeHtml(item.description) + "</p>" : "") +
        "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------------------------------------------
     Navigation
     --------------------------------------------------------------- */

  function initNav() {
    var nav = document.getElementById("siteNav");
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");

    function onScroll() {
      if (window.scrollY > 40) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      });
      menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }
  }

  /* ---------------------------------------------------------------
     Scroll reveal — single consistent treatment, IntersectionObserver
     --------------------------------------------------------------- */

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------------
     Custom cursor (desktop only)
     --------------------------------------------------------------- */

  function initCursor() {
    if (!isFinePointer || prefersReducedMotion) return;
    var dot = document.getElementById("cursorDot");
    var ring = document.getElementById("cursorRing");
    if (!dot || !ring) return;

    var ringX = 0, ringY = 0, targetX = 0, targetY = 0;

    window.addEventListener("mousemove", function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = "translate(" + targetX + "px, " + targetY + "px) translate(-50%, -50%)";
    });

    function loop() {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = "translate(" + ringX + "px, " + ringY + "px) translate(-50%, -50%)";
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    document.querySelectorAll("a, button, .capability").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.classList.add("is-active"); });
      el.addEventListener("mouseleave", function () { ring.classList.remove("is-active"); });
    });
  }

  /* ---------------------------------------------------------------
     Misc
     --------------------------------------------------------------- */

  function initFooterYear() {
    var el = document.getElementById("footerYear");
    if (el) el.textContent = new Date().getFullYear();
  }

  function init() {
    renderWorkList();
    renderBuilding();
    renderCapabilities();
    renderSkills();
    renderTimeline();
    initNav();
    initReveal();
    initCursor();
    initFooterYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
