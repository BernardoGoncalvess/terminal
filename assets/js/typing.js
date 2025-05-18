// Pegar o HTML e o que está dentro
const asciiText = document.querySelector(".ascii");

// Guardar a formatação original do HTML e estilos
const fullHTML = asciiText.innerHTML;

// Limpar o texto para ficar vazio mas manter a formatção quando aparecer de novo
const asciiElement = (asciiText.innerHTML = " ");

// Definir animação e escreve cada letra de cada vez
let i = 0;

function typingAnimation() {
  if (i <= fullHTML.length) {
    asciiText.innerHTML = fullHTML.slice(0, i);
    i++;
    setTimeout(typingAnimation, 1); //ajuste de velocidade
  }
}

typingAnimation();
