let input = document.querySelector("#input");
let inputElement = document.querySelector(".input-element");
let wordList = document.querySelectorAll(".word-list");
let wordListElement = document.querySelector(".word-list-element");
//let addButton = document.querySelector("#timer-button");
let words = document.querySelectorAll(".word");
let total = document.querySelector("#total");
let input2 = document.querySelector("#inputs");




events();


let storageArray = [];
let duzler = 0;
pageLoaded();
function events() {
    input.addEventListener("keyup", filterWords);
    inputElement.addEventListener("submit", addWord);


}
function pageLoaded() {
    checkWordsFromStorage();
    storageArray.forEach(function (words) {
       addToList(words);
    });
}
function addWord(e) {
    let inputWords = input2.value.trim();
    if (inputWords == null || inputWords == "") {
        alert("daxil edilecek bir sey yazin");
    }
    else {
        
        addToList(inputWords);
        addToStorage(inputWords);
    }

    e.preventDefault();
}

function addToList(newWord) {
    let wordListi = document.createElement("li");
    wordListi.className = "word";
    wordListi.textContent = newWord;
        wordListElement.appendChild(wordListi);
        input2.value = "";
    

}

function addToStorage(newWord) {
    checkWordsFromStorage();
    storageArray.push(newWord);
    localStorage.setItem("words",JSON.stringify(storageArray));
}

function checkWordsFromStorage() {
    if (localStorage.getItem("words") === null) {
        storageArray = [];
    }
    else {
        storageArray = JSON.parse(localStorage.getItem("words"));
    }
}

function filterWords(e) {
    let inputWord = e.target.value;
    let wordsList = document.querySelectorAll(".word");
    wordsList.forEach(function (word) {
        if (word.textContent.trim() === inputWord.trim() && inputWord.value != "") {
            word.setAttribute("style", "color:red !important");
            duzler++;
            total.innerHTML = `Total : ${duzler}`;
            input.value = "";
            word.remove();

        }
        else {
            word.setAttribute("style", "color:green");
        }
    });



}



const startingMinutes = 1;
let time = startingMinutes * 60;
let countDownElement = document.querySelector("#countdown");
function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countDownElement.innerHTML = `${minutes} : ${seconds}`;
    time--;
    if (minutes <= 0 && seconds <= 0) {
        let mesaj = "Vaxt Bitdi";
        countDownElement.innerHTML = `${mesaj}`;
        input.remove();

    }



}













