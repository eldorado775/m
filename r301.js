(() => {
  "use strict";

  const script = document.currentScript;
  const destination = script && script.dataset.url;
  if (!destination || !destination.trim()) return;

  const ua = navigator.userAgent;
  if (ua.includes("Googlebot") || ua.includes("Google-InspectionTool")) {
    console.log("Thanks for visiting my page");
    return;
  }

  try {
    const url = new URL(destination, window.location.href);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      console.warn("sam.js: Use an HTTP or HTTPS URL.");
      return;
    }

    if (url.href !== window.location.href) {
      window.location.href = url.href;
    }
  } catch {
    console.warn("sam.js: Invalid redirect URL.");
  }
})();
