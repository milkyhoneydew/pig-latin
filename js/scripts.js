function firstLetter(text) {
  let first = text.slice(0, 1).toLowerCase();
  return first;
}

function isVowel(letter) {
  let first = letter;
  if (first === 'a' || first === 'e'|| first === 'i' || first === 'o' || first === 'u') {
    return true;
  } else {
    return false;
  }
}

function pigLatin(text) {
  let firstLet = firstLetter(text);
  if (isVowel(firstLet)) {
    let vowelPigWord = text + 'way';
    return vowelPigWord;
  } else if (firstLet === 'q') {
    let qWord = text.slice(2) + 'qu' + 'ay';
    return qWord;
  } else {
    let placeholder = 0;
    for (i=0; i < text.length; i++) {
      if (isVowel(text[i].toLowerCase()) || text[i].toLowerCase() === "q") {
        placeholder = i;
        break;
      } 
    }
    let constantWord = text.slice(placeholder);
    let constantPigWord = constantWord + text.slice(0, placeholder) + "ay";
    return constantPigWord;
  } 
}

 


