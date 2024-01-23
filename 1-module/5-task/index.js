/*Функция должна возвращать:
1. Ту же строку, если усечение не требуется.
2. Усечённую строку, если длина исходной строки больше `maxlength`.
*/
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "…";
  }
}
