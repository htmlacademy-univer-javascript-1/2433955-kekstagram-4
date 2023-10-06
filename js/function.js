// 1 функция
const len = (str, maxLen) => str.length <= maxLen;

len('проверяемая строка', 20);

// 2 функция
// eslint-disable-next-line no-unused-vars
const isPalindrom = (str) => {
  str = str.replaceAll(' ', '').toLowerCase();
  const leng = str.length - 1;
  let reversedString = '';
  for (let i = leng; i >= 0; i--) {
    reversedString += str[i];
  }
  if (str === reversedString) {
    return true;
  }
  return false;
};

isPalindrom('топот');

// 3 функция
const toNumber = (str) => {
  if (typeof str === Number) {
    return str;
  }
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const currentCharacter = parseInt(str[i], 10);
    if (!isNaN(currentCharacter)) {
      result += currentCharacter;
    }
  }
  return result;
};

toNumber('2023 год');

