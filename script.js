'use strict';


const BillAmount = document.getElementById('bill');
const NumberOfPerson = document.getElementById('person');

let TipEl = document.getElementById('tip');
let TotalEl = document.getElementById('total');

let person_total;
let person_tip;


//function to calculate the tip percentags

function init() {
    document.getElementById('total').innerText = `$0.00`;
    document.getElementById('tip').innerText = `$0.00`;
    BillAmount.value = null;
    NumberOfPerson.value = null;
}

function keys(value) {
    let percentage = parseInt(value);
    let persons = parseInt(NumberOfPerson.value);
    let total = parseInt(BillAmount.value);

    person_total = total / persons;
    person_tip = ((percentage / 100) * total) / persons;

    // console.log(person_total);
    // console.log(person_tip);
    document.getElementById('total').innerText = `$${person_total}`;
    document.getElementById('tip').innerText = `$${person_tip}`;

}


document.querySelector('.customize_btn').addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        let value = document.querySelector('.customize_btn').value;
        keys(value);
    }
})

clear.addEventListener('click', () => {
    init();
})

