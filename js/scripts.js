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

// function pigLatin(word) {
//   let firstLetter = word.charAt(0);
//   if (letterType(firstLetter) === "vowel") {
//     let temp = "";
//     temp = word + "way";
//     return temp;
//   } else if (letterType(firstLetter) === "q") {
//     let temp = "";
//     temp = word.slice(2) + word.slice(0, 2) + "ay";
//     return temp;
//   } else if (letterType(firstLetter) === "consonant") {
//     let constCounter = 0;
//     for (i = 0; i < word.length; i++) {
//       if (letterType(word.charAt(i)) === "consonant") {
//       } else {
//         constCounter = i;
//         break;
//       }
//     }
//     let temp = "";
//     temp = word.slice(constCounter) + word.slice(0, constCounter) + "ay";
//     return temp;
//   }
