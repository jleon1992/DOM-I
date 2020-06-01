const msten = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const secOnes = document.querySelector('#secondOnes');
const secTens = document.querySelector('#secondTens');
const digit = document.querySelector('.digits');


let count = 1;
var zero = 1;
let one = 1;
let ten = 1;


// function hundreds(){
    
//     msHundreds.innerHTML = count;
//     count += 1;
//     if(count === 10){
//         count = 0;
//     }
// };



    
function myTimer(){
    if(zero === 10){
        zero = 0;
        msten.innerHTML = zero;
        zero += 1; 
        hundreds();
   }else{
    msten.innerHTML = zero;
    zero += 1; 
   }    
}

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

function ones(){
    if(one === 10){
        one = 0;
        secOnes.innerHTML = one;
        one += 1; 
        tens();
        stop();

   }else{
    secOnes.innerHTML = one;
    one += 1; 
   }    
}


function tens(){

    secTens.innerHTML = ten;
    ten += 1; 
    
}

  var toTen = setInterval(myTimer, 10);
  function stop() {
      digit.style.color = "red";
    clearInterval(toTen);
  }
