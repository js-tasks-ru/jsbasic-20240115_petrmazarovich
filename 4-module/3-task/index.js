function modifyElement(trNode, tdNode) {
  if (tdNode.getAttribute('data-available') === "true") {
    trNode.classList.add("available");
  } else if (tdNode.getAttribute('data-available') === "false") {
    trNode.classList.add("unavailable");
  } else {
    trNode.hidden = true;
  }
  if (tdNode.innerText === "f") {
    trNode.classList.add("female");
  } else {
    trNode.classList.add("male");
  }
  if (Number(tdNode.innerText) < 18) {
    trNode.style = "text-decoration: line-through";
  }
}


function highlight(table) {
  Array.from(table.querySelectorAll("tr")).forEach((trNode) => Array.from(trNode.children).forEach(tdNode => modifyElement(trNode, tdNode)));
}
