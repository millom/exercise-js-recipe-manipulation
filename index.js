// ########## 1 ##########

console.log("< 1 >");
let recipeNameTag = document.querySelector(".logo-text");
let recipeName = recipeNameTag.innerText;
console.log(recipeName); // NIKLAS SMASKISRECEPT
console.log("");

// ########## 2 ##########

console.log("< 2 >");
console.log(recipeNameTag); // <p class="logo-text">Niklas smaskisrecept</p>
console.log("");

// ########## 3 ##########

console.log("< 3 >");
let descriptionTag = document.querySelector(".description");
// console.log(descriptionTag);
const fontSize = window.getComputedStyle(descriptionTag).fontSize;
console.log(fontSize); // 16px
console.log("");

// ########## 4 ##########

console.log("< 4 >");
let imageContainerTag = document.querySelector(".image-container");
let imageTag = document.querySelector("img");
// console.log(imageTag);
let altAttributeValue = imageTag.getAttribute("alt");
console.log(altAttributeValue); // Slice of Frozen Cheescake
console.log("");

// ########## 5 ##########

console.log("< 5 >");
const computedStyle = window.getComputedStyle(imageTag, null);
const url = imageTag.getAttribute("src");
const imageObj = {
  url: imageTag.src,
  height: imageTag.height,
  width: imageTag.width,
};
console.log(imageObj);
// {
//   "url": "http://127.0.0.1:5500/assets/frozen-cheesecake-slice.jpg",
//   "height": 967,
//   "width": 752
// }
console.log("");

// ########## 6 ##########

console.log("< 6 >");
const ingredients = document.querySelector(".ingredients-container");
console.log(ingredients.children.length); // 5
console.log("");

// ########## 7 ##########
console.log("< 7 >");

console.log(ingredients.children[3]); // <li>3dl vispgrädde</li>
console.log("");

// ########## 8 ##########
console.log("< 8 >");

const instructions = document.querySelector(".instructions-list").children;
// console.log(instructions);

const instructionArray = [];
for (let i = 0; i < instructions.length; i++) {
  instructionArray.push({
    order: i + 1,
    text: instructions[i].innerText,
  });
}

console.log(instructionArray);
console.log("");
