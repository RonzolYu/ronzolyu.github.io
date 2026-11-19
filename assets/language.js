const languageLink = document.querySelector("[data-preview-href]");

if (languageLink) {
  // A deployed site needs only the real public URL in the anchor's href.
  const localPreview = window.location.protocol === "file:" ||
    (["127.0.0.1", "localhost", "[::1]"].includes(window.location.hostname) &&
      /^\/site-(en|zh)(\/|$)/.test(window.location.pathname));

  if (!languageLink.hasAttribute("href") && localPreview) {
    languageLink.href = languageLink.dataset.previewHref;
  }

  if (languageLink.hasAttribute("href")) {
    languageLink.hidden = false;
  }
}
