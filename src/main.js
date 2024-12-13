import { servicePhoto } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-search');
const spinner = document.querySelector('.loader');
const gallery = document.querySelector('.image-gallery');
const loadMore = document.querySelector('.load-more-btn');

let page = 10;
let value;
let per_page = 3;

form.addEventListener('submit', handleSubmit);
spinner.style.visibility = 'hidden';
loadMore.style.visibility = 'hidden';

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
  servicePhoto(value, page, per_page)
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
        loadMore.style.visibility = 'hidden';
        return;
      }
      console.log(photo);
      gallery.innerHTML = createMarkup(photo.hits);
      loadMore.style.visibility = 'visible';
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
      loadMore.style.visibility = 'hidden';
    })
    .finally(() => {
      spinner.style.visibility = 'hidden';
    });
}
loadMore.addEventListener('click', handleLoadMore);

async function handleLoadMore(event) {
  event.preventDefault();
  page += 1;
  servicePhoto(value, page, per_page)
    .then(data => {
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      const card = document.querySelector('.photo-item');
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight,
        behavior: 'smooth',
      });

      const allPages = Math.ceil(data.totalHits / per_page);
      if (page === allPages) {
        loadMore.style.visibility = 'hidden';
        iziToast.show({
          backgroundColor: 'blue',
          position: 'topRight',
          messageColor: 'white',
          iconColor: 'white',
          maxWidth: 432,
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
      console.log(allPages);
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
