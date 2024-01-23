function ucFirst(str) {
  let result;
  if (str === '') {
    result = '';
  } else if (str.length === 1) {
    result = str[0].toUpperCase();
  } else {
    result = str[0].toUpperCase() + str.slice(1);
  }
  return result;
}
