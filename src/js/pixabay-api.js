import axios from 'axios';
const API_KEY = '47426000-935f334b470be797f22188feb';
const BASE_URL = 'https://pixabay.com/api/';

export async function servicePhoto(value, page) {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 3,
    },
  });

  console.log(response.data);
  return response.data;
}

export async function serviceNextPhoto(value, page) {
  //   page += 1;
  const nextPage = await servicePhoto(value, page);
  console.log(nextPage);
  return nextPage;
}
