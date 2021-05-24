const cepInput = document.getElementById('cep');
const inputValue = cepInput.value;
const buttonSend = document.getElementById('btnPesquisar');
const url = `https://viacep.com.br/ws/${inputValue}/json/`;

buttonSend.addEventListener('click', (event) => {
  event.preventDefault();

fetch(url).then((response => {
  return response.json()
    .then(data => {
      if (data.erro) {
        alert("O CEP DIGITADO ESTÁ INVÁLIDO");
        return;
      }
      atribuirCampos(data);
    })
}))

const atribuirCampos = (data) => {
  const rua = document.querySelector("#rua");
  const complemento = document.querySelector("#complemento");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");


  rua.value = data.logradouro;
  complemento.value = data.complemento;
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;
}

})