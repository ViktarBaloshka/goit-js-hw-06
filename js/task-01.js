const categoryElements = document.querySelectorAll(".item").length;
console.log("Number of categories: " + `${categoryElements}`);

const categoryItemsElement = document
  .querySelectorAll(".item")
  .forEach((element) => {
    console.log("Category: " + element.querySelector("h2").textContent);
    console.log("Elements: " + element.querySelector("li").firstChild.length);
  });
