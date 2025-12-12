//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 
export const hey = (message) => {
 
  const vide = message.trim()
  const pattern = /([A-Za-z])/.test(vide)

  if (pattern && vide === vide.toUpperCase() && vide.endsWith("?")){
    return "Calm down, I know what I'm doing!"
 
  }
  else if(pattern && vide === vide.toUpperCase()){
    return "Whoa, chill out!"
  }
  else if(vide.endsWith("?")){
    return "Sure."
  }
  else if(vide === "" ){
    return "Fine. Be that way!"
  }
  else {
    return "Whatever."
  }
};
 