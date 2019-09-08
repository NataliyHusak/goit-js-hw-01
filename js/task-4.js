"use strict";

const pricePerDroid = 3000;
let credits = 23580;

let droidNumber = prompt("How many Droid you want to bought");

let totalPrice = pricePerDroid * droidNumber;
let remains = credits - totalPrice;

if (droidNumber === null) {
  console.log("Отменено пользователем!");
} else if (credits < totalPrice) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    "Вы купили ",
    droidNumber,
    " дроидов, на счету осталось ",
    remains,
    " кредитов."
  );
}
