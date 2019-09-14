"use strict";

const total = 100;
let ordered = prompt ("Введите необходимое количество товаров");

const message1 = "На складе недостаточно твоаров!";
const message2 = "Заказ оформлен, с вами свяжется менеджер";


if (total > ordered) {
  console.log(message2);
} else console.log(message1);
