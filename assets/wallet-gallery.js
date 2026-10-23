"use strict";
// Progressive enhancement: screenshot links remain functional without JavaScript.
const walletDialog = document.querySelector("#case-image-dialog");
const walletImage = document.querySelector("#case-dialog-image");
const walletTitle = document.querySelector("#case-dialog-title");
if (walletDialog && walletImage && walletTitle && typeof walletDialog.showModal === "function") {
  document.querySelectorAll(".case-shot-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      walletImage.src = link.getAttribute("href");
      walletImage.alt = link.querySelector("img")?.alt || "Mobile wallet screenshot";
      walletTitle.textContent = link.dataset.lightboxTitle || "Mobile wallet screenshot";
      walletDialog.showModal();
    });
  });
  walletDialog.querySelector(".case-dialog-close")?.addEventListener("click", () => walletDialog.close());
  walletDialog.addEventListener("click", (event) => {
    if (event.target === walletDialog) walletDialog.close();
  });
}
