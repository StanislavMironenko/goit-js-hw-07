import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from "basiclightbox";
// Change code below this line
// ${original}

const galleryImages = document.querySelector(".gallery");
const imageColections = createImagesColection(galleryItems);
galleryImages.insertAdjacentHTML("beforeend",imageColections);

galleryImages.addEventListener('click', onImageClick);

const lightboxConfig = {
  onShow: ()=> {
   document.addEventListener("keydown", onEscButtonPush); 
  },
  onClose: () => {
     document.removeEventListener("keydown", onEscButtonPush);
  }
}
function createImagesColection(items) {

 return  items.map(({preview,description,original }) => {
         return `<div class="gallery__item">
          <a 
          class="gallery__link"
           href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            data-source="${original}" 
            alt="${description}" />
          </a>
        </div>`;


 }
     
).join('')
    
}

function onImageClick(e) {
    
        e.preventDefault();
    if (e.target.nodeName!=='IMG') {
      return;
    }
  const imgModal = e.target.dataset.source;
    
    const instance = basicLightbox.create(
      `
        <img src="${imgModal}" width="800" height="600">
    `,
      lightboxConfig
    );
   
  instance.show();
  
}

  function onEscButtonPush(e) {
    if (e.key !== "Escape") {
      return;
    }
    const modal = document.querySelector(".basicLightbox");
    if (modal) {
      modal.classList.remove("basicLightbox--visible");
      setTimeout(closeLightbox, 500);
    }
  };

function closeLightbox() {
  document.querySelector(".basicLightbox ").remove();
 

}