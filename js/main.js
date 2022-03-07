// Inizializzo e assegno le variabili per la scelta dell'utente e per inserire elementi nel DOM
const userChoice = document.getElementById(`game-option`);
const gridElement = document.getElementById(`grid`); 

let numberGrids = 0;

// Aggiungo la funzione di click per stampare nel DOM gli elementi in base alla scelta dell'utente
document.getElementById(`play`).addEventListener(`click`, function(){
    document.getElementById(`play`).classList.add(`d-none`);

    createGame();

})

// Aggiungo la funzione di click per resettare tutto il contenuto
document.getElementById(`reset`).addEventListener(`click`, function(){
    gridElement.innerHTML=``;
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

    for (i = 1 ; i < numberGrids + 1 ; i++){
        const createGrid = createNewBox (i);
        gridElement.appendChild(createGrid);
    } 

}


function createNewBox (number){
    let newDiv = document.createElement(`div`);
    newDiv.innerHTML= number;

    if (userChoice.value == `easy`){
        numberGrids = 100;
        newDiv.classList.add(`box`);
    } else if (userChoice.value == `medium`){
        numberGrids = 81;
        newDiv.classList.add(`box-1`);
    } else if (userChoice.value == `hard`){
        numberGrids = 49;
        newDiv.classList.add(`box-2`);
    }

    // Aggiungo la funzione di click per attivare e disattivare la classe box-blue
    newDiv.addEventListener(`click`, function(){
        newDiv.classList.toggle(`box-blue`)
    })

    return newDiv;

} 