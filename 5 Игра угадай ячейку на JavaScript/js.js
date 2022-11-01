'use strict'

let mainRows = document.querySelector('.mainRows');

let container = document.querySelector('.container');

let win = document.querySelector('.win');

let btnReload = document.querySelector('.repead');

let btnReload1 = document.querySelector('.repead1');

let body = document.querySelector('body');

let disc = document.querySelector('.disc');

let btnStart = document.querySelector('.start');

let timer = document.querySelector('.timer');

let lost = document.querySelector('.lost');

function getRandomNumbers(){

    let arr = [];

    for(let i=0; i<10; i++){

        arr.push((Math.floor(Math.random() * 100)) )
    }
    
     return arr.sort((a,b)=>a-b);
}

function locationReload(){

    return location.reload()
}


let random = getRandomNumbers();

console.log(random)

let count = 0;

for(let i = 0; i < 100; i++){

    let row = document.createElement('tr');
   
    row.textContent = 'Gues';

    mainRows.appendChild(row);

    row.setAttribute('value',i);

    mainRows.setAttribute('disabled','disabled')

    row.addEventListener('click',function(){

        for(let i of random){

            if(+row.getAttribute('value') === i){
            
            row.classList.add('active');

            }

        }
            
        if(row.classList.contains('active')){

            row.classList.add('succes');
            
            row.textContent = 'Угадал'

            count++;

        }else{

            row.classList.add('error') ;

            row.textContent = 'Мимо'
        }

        
        if(count === 10 || count === 9){
            
            win.classList.add('dis')

            container.classList.add('noActive')

            body.classList.add('dis')

            disc.classList.add('noActive')
   
        }
 
    })

}

btnStart.addEventListener('click',function(){


    mainRows.removeAttribute('disabled')

    let i = 45;

    let id = setInterval(function(){
        
        timer.textContent = i;

        i--;

        if(i < 0){

            lost.classList.add('dis')

            container.classList.add('noActive')

            disc.classList.add('noActive')

            body.classList.add('dis')

            clearInterval(id)

            btnReload1.addEventListener('click',locationReload)

        }
        
    },1000)

})

btnReload.addEventListener('click',locationReload)
