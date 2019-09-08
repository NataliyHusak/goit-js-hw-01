"use strict";

let cost;

let country = prompt("Enter the country for delivery");

switch (country) {
  case "china":
    cost = 100;
    break;

  case "chile":
    cost = 250;
    break;

  case "australia":
    cost = 170;
    break;

  case "india":
    cost = 80;
    break;

  case "jamaica":
    cost = 120;
    break;

  default:
    alert("Delivery is not available in your country.");
}

console.log("Delivery to ", country, " will be cost ", cost, " credits");
