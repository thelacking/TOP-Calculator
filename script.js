let display= document.getElementsByClassName("display")[0];
let displaynumbers = [];
let backnumber;
let lastUsedSymbol;


function ClearDisplay(){    
    display.innerHTML = 0;
    displaynumbers = [0];
    backnumber = undefined;
}

function updateDisplay(){
    if(displaynumbers[0] === 0 & displaynumbers.length > 1) displaynumbers.splice(0, 1);
    display.innerHTML = displaynumbers.join("");
}
//#region 0-9 buttons
function addOne(){
    displaynumbers.push(1);
    updateDisplay();
}
function addTwo(){
    displaynumbers.push(2);
    updateDisplay();
}
function addThree(){
    displaynumbers.push(3);
    updateDisplay();
}
function addFour(){
    displaynumbers.push(4);
    updateDisplay();
}
function addFive(){
    displaynumbers.push(5);
    updateDisplay();
}
function addSix(){
    displaynumbers.push(6);
    updateDisplay();
}
function addSeven(){
    displaynumbers.push(7);
    updateDisplay();
}
function addEight(){
    displaynumbers.push(8);
    updateDisplay();
}
function addNine(){
    displaynumbers.push(9);
    updateDisplay();
}
function addZero(){
    displaynumbers.push(0);
    updateDisplay();
}
//#endregion

function addButton(){
    let joinedNumber = parseInt(displaynumbers.join(""));
    if(backnumber === undefined){
        backnumber = joinedNumber;
    }
    else{
        backnumber += joinedNumber;
    }
    displaynumbers = [0];
    lastUsedSymbol = '+';
    updateDisplay();
}
function subButton(){
    let joinedNumber = parseInt(displaynumbers.join(""));
    if(backnumber === undefined){
        backnumber = joinedNumber;
    }
    else{
        backnumber -= joinedNumber;
    }
    displaynumbers = [0];
    lastUsedSymbol = '-';
    updateDisplay();
}
function MultButton(){
    let joinedNumber = parseInt(displaynumbers.join(""));
    if(backnumber === undefined){
        backnumber = joinedNumber;
    }
    else{
        backnumber = backnumber * joinedNumber;
    }
    displaynumbers = [0];
    lastUsedSymbol = '*';
    updateDisplay();
}
function divButton(){
    let joinedNumber = parseInt(displaynumbers.join(""));
    if(backnumber === undefined){
        backnumber = joinedNumber;
    }
    else{
        backnumber = backnumber / joinedNumber;
    }
    displaynumbers = [0];
    lastUsedSymbol = '/';
    updateDisplay();
}
function equalButton(){
    if(lastUsedSymbol === '+'){
        display.innerHTML = backnumber + parseInt(displaynumbers.join(""))
    }
    if(lastUsedSymbol === '-'){
        display.innerHTML = backnumber - parseInt(displaynumbers.join(""))
    }
    if(lastUsedSymbol === '*'){
        display.innerHTML = backnumber * parseInt(displaynumbers.join(""))
    }
    if(lastUsedSymbol === '/'){
        display.innerHTML = backnumber / parseInt(displaynumbers.join(""))
    }
}
