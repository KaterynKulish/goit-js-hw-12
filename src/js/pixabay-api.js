import axios from 'axios';
const API_KEY = '47426000-935f334b470be797f22188feb';
const BASE_URL = 'https://pixabay.com/api/';

export async function servicePhoto(value, page, per_page) {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });
  // const allPages = Math.ceil(photo.totalHits / per_page);
  return response.data;
}
