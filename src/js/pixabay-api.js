import axios from 'axios';
const API_KEY = '47426000-935f334b470be797f22188feb';
const BASE_URL = 'https://pixabay.com/api/';

export async function servicePhoto(value) {
  const response = await axios(BASE_URL, {
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  console.log(response.data);
  return response.data;
}
