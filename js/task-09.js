function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bodyColor.textContent = getRandomHexColor();
});
