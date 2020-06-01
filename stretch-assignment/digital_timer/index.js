const msTen = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const secOnes = document.querySelector('#secondOnes');
const secTens = document.querySelector('#secondTens');
const digit = document.querySelector('.digits');

// Variables
let count = 1;
let zero = 1;
let one = 1;
let ten = 1;
// Intervals
var toTen = setInterval(tens, 10);

// To stop the interval counter
function stop() {
    digit.style.color = "red";
    clearInterval(toTen);
}


// Timer is 10ms increments
function tens(){
    if(zero === 10){
        zero = 0;
        msTen.innerHTML = zero;
        zero += 1; 
        hundreds();
   }else{
    msTen.innerHTML = zero;
    zero += 1; 
   }    
}

// Timer in 100ms increments
function hundreds(){
    if(count === 10){
        count = 0;
        msHundreds.innerHTML = count;
        count += 1; 
        ones();
   }else{
    msHundreds.innerHTML = count;
    count += 1; 
   }    
}

// Timer by the second
function ones(){
    if(one === 10){
        one = 0;
        secOnes.innerHTML = one;
        one += 1; 
        secTens.innerHTML = 1;
        stop();
   }else{
    secOnes.innerHTML = one;
    one += 1; 
   }    
}


