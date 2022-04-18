const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientItemElements = ingredients.map((elements) => {
  const itemsElements = document.createElement("li");
  itemsElements.textContent = elements;
  itemsElements.classList.add("item");

  return itemsElements;
});

const ingredientListElements = document
  .querySelector("#ingredients")
  .append(...ingredientItemElements);
