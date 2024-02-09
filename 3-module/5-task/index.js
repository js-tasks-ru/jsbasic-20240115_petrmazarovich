function getMinMax(str) {
  let result = str.split(' ')
    .filter((substr) => {
      if (Number(substr)) {
        return substr;
      }
    })
    .map((substr) => Number(substr))
    .sort((a, b) => a - b);
  return {min: result[0], max: result[result.length - 1]};
}

