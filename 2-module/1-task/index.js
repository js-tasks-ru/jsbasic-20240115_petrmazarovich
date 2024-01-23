function sumSalary(salaries) {
  let summ = 0;
  let notAllowedTypes = [NaN, Infinity, -Infinity];
  // let's go over all keys of the object
  for (let i in salaries) {
    if (typeof salaries[i] === 'number' && !(notAllowedTypes.includes(salaries[i]))) {
      summ += salaries[i];
    }
  }
  console.log(summ);
  return summ;
}
