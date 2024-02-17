function toggleText() {
  const element = document.querySelector('.toggle-text-button');
  element.addEventListener('click', () => {
    const text = document.querySelector('#text');
    text.hidden = !text.hidden;
  });
}
