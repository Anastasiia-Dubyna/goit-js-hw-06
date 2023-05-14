const categories = document.querySelectorAll(".item");
const numberOfCategories = categories.length; 
console.log("Number of categories: " + numberOfCategories);

categories.forEach(elem => {
    console.log("Category: " + elem.firstElementChild.textContent);
    console.log("Elements: " + elem.lastElementChild.children.length);
});