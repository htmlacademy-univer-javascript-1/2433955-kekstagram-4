import { isEscKey } from './util.js';

const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const pictureCloseBtn = document.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsCountainer = bigPicture.querySelector('.social__comment-count');
//const socialCommentsCount = bigPicture.querySelector('.comments-count');
const loadComments = bigPicture.querySelector('.comments-loader');
const socialFooterText = bigPicture.querySelector('.social__footer-text');

let commentsCount = COMMENTS_STEP;
let currentComments = [];

const renderComments = () => {

  socialComments.innerHTML = '';

  commentsCount = (commentsCount > currentComments.length) ? currentComments.length : commentsCount;

  const commentsSelected = currentComments.slice(0, commentsCount);

  if (currentComments.length <= COMMENTS_STEP || commentsCount >= currentComments.length) {
    loadComments.classList.add('hidden');
  } else {
    loadComments.classList.remove('hidden');
  }

  commentsCountainer.textContent = `${commentsCount} из ${currentComments.length} комментариев`;

  const commentFragment = document.createDocumentFragment();

  commentsSelected.forEach((comment) => {
    const newComment = document.createElement('li');
    const imgComment = document.createElement('img');
    const textComment = document.createElement('p');

    newComment.classList.add('social__comment');
    imgComment.classList.add('social--picture');
    textComment.classList.add('social__text');

    imgComment.src = comment.avatar;
    imgComment.alt = comment.name;
    textComment.textContent = comment.message;

    newComment.appendChild(imgComment);
    newComment.appendChild(textComment);

    commentFragment.appendChild(newComment);
  });

  socialComments.appendChild(commentFragment);
};

const onLoadCommentsButtonClick = () => {
  commentsCount += COMMENTS_STEP;
  renderComments();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  commentsCount = COMMENTS_STEP;
  currentComments = [];
  socialFooterText.value = '';
};

const onBigPictureEscKeyDown = (evt) => {
  if(isEscKey(evt)){
    closeBigPicture();

    document.removeEventListener('keydown', onBigPictureEscKeyDown);
    loadComments.removeEventListener('click', onLoadCommentsButtonClick);
  }
};

const onCloseBigPictureClick = () => {
  closeBigPicture();

  pictureCloseBtn.removeEventListener('click', onCloseBigPictureClick);
};

const showBigPicture = (picture) => {
  const {url, comments, likes, description} = picture;

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = url;
  likesCount.textContent = likes;
  pictureDescription.textContent = description;

  currentComments = comments.slice();

  renderComments();

  loadComments.addEventListener('click', onLoadCommentsButtonClick);

  document.addEventListener('keydown', onBigPictureEscKeyDown);
  pictureCloseBtn.addEventListener('click', onCloseBigPictureClick);
};

export {showBigPicture};
