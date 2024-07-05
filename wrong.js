// ########## 1 ##########
console.log("< 1 >");

let logoTag = document.querySelector(".logo-text");
console.log(logoTag);

logoTag.style.color = "#384241";
console.log("");

// ########## 2 ##########
console.log("< 2 >");
let headerTag = document.querySelector("header");
headerTag.style.display = "flex";
headerTag.style.justifyContent = "left";

console.log("Header content moved top the left");
console.log("");

// ########## 3 ##########
console.log("< 3 >");
headerTag.style.borderBottom = "1px solid lightgray";

console.log("Header padding bottom changed");
console.log("");

// ########## 4 ##########
console.log("< 4 >");
let recipeHeaderTag = document.querySelector("#recipe-name");
recipeHeaderTag.innerText = "Frozen Cheescake";

console.log("Header text changed");
console.log("");

// ########## 5 ##########
console.log("< 5 >");
let timeSpanTag = document.querySelector(".time-container").children[0];
timeSpanTag.setAttribute("class", "material-icons");

console.log("Time ican is added");
console.log("");

// ########## 6 ##########
console.log("< 6 >");
let timeTag = document.querySelector(".time");
timeTag.innerText = "60+ min";

console.log("Time chaed to 60+ min");
console.log("");

// ########## 7 ##########
console.log("< 7 >");
let imgTag = document.querySelector(".introduction .image-container img");
console.log(imgTag);
imgTag.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");

console.log("Big image changed");
console.log("");

// ########## 8 ##########
console.log("< 8 >");
let ingredientContainerTag = document.querySelector(".ingredients-container");
ingredientContainerTag.style.backgroundColor = "#f9f9f9";

console.log("Background for Ingridienser is changed");
console.log("");

// ########## 9 ##########
console.log("< 9 >");
let ingredientsListBottomTag = document.querySelector(
  ".ingredients-list-bottom"
);
ingredientsListBottomTag.removeChild(ingredientsListBottomTag.children[0]);
var listItem1 = document.createElement("li");
listItem1.innerText = "15st digistivetex";
ingredientsListBottomTag.appendChild(listItem1);
var listItem2 = document.createElement("li");
listItem2.innerText = "Lite smör";
ingredientsListBottomTag.appendChild(listItem2);

console.log("TExt removed and list items added");
console.log("");

// ########## 10 ##########
console.log("< 10 >");
let ingredientsListPasteTag = document.querySelector(".ingredients-list-paste");
ingredientsListPasteTag.children[2].innerText = "3tsk vaniljsocker";

console.log("The third ingredient is chaned");
console.log("");

// ########## 11 ##########
console.log("< 11 >");
var listItem3 = document.createElement("li");
listItem3.innerText = "400g naturell philadelphiaost";
ingredientsListPasteTag.appendChild(listItem3);

console.log("List item Åhiladelphiaost added to paste list");
console.log("");

// ########## 12 ##########
console.log("< 12 >");
let instructionsHeaderTag = document.querySelector(".instructions.shadow");
// console.log(instructionsHeaderTag);
instructionsHeaderTag.classList.remove("shadow");

console.log("Shadow removed from instructions header");
console.log("");

// ########## 13 ##########
console.log("< 13 >");
let instructionsListTag = document.querySelector(".instructions-list");
instructionsListTag.children[1].innerText =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionsListTag.children[8].innerText = "Ställ in i frysen över natten.";

console.log("The incorrect items in the list are changed");
console.log("");
