"use strict";

const total = 100;
const ordered = 50;

let message1 = "На складе недостаточно твоаров!";
let message2 = "Заказ оформлен, с вами свяжется менеджер";

alert(message1);

if (total > ordered) {
  console.log(message2);
} else console.log(message1);
