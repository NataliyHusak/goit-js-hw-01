"use strict";

let cost;

let country ;

country = prompt("Enter the country for delivery");

country = country.toLowerCase();

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
};

country = country[0].toUpperCase() + country.slice(1);

if (cost > 0) {
  console.log(`Delivery to ${country} will be cost ${cost} credits`);
}

