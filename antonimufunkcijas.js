/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

var countDownDate, spele;
function sakt() {
    const playerName = document.getElementById("playerName").value;
    if (!playerName.trim()) {
        alert("Lūdzu, ievadiet savu vārdu, lai sāktu spēli!");
        return;
    }
    document.getElementById("input").disabled = false;
    countDownDate = new Date().getTime() + 30000;
    spele = setInterval(skaita, 1000);
    document.getElementById("score").style.display = "block";
    document.getElementById("word").style.display = "block";





}

function skaita() {
    let now = new Date().getTime();

    let distance = countDownDate - now;


    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML = seconds + "s ";


    if (distance < 1) {
        document.getElementById("input").disabled = true;
        clearInterval(spele);
        document.getElementById("demo").innerHTML = "Spēle beigusies! Jūsu rezultāts ir " + score;
        console.log("beigas");
        document.getElementById("score").style.display = "none";
        document.getElementById("word").style.display = "none";
        document.getElementById("confirmButton").style.display = "none";

    }



}




let wordList = [
    {word: "happy", antonym: "sad"},
    {word: "hot", antonym: "cold"},
    {word: "big", antonym: "small"},
    {word: "fast", antonym: "slow"},
    {word: "light", antonym: "heavy"},
    {word: "high", antonym: "low"},
    {word: "rich", antonym: "poor"},
    {word: "thick", antonym: "thin"},
    {word: "empty", antonym: "full"},
    {word: "clean", antonym: "dirty"},
    {word: "deep", antonym: "shallow"},
    {word: "wide", antonym: "narrow"},
    {word: "old", antonym: "young"},
    {word: "strong", antonym: "weak"},
    {word: "noisy", antonym: "quiet"},
    {word: "bright", antonym: "dim"},
    {word: "brave", antonym: "fearful"},
    {word: "calm", antonym: "agitated"},
    {word: "happy", antonym: "sad"},
    {word: "cruel", antonym: "kind"},
    {word: "simple", antonym: "complicated"},
    {word: "beautiful", antonym: "ugly"},
    {word: "victory", antonym: "defeat"}

];

let score = 0;
let currentWordIndex = 0;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function radit() {

    shuffleArray(wordList);
    currentWordIndex = 0;

    document.getElementById("word").textContent = "Vārds: " + wordList[currentWordIndex].word;
    document.getElementById("input").value = "";
}


function checkAntonym() {
    const userAnswer = document.getElementById("input").value.toLowerCase();
    const correctAnswer = wordList[currentWordIndex].antonym.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("scoreValue").textContent = score;
        countDownDate += 5000;
        document.getElementById("input").value = "";
    } else {
        alert("Nepareizi! Pareizā atbilde ir " + correctAnswer);
        document.getElementById("input").value = "";

    }


    currentWordIndex++;
    if (currentWordIndex < wordList.length) {
        document.getElementById("word").textContent = "Vārds: " + wordList[currentWordIndex].word;
    } else {
        alert("Spēle beigusies! Jūsu rezultāts ir " + score);




    }
}


function resetGame() {
    score = 0;
    document.getElementById("scoreValue").textContent = score;

}



function score0() {
    score = 0;
}

function submitResult() {
    const playerName = document.getElementById("playerName").value;
    const playerScore = score;

    // Fetch API to send data to Python script
    fetch('/home/edvardszv/mysite/flask_app.py', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({playerName, playerScore}),
    })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
}

