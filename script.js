const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxYear = document.getElementById("lightboxYear");
const closeBtn = document.getElementById("closeBtn");

function openLightbox(imgEl){
  lightboxImg.src = imgEl.src;
  lightboxImg.alt = imgEl.alt || "Artwork";
  lightboxTitle.textContent = imgEl.dataset.title || "";
  lightboxYear.textContent = imgEl.dataset.year || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

document.querySelectorAll("#gallery img").forEach(img => {
  img.addEventListener("click", () => openLightbox(img));
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
