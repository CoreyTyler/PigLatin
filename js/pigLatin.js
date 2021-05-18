let detectVowel = (word) => {
    let vowels = "aeiou";

for(let i =0; i < word.length; i++) {
    if(vowels.indexOf(word[i]) !== -1) {
        return i;
    }
}
}

let pigLatin = (word) => {
    let word = word.toLowerCase().trim();

    let firstvowel = detectVowel(word)

    if(firstvowel > 0) {
        return word.slice(firstvowel) + word.slice(0, firstvowel) +
        "ay";
    }
    return word + "yay"
}