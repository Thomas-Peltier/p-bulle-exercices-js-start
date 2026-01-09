// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
 
/**
 * Determines the text to print on a badge
 *
 * @param {number | null} id id of the employee, or null if they're new hires
 * @param {string} name the name of the employee
 * @param {string | null} department the department or null if they're the owner
 *
 * @returns {string} the text to print on the badge
 */
export function printBadge(id, name, department) {
  //si département null mettre OWNER si vrai mettre le nom en majuscule
  const nomDepartement = department === null ? 'OWNER' : department.toUpperCase()
 
  if (id !== null) {
    return `[${id}] ${name} - ${nomDepartement}`
  } else {
    return `${name} - ${nomDepartement}`
  }
}
 