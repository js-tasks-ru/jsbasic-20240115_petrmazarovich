function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  for (let friend of friends) {
    // Create a li element for each friend
    let li = document.createElement("li");
    // Set the text content of the li element to the friend's name
    li.textContent = friend.firstName + " " + friend.lastName;
    // Append the li element to the ul element
    ul.appendChild(li);
  }
  return ul;
}
