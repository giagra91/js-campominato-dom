// Inizializzo e assegno le variabili per la scelta dell'utente e per inserire elementi nel DOM
const userChoice = document.getElementById(`game-option`);
const gridElement = document.getElementById(`grid`); 
let outputPoints = document.getElementById(`points`);
let points = 0;

let numberGrids = 0;

// Aggiungo la funzione di click per stampare nel DOM gli elementi in base alla scelta dell'utente
document.getElementById(`play`).addEventListener(`click`, function(){
    document.getElementById(`play`).classList.add(`d-none`);
    outputPoints.innerHTML=``;
    createGame();
})

// Aggiungo la funzione di click per resettare tutto il contenuto
document.getElementById(`reset`).addEventListener(`click`, function(){
    gridElement.innerHTML=``;
    points = 0;
    outputPoints.innerHTML=``;
    document.getElementById(`play`).classList.remove(`d-none`)
})

function createGame (){
    userChoice.value;

    if (userChoice.value == `easy`){
        numberGrids = 100;
    } else if (userChoice.value == `medium`){
        numberGrids = 81;
    } else if (userChoice.value == `hard`){
        numberGrids = 49;
    }

    const bombs = generateBombNumber(16, numberGrids);
    console.log(bombs)

    for (i = 1 ; i <= numberGrids ; i++){
        let createGrid = createNewBox (i);

        if (!bombs.includes(i)) {
            createGrid.addEventListener(`click`, function(){
                createGrid = createNewBox (i);
                points++;
                outputPoints.innerHTML=`Il tuo punteggio è ${points}`;
                console.log(points);
                checkPoints = false;
            })
        } else {
            createGrid.addEventListener(`click`, function(){
                createGrid.classList.add(`box-red`);
                outputPoints.innerHTML=`Mi dispiace hai perso, il tuo punteggio è ${points}`;
                createGrid.setAttribute('disabled', 'disabled');
                checkPoints = true;
            })
        }
            
        gridElement.appendChild(createGrid);
        }
    } 

// Creo una funzione per creare un nuovo div
function createNewBox (number){
    let newDiv = document.createElement(`div`);
    newDiv.innerHTML= number;

    // ciclo per assegnare la classe al div in base alla scelta dell'utente
    if (userChoice.value == `easy`){
        newDiv.classList.add(`box`, `box-tenth`);
    } else if (userChoice.value == `medium`){
        newDiv.classList.add( `box`, `box-nineth`);
    } else if (userChoice.value == `hard`){
        newDiv.classList.add(`box`, `box-seventh`);
    }

    // Aggiungo la funzione di click per attivare e disattivare la classe box-blue
    newDiv.addEventListener(`click`, function(){
        newDiv.classList.add(`box-blue`)
    })
    return newDiv;
} 

// Funzione per creare le bombe in base alla scelta dell'utente
function generateBombNumber(bombs, gridsNumber) {
    const BombNumber = [];
    for (i = 0; i < bombs; i++){
        BombNumber.push(generateUniqueRandomNumber(BombNumber, 1, gridsNumber));
    }
    return BombNumber;
}

function generateUniqueRandomNumber( numsBlacklist, minimumValue, maximumValue){
    // mi creo una variabile inizializzata a false, che mi controlla se ho generato un numero
    // valido oppure no
    let check = false;
    let randomInt;

    // creo un ciclo che continua finché non ho trovato un numero valido (assente in blacklist)
    while ( !check ){
        //  genero randomicamente un numero intero tra il min e il max passati come argomenti
        randomInt  = ( Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));;
        // se il numero non è presente nella blacklist allora
        if ( !numsBlacklist.includes(randomInt)  ){
            // informo il resto della funzione che il numero è stato trovato ed è valido
            // ==> esco dal ciclo while
            check = true;
        }
    }

    // restituisco il numero valido che ho trovato
    return randomInt;
}