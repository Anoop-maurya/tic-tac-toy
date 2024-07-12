let name1 = prompt("Enter first player name ");
let name2 = prompt("Enter second player name ");
let player1 = document.querySelector("#player-1st");
let player2 = document.querySelector("#player-2nd");
let box = document.querySelectorAll(".div2 .box");
// console.log(box[0]);

const div2 = document.querySelector(".div2");

const win = document.querySelector(".gameStatus");
const startAgain = document.querySelector(".startAgain");

name1 = name1.split(" ");
name2 = name2.split(" ");

player1.innerText = name1[0].toUpperCase();
player2.innerText = name2[0].toUpperCase();

let sign1 = document.querySelector("#sign1");
let sign2 = document.querySelector("#sign2");

let value = Math.floor(Math.random() * 2);
if (value == 0) {
    sign1.innerHTML = "o";
    sign2.innerHTML = "x";
}
else {
    sign1.innerHTML = "x";
    sign2.innerHTML = "o";
}
const arr1 = {};
const arr2 = {};
const arr3 = {};

const playerArr = [arr1, arr2, arr3];
let count = 0;
div2.addEventListener("click", (e) => {
    if (count % 2 == 0) {
        if (e.target.innerText == "") {
            e.target.innerText = sign1.innerText;
            switch (e.target.classList[1]) {
                case "1": arr1.value1 = sign1.innerText;
                    break;
                case "2": arr1.value2 = sign1.innerText;
                    break;
                case "3": arr1.value3 = sign1.innerText;
                    break;
                case "4": arr2.value1 = sign1.innerText;
                    break;
                case "5": arr2.value2 = sign1.innerText;
                    break;
                case "6": arr2.value3 = sign1.innerText;
                    break;
                case "7": arr3.value1 = sign1.innerText;
                    break;
                case "8": arr3.value2 = sign1.innerText;
                    break;
                case "9": arr3.value3 = sign1.innerText;
                    break;
            }
            count++;
        }
    }
    else {
        if (e.target.innerText == "") {
            e.target.innerText = sign2.innerText;
            switch (e.target.classList[1]) {
                case "1": arr1.value1 = sign2.innerText;
                    break;
                case "2": arr1.value2 = sign2.innerText;
                    break;
                case "3": arr1.value3 = sign2.innerText;
                    break;
                case "4": arr2.value1 = sign2.innerText;
                    break;
                case "5": arr2.value2 = sign2.innerText;
                    break;
                case "6": arr2.value3 = sign2.innerText;
                    break;
                case "7": arr3.value1 = sign2.innerText;
                    break;
                case "8": arr3.value2 = sign2.innerText;
                    break;
                case "9": arr3.value3 = sign2.innerText;
                    break;
            }
            count++;
        }
    }

    let winPlayer1 = "";
    let winPlayer2 = "";

    // horizental win for player 1
    if (arr1.value1 == sign1.innerText && arr1.value2 == sign1.innerText && arr1.value3 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }

    if (arr2.value1 == sign1.innerText && arr2.value2 == sign1.innerText && arr2.value3 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }

    if (arr3.value1 == sign1.innerText && arr3.value2 == sign1.innerText && arr3.value3 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }
    // horizental win for player 2
    if (arr1.value1 == sign2.innerText && arr1.value2 == sign2.innerText && arr1.value3 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    if (arr2.value1 == sign2.innerText && arr2.value2 == sign2.innerText && arr2.value3 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    if (arr3.value1 == sign2.innerText && arr3.value2 == sign2.innerText && arr3.value3 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    // vertical win for player 1

    if (arr1.value1 == sign1.innerText && arr2.value1 == sign1.innerText && arr3.value1 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }

    if (arr1.value2 == sign1.innerText && arr2.value2 == sign1.innerText && arr3.value2 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }

    if (arr1.value3 == sign1.innerText && arr2.value3 == sign1.innerText && arr3.value3 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }

    // vertical win for player 2
    if (arr1.value1 == sign2.innerText && arr2.value1 == sign2.innerText && arr3.value1 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    if (arr1.value2 == sign2.innerText && arr2.value2 == sign2.innerText && arr3.value2 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    if (arr1.value3 == sign2.innerText && arr2.value3 == sign2.innerText && arr3.value3 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    // daigonal win for player 1

    if (arr1.value1 == sign1.innerText && arr2.value2 == sign1.innerText && arr3.value3 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }

    if (arr1.value3 == sign1.innerText && arr2.value2 == sign1.innerText && arr3.value1 == sign1.innerText) {
        winPlayer1 = `${player1.innerText} you win`;
    }

    // daigonal win for player 2
    if (arr1.value1 == sign2.innerText && arr2.value2 == sign2.innerText && arr3.value3 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    if (arr1.value3 == sign2.innerText && arr2.value2 == sign2.innerText && arr3.value1 == sign2.innerText) {
        winPlayer2 = `${player2.innerText} you win`;
    }

    if (winPlayer1 != "") {
        win.innerText = winPlayer1.toUpperCase();
        win.style.zIndex = 1;
        startAgain.style.zIndex = 1;
    }
    if (winPlayer2 != "") {
        win.innerText = winPlayer2.toUpperCase();
        win.style.zIndex = 1;
        startAgain.style.zIndex = 1;
    }

    startAgain.addEventListener("click", () => {
        location.reload();
    })
    const allValueOfArr = [];
    for (let i in arr1) {
        allValueOfArr.push(arr1[i]);
    }

    for (let i in arr2) {
        allValueOfArr.push(arr2[i]);
    }

    for (let i in arr3) {
        allValueOfArr.push(arr3[i]);
    }
    if (allValueOfArr.length == 9) {
        if (winPlayer1 == "" && winPlayer2 == "") {
            win.innerText = "Game Draw";
            win.style.zIndex = 1;
            startAgain.style.zIndex = 1;
        }
    }

})