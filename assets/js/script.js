// Adicionando as variaveis;

const imagem = document.querySelector('#lampada');
const buttonAcender = document.querySelector('#button-acender');
const buttonApagar = document.querySelector('#button-apagar');

// Criando as funções;

const acenderLampada = () => {
    imagem.src='assets/images/lampada-acessa.gif';
} 

const apagarLampada = () => {
    imagem.src='assets/images/lampada-apagada.gif';
} 

// Adicionando o evento do click nos botões;

buttonAcender.addEventListener('click', acenderLampada);
buttonApagar.addEventListener('click', apagarLampada);
