/// <reference path="./global.d.ts" />
//
// @ts-check
 
/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let PrixDeBase = 0
  switch (pizza) {
    case 'Margherita':
      PrixDeBase = 7
      break
    case 'Caprese':
      PrixDeBase = 9
      break
    case 'Formaggio':
      PrixDeBase = 10
      break
    default:
      throw new Error(`Unknown pizza: ${pizza}`)
  }
//parcoure le tab extras et ajoute le prix
  let prixExtra = 0
  for (const extra of extras) {
    switch (extra) {
      case 'ExtraSauce':
        prixExtra += 1
        break
      case 'ExtraToppings':
        prixExtra += 2
        break
      default:
        throw new Error(`Unknown extra: ${extra}`);
    }
  }
 
  return PrixDeBase + prixExtra;
}
 
/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  //parcoure le tab pizzaOrders utilise la fonction pizzaPrice pour faire calcule prix et décomp le tab extra
  let total = 0
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras)
  }
  return total
}