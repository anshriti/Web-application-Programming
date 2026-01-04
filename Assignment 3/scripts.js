const $num1= $('#num1');
const $num2= $('#num2');
const $operator= $('#symbol');
const $add= $('#btn_add');
const $subtract= $('#btn_sub');
const $multiply= $('#btn_mul')
const $divide= $('#btn_div')
const $result= $('#btn_res');
const $resultDisplay= $('#result');

import {add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv} from './calculator.js';

$add.on('click', (e)=>{
    e.preventDefault();
    $operator.val('+');
})

$subtract.on('click', ()=>{
    $operator.val('-');
})  
$multiply.on('click', ()=>{
    $operator.val('*');
})  
$divide.on('click', ()=>{
    $operator.val('/');
})
$result.on('click', ()=>{
    let x= parseFloat($num1.val());
    let y= parseFloat($num2.val());
    let op= $operator.val();
    let result;

    if(!x && x!==0){
        alert("Please enter a valid first number");
        return;
    }   
    if(!y && y!==0){
        alert("Please enter a valid second number");
        return;
    }
    if(!op){
        alert("Please select an operator");
        return;
    }   
    switch(op){
        case '+': result = funcAdd(x, y); break;
        case '-': result = funcSub(x, y); break;
        case '*': result = funcMul(x, y); break;
        case '/': result = funcDiv(x, y); break;
    }
    $resultDisplay.val(result);

});