"use strict";
// Progressive enhancement: screenshots still open directly if JavaScript fails.
const bookingDialog = document.querySelector("#case-image-dialog");
const bookingDialogImage = document.querySelector("#case-dialog-image");
const bookingDialogTitle = document.querySelector("#case-dialog-title");
const bookingCloseButton = bookingDialog?.querySelector(".case-dialog-close");

if (
  bookingDialog &&
  bookingDialogImage &&
  bookingDialogTitle &&
  typeof bookingDialog.showModal === "function"
) {
  document.querySelectorAll(".case-shot-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const screenshot = link.querySelector("img");
      bookingDialogImage.src = link.getAttribute("href");
      bookingDialogImage.alt = screenshot?.alt || "Booking extension screenshot";
      bookingDialogTitle.textContent =
        link.dataset.lightboxTitle || "Booking extension screenshot";
      bookingDialog.showModal();
    });
  });
  bookingCloseButton?.addEventListener("click", () => bookingDialog.close());
  bookingDialog.addEventListener("click", (event) => {
    if (event.target === bookingDialog) bookingDialog.close();
  });
}
