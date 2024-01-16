function isEmpty(obj) {
  let totalProps = 0;
  for (let i in obj) {
    totalProps += 1;
  }
  return totalProps === 0;
}
