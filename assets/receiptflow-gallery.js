"use strict";

// Progressive enhancement: screenshots still open in a new tab if this file fails to load.
const dialog = document.querySelector("#case-image-dialog");
const dialogImage = document.querySelector("#case-dialog-image");
const dialogTitle = document.querySelector("#case-dialog-title");
const closeButton = dialog?.querySelector(".case-dialog-close");

if (dialog && dialogImage && dialogTitle && typeof dialog.showModal === "function") {
  document.querySelectorAll(".case-shot-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const shot = link.querySelector("img");
      dialogImage.src = link.getAttribute("href");
      dialogImage.alt = shot?.alt || "ReceiptFlow application screenshot";
      dialogTitle.textContent = link.dataset.lightboxTitle || "ReceiptFlow screenshot";
      dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
