//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 
export const hey = (message) => {
 
  const messageClaire = message.trim()
  const testLettre = /([A-Za-z])/.test(messageClaire)

  if (testLettre && messageClaire === messageClaire.toUpperCase() && messageClaire.endsWith("?")){
    return "Calm down, I know what I'm doing!"
 
  }
  else if(testLettre && messageClaire === messageClaire.toUpperCase()){
    return "Whoa, chill out!"
  }
  else if(messageClaire.endsWith("?")){
    return "Sure."
  }
  else if(messageClaire === "" ){
    return "Fine. Be that way!"
  }
  else {
    return "Whatever."
  }
};
 