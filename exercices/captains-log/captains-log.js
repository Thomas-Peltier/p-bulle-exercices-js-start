// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let shipNumber = "NCC-" + Math.trunc(Math.random()* 9000 + 1000)
  return shipNumber;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let dateStelaire = Math.random()* 1000 + 41000
  return dateStelaire
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let letterPosition = Math.trunc(Math.random()* 10)
  let tab = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]
  let letter = tab[letterPosition]
  return letter
}
