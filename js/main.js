
let cash = 1000;
const symbols = ["A","B","C","D","E"];

const maximum = document.getElementById('bet-max')
const minimum = document.getElementById('bet-min')

function spin (bet){

    let reel = document.querySelectorAll('.reel');
    let notification = document.getElementById('message');

    //conditional
    if (cash < bet ){
        notification = 'YOU R BROKE';
    }else {
        
        cash -= bet;// cash = cash - bet

        let first = symbols[Math.floor(Math.random() * symbols.length)];
        let second = symbols[Math.floor(Math.random() * symbols.length)];
        let third = symbols[Math.floor(Math.random() * symbols.length)];

        reel[0].innerText = first;
        reel[1].innerText = second;
        reel[2].innerText = third;

        //victor told me so sep.3.2026
        //
        if (first === second && second === third){
            notification.innerText = 'YOU HIT JACKPOT'
            let jackpot = bet*7;
            jackpot += cash;
        }  else {
            notification.innerText = 'YOU LOST'
        } 
        document.getElementById('money-display').innerText = cash;


    }



}

//buttons
maximum.addEventListener('click', function(){spin(50)} );

minimum.addEventListener('click', function(){spin(5)} );