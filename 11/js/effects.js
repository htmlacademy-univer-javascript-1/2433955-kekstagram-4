
const DEFAULT_EFFECT_LEVEL = 100;
const RADIX = 10;
const EFFECTS_STEP = 0.01;
const MAX_BLUR_VALUE = 3;
const MAX_BRIGHTNESS = 3;

const Slider = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
};

const uploadForm = document.querySelector('.img-upload__form');
const effectsList = uploadForm.querySelector('.effects__list');
const imagePreview = uploadForm.querySelector('.img-upload__preview');
const sliderUpload = uploadForm.querySelector('.img-upload__effect-level');
const effectsLevelValue = uploadForm.querySelector('.effect-level__value');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const image = imagePreview.querySelector('img');

effectsLevelValue.value = DEFAULT_EFFECT_LEVEL;
let currentEffect = '';

sliderUpload.classList.add('visually-hidden');

const effects = {
  none: () => {
    sliderUpload.classList.add('visually-hidden');
    return 'none';
  },

  chrome: () => {
    sliderElement.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectsLevelValue.value, RADIX) * EFFECTS_STEP})`;
  },

  sepia: () => {
    sliderElement.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectsLevelValue.value, RADIX) * EFFECTS_STEP})`;
  },

  marvin: () => {
    sliderElement.classList.remove('visually-hidden');
    return `invert(${Math.floor(effectsLevelValue.value)}%)`;
  },

  phobos: () => {
    sliderElement.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectsLevelValue.value, RADIX) * MAX_BLUR_VALUE) * EFFECTS_STEP}px)`;
  },

  heat: () => {
    sliderElement.classList.remove('visually-hidden');
    return `brightness(${(parseInt(effectsLevelValue.value, RADIX) * MAX_BRIGHTNESS) * EFFECTS_STEP})`;
  },
};

const onEffectsListClick = (evt) => {
  let target = evt.target;

  if (target.classList.contains('effects__label')) {
    target = evt.target.querySelector('span');
  }

  if (target.classList.contains('effects__preview')) {
    if (currentEffect !== '') {
      image.classList.remove(currentEffect);
    }

    sliderElement.noUiSlider.set(Slider.MAX);
    effectsLevelValue.value = Slider.MAX;

    currentEffect = target.classList[1];
    image.classList.add(currentEffect);
    image.style.filter = effects[currentEffect.replace('effect__preview--', '')]();
  }
};

effectsList.addEventListener('click', onEffectsListClick);

noUiSlider.create(sliderElement, {
  range: {
    min: Slider.MIN,
    max: Slider.MIN,
  },
  start: Slider.MAX,
  step: Slider.STEP,
  connect: 'lower',
});

sliderElement.noUiSlider.on('change', () => {
  effectsLevelValue.value = sliderElement.noUiSlider.get();

  image.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
});

export {image, effects};
