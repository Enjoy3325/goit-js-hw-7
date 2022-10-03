import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');
console.log(galleryItems);
const renderImage = galleryItems
  .map(({ preview, original, description }) => {
    const photo = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    console.log(photo);
    return photo;
  })
  .join('');

divGallery.insertAdjacentElement('afterbegin', renderImage);

divGallery.addEventListener('click', onGalleryClick);
const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);
function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    instance.element().querySelector('img').src = e.target.dataset.source;

    instance.show();
    return;
  }

  divGallery.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
}
