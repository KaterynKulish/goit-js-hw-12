import { servicePhoto } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form-search');
const spinner = document.querySelector('.loader');
const gallery = document.querySelector('.image-gallery');

form.addEventListener('submit', handleSubmit);
spinner.style.visibility = 'hidden';

const galleryBox = new SimpleLightbox('.image-gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  captionType: 'attr',
});

async function handleSubmit(event) {
  event.preventDefault();
  spinner.style.visibility = 'visible';

  const value = event.target.elements.imageQuery.value.trim();
  if (!value) {
    spinner.style.visibility = 'hidden';
    return;
  }
  servicePhoto(value)
    .then(photo => {
      console.log(photo);
      gallery.innerHTML = createMarkup(photo.hits);
      galleryBox.refresh();
      form.reset();
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      spinner.style.visibility = 'hidden';
    });
}
