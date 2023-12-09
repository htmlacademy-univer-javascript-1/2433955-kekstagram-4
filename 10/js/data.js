import { createImgUrl, randomInteger } from './util.js';

const COUNT_PHOTO = 25;

const LIKES = {
  MIN: 15,
  MAX: 200
};

const COMMS = {
  MIN: 0,
  MAX: 30
};

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Арсений',
  'Леонид',
  'Михаил',
  'Григорий'
];

const addComment = (index) => ({
  id: index,
  avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
  message: messages[randomInteger(0, messages.length - 1)],
  name: names[randomInteger(0, names.length - 1)]
});

const addComments = () => {
  const comments = [];
  for (let i = 1; i < randomInteger(COMMS.MIN, COMMS.MAX); i++) {
    comments.push(addComment(i));
  }
  return comments;
};

const addPhoto = (i) => ({
  id: i,
  url: createImgUrl(i, 'photos/', '.jpg'),
  description: 'жоская картинка',
  likes: randomInteger(LIKES.MIN, LIKES.MAX),
  comments: addComments()
});

export {COUNT_PHOTO, addPhoto};
