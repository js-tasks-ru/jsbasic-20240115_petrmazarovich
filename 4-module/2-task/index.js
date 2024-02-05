function checkEquality(str) {
  let arr = str.split(':');
  return arr[0] === arr[1];
}

function makeDiagonalRed(table) {
  Array.from(table.querySelectorAll("td")).forEach((node) => checkEquality(node.innerText) ? node.style.backgroundColor = "red" : {});
}
