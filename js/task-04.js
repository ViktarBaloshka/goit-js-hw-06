let counterValue = 0;
const value = document.querySelector("#value");
const decrementBtnHandler = document.querySelector('[data-action="decrement"]');
const incrementBtnHandler = document.querySelector('[data-action="increment"]');

const decrementBtnValue = (counterValue) => {
  return (value.textContent = counterValue - 1);
};

decrementBtnHandler.removeEventListener("click", decrementBtnValue);

const incrementBtnValue = (counterValue) => {
  return `${counterValue + 1}`;
};

incrementBtnHandler.addEventListener("click", incrementBtnValue);
