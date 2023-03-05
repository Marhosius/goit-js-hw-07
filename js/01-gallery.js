import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const createGallary = galleryItems.map(({ preview, original, description }) => `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`);
console.log(createGallary);
galleryListEl.insertAdjacentHTML('afterbegin', (createGallary).join(""));

galleryListEl.addEventListener('click', handleImgClick);

function handleImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show();

    galleryListEl.addEventListener('keydown', (ev) => {
        if (ev.code === 'Escape') {
            instance.close();
        }
    });
};


