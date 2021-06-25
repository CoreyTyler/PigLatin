let detectVowel = (word) => {
    let vowels = "aeiou";

for(let i =0; i < word.length; i++) {
    if(vowels.indexOf(word[i]) !== -1) {
        console.log(i)
        return i;
    }
}
}


let pigLatin = (word) => {
    
    word = word.toLowerCase().trim();

    let firstvowel = detectVowel(word)

    if(firstvowel > 0) {
        return word.slice(firstvowel) + word.slice(0, firstvowel) +
        "ay";
    }
    return word + "yay";

}

let translation = () => {
    let inputBox = document.getElementById("inputElement")

    let englishWord = inputBox.value

    let pigWord = pigLatin(englishWord)

    let displayWord = document.getElementById("outputElement")

    document.querySelector(".display h1").style.display = "none";
    document.querySelector(".display").classList.add("spinner");

    setTimeout(() => {
        document.querySelector(".display").classList.remove("spinner");
        document.querySelector(".display h1").style.display = "block";
    }, 2000)

    displayWord.innerText = pigWord
}

window.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        translation();
    }
})