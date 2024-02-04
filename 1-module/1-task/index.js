function factorial(n) {
  let result = 1;
  if (n > 0) {
    do {
      result = result * n;
      n = n - 1;
    } while (n >= 1);
  }
  return result;
}
 
