const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.dataset.length <= event.currentTarget.value.length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
