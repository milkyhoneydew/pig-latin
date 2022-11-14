Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move all first consecutive consonants to the end of the word and add 'ay'."
Code: pigLatin("move");
Expected Output: "ovemay"

Test: "It will move q and u to the end of the word if they are the first consonants."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will not move q or u if there is another consonant beginning the word."
Code: pigLatin("squeal");
Expected Output: "quealsay"

Test: "It will not recognize y as a vowel."
Code: pigLatin("youth");
Expected Output: "outhyay"

Test: "It will recognize letters regardless of case."
Code: pigLatin("Cat");
Expected Output: "atcay"

Test: "It will ignore words beginning with non-alphabetical characters."
Code: pigLatin("#$cjsk");
Expected Output: "null"