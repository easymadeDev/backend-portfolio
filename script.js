(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");

  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var isOpen = mobile.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.classList.toggle("is-active", isOpen);
    });

    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobile.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.classList.remove("is-active");
      });
    });
  }

  // Run button in the About terminal panel
  var runBtn = document.getElementById("runBtn");
  var runOutput = document.getElementById("runOutput");

  if (runBtn && runOutput) {
    runBtn.addEventListener("click", function () {
      runOutput.textContent = "> Engineer { name: 'Isaac Udoh', status: 'shipping' }";
      runOutput.classList.add("is-open");
    });
  }

  // Contact form: builds a Gmail compose link from the filled fields
  var contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var subject = document.getElementById("cf-subject").value.trim();
      var message = document.getElementById("cf-message").value.trim();

      var body = "From: " + name + " (" + email + ")\n\n" + message;
      var gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1&to=easymadeu@gmail.com" +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.open(gmailUrl, "_blank", "noopener");
    });
  }

  // Scroll reveal via IntersectionObserver (no scroll listeners)
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll(
    ".case-card, .stack-group, .approach-item"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
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
    { threshold: 0.1, rootMargin: "0px 0px 200px 0px" }
  );

  revealTargets.forEach(function (el) {
    observer.observe(el);
  });

  // Safety net: guarantee every tracked element is visible even if the
  // observer never fires for it (JS timing, print view, automated capture).
  window.setTimeout(function () {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }, 2500);
})();
