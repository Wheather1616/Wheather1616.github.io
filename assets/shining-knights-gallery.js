"use strict";

// Progressive enhancement: screenshot links still work without JavaScript.
const dialog = document.querySelector("#case-image-dialog");
const dialogImage = document.querySelector("#case-dialog-image");
const dialogTitle = document.querySelector("#case-dialog-title");
const closeButton = dialog?.querySelector(".case-dialog-close");

if (
  dialog &&
  dialogImage &&
  dialogTitle &&
  typeof dialog.showModal === "function"
) {
  document.querySelectorAll(".case-shot-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const shot = link.querySelector("img");
      dialogImage.src = link.getAttribute("href");
      dialogImage.alt = shot?.alt || "Shining Knights application screenshot";
      dialogTitle.textContent =
        link.dataset.lightboxTitle || "Shining Knights screenshot";
      dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
