import {COUNT_PHOTO , addPhoto} from './data.js';
const photos = Array.from({length: COUNT_PHOTO}, addPhoto);

import {renderPhotos} from './pictures.js';
renderPhotos(photos);

