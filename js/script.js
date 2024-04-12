// generating the random number
// random number chahi 0 and 1 ko bichma hunchh and 0.38473 yeslai nai kunai number le multiply garda
// mulitply gare pachhi +1 add garema axact auchha
const randomNum = Math.floor(Math.random() * 20) + 1;///Math.floor bhaneko 1.34 point pachiko number nadekhaune
console.log(randomNum);

let score = 20;

let btnSubmit = document.querySelector(".btn-submit");
let message = document.querySelector(".box__message");
let score1 = document.querySelector(".box__span");

btnSubmit.addEventListener("click", function(){
    let guessNum = Number(document.querySelector("#guessNumber").value);
    let inputField = document.querySelector("#guessNumber");
    if (randomNum === guessNum) {
        message.textContent = "congratulation your guess is right"
    } else {
        if (randomNum < guessNum){
            message.textContent = "your guess is high";
        } else {
            message.textContent = "your guess is low";
        }
        score--;
        if(score === 0){
            inputField.disabled = true;
            btnSubmit.disabled = true;
            message.textContent = `you are lose your random numner is ${randomNum}`;
        }
        score1.textContent = score;
    }
});