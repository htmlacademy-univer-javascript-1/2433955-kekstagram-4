import { showBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img').src = photo.url;
  pictureElement.querySelector('img').alt = photo.description;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;

  const onPictureElementClick = (evt) => {
    evt.preventDefault();
    showBigPicture(photo);
  };

  pictureElement.addEventListener('click', onPictureElementClick);
  fragment.append(pictureElement);
};

const renderPhotos = (photos) => {
  const pictures = document.querySelector('.pictures');

  photos.forEach((photo) => {
    renderPhoto(photo);
  });

  pictures.append(fragment);
};

const removePictures = () => {
  document.querySelectorAll('.picture').forEach((photo) => photo.remove());
};

export{renderPhotos, removePictures};
