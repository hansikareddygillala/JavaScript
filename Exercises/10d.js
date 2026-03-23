function toggleButton(category) {
  const button = document.querySelector(`.${category}-toggle-on`);
  button.classList.toggle(`${category}-toggle-off`);
}
console.log("JS is working");