let counterValue = 0;

const refs = {
  valueEl: document.querySelector("#value"),
  decrementBtnHandler: document.querySelector('[data-action="decrement"]'),
  incrementBtnHandler: document.querySelector('[data-action="increment"]'),
};

const decrementValueBtn = () => {
  counterValue--;
  return (refs.valueEl.textContent = counterValue);
};

const incrementValueBtn = () => {
  counterValue++;
  return (refs.valueEl.textContent = counterValue);
};

refs.decrementBtnHandler.addEventListener("click", decrementValueBtn);
refs.incrementBtnHandler.addEventListener("click", incrementValueBtn);
