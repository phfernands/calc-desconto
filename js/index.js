import { calculateDiscount } from "./functions.js";

const twentyButton = document.getElementById("discount-20");
const thirtyButton = document.getElementById("discount-30");
const fourtyButton = document.getElementById("discount-40");

twentyButton.addEventListener("click", calculateDiscount);
thirtyButton.addEventListener("click", calculateDiscount);
fourtyButton.addEventListener("click", calculateDiscount);
