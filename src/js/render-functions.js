export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        `
<li class="photo-item">
        <a class="photo-link" href="${largeImageURL}" >
        <img class="photo-img" src=${webformatURL} alt="${tags}"/>
       </a> 

       <div class="photo-info-container">
          <div class="photo-info-item">
          <span class="photo-info-label">Likes</span>
          <span class="photo-info-value">${likes}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Views</span>
          <span class="photo-info-value">${views}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Comments</span>
          <span class="photo-info-value">${comments}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Downloads</span>
          <span class="photo-info-value">${downloads}</span>
          </div>
       </div>
       </li>        `;
      }
    )
    .join();
}
