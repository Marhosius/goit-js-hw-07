import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const createGallary = galleryItems.map(({ preview, original, description }) => `<li> <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a> </li>`);
galleryListEl.insertAdjacentHTML('afterbegin', createGallary.join(""));

let gallery = new SimpleLightbox('.gallery .gallery__link');
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;




