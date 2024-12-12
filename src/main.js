import { servicePhoto, serviceNextPhoto } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-search');
const spinner = document.querySelector('.loader');
const gallery = document.querySelector('.image-gallery');
const loadMore = document.querySelector('.load-more-btn');

let page = 1;
let value;

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

  value = event.target.elements.imageQuery.value.trim();
  if (!value) {
    spinner.style.visibility = 'hidden';
    return;
  }
  servicePhoto(value, page)
    .then(photo => {
      gallery.innerHTML = '';
      if (!photo.total) {
        iziToast.show({
          backgroundColor: 'red',
          position: 'topRight',
          messageColor: 'white',
          iconColor: 'white',
          maxWidth: 432,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      console.log(photo);
      gallery.innerHTML = createMarkup(photo.hits);
      galleryBox.refresh();
      form.reset();
    })
    .catch(error => {
      iziToast.error({
        backgroundColor: 'red',
        position: 'topRight',
        messageColor: 'white',
        iconColor: 'white',
        maxWidth: 432,
        message: error.message,
      });
      console.log(error.message);
    })
    .finally(() => {
      spinner.style.visibility = 'hidden';
    });
}
loadMore.addEventListener('click', handleLoadMore);

async function handleLoadMore(event) {
  event.preventDefault();
  page += 1;
  serviceNextPhoto(value, page)
    .then(data => {
      gallery.innerHTML = createMarkup(data.hits);
    })
    .catch(error => {
      iziToast.error({
        backgroundColor: 'red',
        position: 'topRight',
        messageColor: 'white',
        iconColor: 'white',
        maxWidth: 432,
        message: error.message,
      });
      console.log(error.message);
    });
}