/*function toggleButton(category) {
  let button;
  button.classList.toggle(`gaming-toggle-off`);
  button.classList.toggle(`music-toggle-off`);
  button.classList.toggle(`tech-toggle-off`);

  button = document.querySelector(`.${category}-toggle-on`);
  button.classList.toggle(`${category}-toggle-off`);
}
console.log("JS is working");


function toggleButton(category) {
  const button = document.querySelector(`.${category}-toggle-on`);
  button.classList.toggle(`${category}-toggle-off`);
}
console.log("JS is working");


function toggleButton(category) {

  if (category === 'gaming') {
    button.classList.toggle('music-toggle-off');
    button.classList.toggle('tech-toggle-off');
  } else if (category === 'music') {
    button.classList.toggle('gaming-toggle-off');
    button.classList.toggle('tech-toggle-off');
  } else if (category === 'tech') {
    button.classList.toggle('gaming-toggle-off');
    button.classList.toggle('music-toggle-off');
  }


  const button = document.querySelector(`.${category}-toggle-on`);
  button.classList.toggle(`${category}-toggle-off`);
  
}
console.log("JS is working");
*/

function toggleButton(category) {

  // 1. Turn OFF all buttons
  const allButtons = document.querySelectorAll('button');

  allButtons.forEach(btn => {
    btn.classList.remove('gaming-toggle-off');
    btn.classList.remove('music-toggle-off');
    btn.classList.remove('tech-toggle-off');
  });

  // 2. Turn ON only clicked button
  const button = document.querySelector(`.${category}-toggle-on`);
  button.classList.add(`${category}-toggle-off`);
}