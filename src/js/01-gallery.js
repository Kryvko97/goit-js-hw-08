import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery')
const itemsMarkup = createGalleryImagesMarkup (galleryItems)

// Створюємо галерею картинок з масиву обєктів
function createGalleryImagesMarkup (galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
  `;
  })
  .join('');
  }

gallery.insertAdjacentHTML('beforeend', itemsMarkup)

// Підключаємо бібліотеку Lightbox
// Ставимо підписи на картинки з затримкою показу
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})

