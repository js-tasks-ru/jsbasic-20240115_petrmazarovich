function camelize(str) {
  return str.split('-').map((substr, index) => index > 0 ? substr[0].toUpperCase() + substr.slice(1) : substr).join('');
}
