function factorial(n) {
  let result = 1;
  do {
    result = result * n;
    n = n - 1;
  } while (n !== 1);
  return result;
}
