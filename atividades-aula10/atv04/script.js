const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const botao = document.getElementById('botao');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');

botao.addEventListener('click',(e)=>{
  e.preventDefault();
  const peso = inputPeso.value;
  const altura = inputAltura.value;
  let imc = parseFloat(peso)/(parseFloat(altura/100)*parseFloat(altura/100));
  if(peso!='' & altura!=''){
    texto.innerText = `O imc calculado é: ${imc.toFixed(2)}`
    inputPeso.value = '';
    inputAltura.value = '';
    if(imc<=18.4){
      texto2.innerText = "Você está abaixo do Peso!"
    } else if(imc>=18.5 & imc<=24.9){
      texto2.innerText = 'Você está no peso normal';
    } else if(imc>=25){
      texto2.innerText = 'Você está acima do peso!';
    }
  } 
})