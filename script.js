/* Oppgave:
Lag en funksjon som generer 2 random tall så lenge tallene er ulike fra hverandre.
Når de er like print ut teksten "Equal numbers found" - samt hvilke tall det ble =)
kan eventuelt også console.log() tallene for hver runde
OBS: Nettleseren er ikke glad i å oppdatere view mens i en while-loop! */

//Modell
let text = '';

//View
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div>${text}</div>
    <button onclick="generate2RandomNumbers()">Generer 2 random tall</button>
    <button onclick="ResetRandomNumbers()">Refresh siden</button>
 
 `;
}

function ResetRandomNumbers() {
    location.reload();
}

//Controller
function generate2RandomNumbers() {
    let number1 = 1;
    let number2 = 2;

    while (number1 != number2) {
        number1 = Math.ceil(Math.random() * 10);
        number2 = Math.ceil(Math.random() * 10);
        console.log(number1);
        console.log(number2);
    }
    if (number1 == number2) {
        text = "Equal numbers found " + number1 + " og " + number2;
    }
    updateView();
}


/* function generate2RandomNumbers() {
    let count = 0;
    while (count < 2) {
        numbers = Math.ceil(Math.random() * 10)
        count++;
    }
    updateView();
} */