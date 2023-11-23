import {COUNT_PHOTO , addPhoto} from './data.js';

const photos = [];

for (let i = 1; i <= COUNT_PHOTO; i++) {
  photos.push(addPhoto(i));
}

// = Array.from({length: COUNT_PHOTO}, addPhoto);

import {renderPhotos} from './pictures.js';
renderPhotos(photos);


