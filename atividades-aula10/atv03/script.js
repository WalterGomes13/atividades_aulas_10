const input = document.getElementById('input');
const botaoAdd = document.getElementById('add');
const botaoSum = document.getElementById('somar');
const numeros = document.getElementById('numeros');
const soma = document.getElementById('soma');
let array = [];

botaoAdd.addEventListener('click',(e)=>{
  e.preventDefault();
  const number = input.value;
  if(number!=''){
    array.push(number);
    numeros.innerText = `Os números são ${array}`;
    input.value = '';
    soma.innerText = '';
  } else{
    alert('Campo em Branco');
  }
})

botaoSum.addEventListener('click',(e)=>{
  e.preventDefault();
  let sum = 0;
  for(numero of array){
    sum+=parseFloat(numero);
  }
  soma.innerText = `A soma dos números é : ${sum}`;
  array = [];
})