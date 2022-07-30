import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImages = document.querySelector(".gallery");
const imageColections = createImagesColection(galleryItems);
galleryImages.insertAdjacentHTML("beforeend", imageColections);

function createImagesColection(items) {
  return items
    .map(({ preview, description, original }) => {
        return `<a class="gallery__item"
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
</a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
