

const form = document.querySelector('.inputting');

const tip = document.querySelector('.tip-amount');
const total = document.querySelector('.total');
const button = document.querySelectorAll('.button');
const custom = document.querySelector('#custom');
const customNumber = document.querySelector('.customNumber');
const reset = document.querySelector('.reset');


const slideContainer = document.querySelector('.slidecontainer');
const numberShower = document.querySelector('.numberShower')
const slider = document.querySelector('.slider')



    button.forEach(butt => {
        butt.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('.orange').classList.remove("orange");
    butt.classList.add("orange");


    let content = butt.innerHTML;
 console.log(butt.innerHTML)



 let totalNumber = form.inputNumber.value;
 let tipPerPerson = form.person.value;


 if(content === '5%'){
    tip.innerHTML = ((totalNumber * butt.value) / tipPerPerson).toFixed(1) ;
}

if(content === '10%'){
    tip.innerHTML = ((totalNumber *  butt.value) / tipPerPerson).toFixed(1) ;
}

if(content === '15%'){
    tip.innerHTML = ((totalNumber *  butt.value) / tipPerPerson).toFixed(1) ;
}

if(content === '25%'){
    tip.innerHTML = ((totalNumber * butt.value) / tipPerPerson).toFixed(1) ;
}

if(content === '50%'){
    tip.innerHTML = ((totalNumber * butt.value) / tipPerPerson).toFixed(1) ;
}

if(content === '0%'){
    tip.innerHTML = 0;
}



//CUSTOM BUTTON WITH SLIDE 


})

   

        


    });



//KEY PRESS

    
form.addEventListener('keyup', e => {
    e.preventDefault();

    total.innerHTML = form.inputNumber.value;
    let totalNumber = form.inputNumber.value
    let tipPerPerson = form.person.value;
  
        tip.innerHTML = (totalNumber*0.05/tipPerPerson).toFixed(1);
     
    });


    //RESET BUTTON
    
reset.addEventListener('click', e => {
    e.preventDefault();


var tip = document.querySelector('.tip-amount');
var total = document.querySelector('.total');
var button = document.querySelectorAll('.button');

var totalNumber = form.inputNumber;
var tipPerPerson = form.person;

tip.innerHTML = '0.00';
total.innerHTML = '0.00';
button.innerHTML = '0.00';
totalNumber.value = 0;
tipPerPerson.value = 0;


});




