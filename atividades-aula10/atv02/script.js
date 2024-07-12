const input = document.getElementById('input');
const botao = document.getElementById('button');
const paragrafo = document.getElementById('paragrafo');

botao.addEventListener('click', (e)=>{
  e.preventDefault();
  const texto = input.value;
  if(texto != ''){
    const li = document.createElement('li')
    li.innerHTML = `<p>${input.value}</p>`;
    paragrafo.appendChild(li);
    input.value = '';
  } else {
    alert('Texto em branco.')
  }
});