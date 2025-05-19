// Pegar o input e o texto dentro dele
const prompt = document.getElementById("prompt");

// Pegar a div do histórico para guardar comandos já usados
const history = document.querySelector(".history");

// Array vazia que guarda o histórico
let output = [];

// Definir a tecla enter para fazer uma ação quando primida
addEventListener(keydown, enter);
