/*
1-take first number from button
to step 5
2-take operator
to step 5
3-take second number from button
to step 5
4-take = from button
5-display on screen result
6-store in object
7-store object in local storage
*/
//storing the value of number 1 and number 2

let calculation=localStorage.getItem('store')||'';

function update(value){
    calculation+=value;
    store(calculation);
    display();
}

function display(){
let screen=document.querySelector('.screen');
screen.innerHTML=`${calculation}`;
}

function store(store){
    let tostring=JSON.stringify(store);
    localStorage.setItem('store',tostring);


}

function remove(){
       console.log('working');
    calculation='';
    localStorage.removeItem('store');
     display();
}


function answer(){
     let evaluat=eval(calculation);
    calculation=evaluat;
    store(calculation);
    display();
}


display();