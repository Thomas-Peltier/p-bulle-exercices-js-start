//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  let pOrbital = [0.2408467, 0.61519726, 1.0, 1.8808158, 11.862615, 29.447498, 84.016846, 164.79132]
  
  if (planet === "mercury"){

   return Number((ageInSeconds / (365.25 * pOrbital[0] * 60 * 60 * 24)).toFixed(2))
     
  }
  else if (planet === "venus"){
   return Number((ageInSeconds / (365.25 * pOrbital[1] * 60 * 60 * 24)).toFixed(2))

  }
  else if (planet === "earth"){
   return Number((ageInSeconds / (365.25 * pOrbital[2] * 60 * 60 * 24)).toFixed(2))

  }
  else if (planet === "mars"){
   return Number((ageInSeconds / (365.25 * pOrbital[3] * 60 * 60 * 24)).toFixed(2))

  }
  else if (planet === "jupiter"){
   return Number((ageInSeconds / (365.25 * pOrbital[4] * 60 * 60 * 24)).toFixed(2))

  }
  else if (planet === "saturn"){
   return Number((ageInSeconds / (365.25 * pOrbital[5] * 60 * 60 * 24)).toFixed(2))

  }
  else if (planet === "uranus"){
   return Number((ageInSeconds / (365.25 * pOrbital[6] * 60 * 60 * 24)).toFixed(2))

  }
  else if (planet === "neptune"){
   return Number((ageInSeconds / (365.25 * pOrbital[7] * 60 * 60 * 24)).toFixed(2))

  }
  else if (planet === "Sun"){
   throw new Error("not a planet");
   

  }

  
};
