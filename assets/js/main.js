const input = window.document.getElementById("userPrompt"); // Input do prompt
const terminalOutput = window.document.getElementById("terminalOutput"); // Output do prompt

// Main logic
function createLine(text) {
  // função para criar linhas no output
  const pre = document.createElement("pre");
  pre.classList.add("output");
  pre.innerHTML = text;
  terminalOutput.appendChild(pre);

  window.scrollTo(0, terminalOutput.scrollHeight); // Scroll para o final do output
}

function showOutputAnimated(lines, delay) {
  // função para mostrar o output de forma animada
  let i = 0;

  function showNextLine() {
    if (i < lines.length) {
      createLine(lines[i]);
      i++;
      setTimeout(showNextLine, delay);
    }
  }

  showNextLine();
}

// Banner
window.onload = function () {
  // Mostrar o banner quando a página carregar
  showOutputAnimated(banner, 50);
};

// Comandos

window.addEventListener("keyup", function (event) {
  // captar tecla enter
  if (event.key === "Enter") {
    const command = input.value.trim().toLowerCase(); // Pega o valor do input e transforma em minusculas e sem espaços
    input.value = ""; // Limpa o input depois de capturar a tecla
    executeCommand(command);
  }
});

function executeCommand(command) {
  // função responsável por executar os comandos
  switch (command) {
    case "help":
      showOutputAnimated(help, 50);
      break;
    case "whois":
      showOutputAnimated(whois, 50);
      break;
    case "socials":
      showOutputAnimated(socials, 50);
      break;
    case "github":
      showOutputAnimated(github, 50);
      break;
    case "email":
      showOutputAnimated(email, 50);
      break;
    case "banner":
      showOutputAnimated(banner, 50);
      break;
    case "myprojects":
      showOutputAnimated(myprojects, 50);
      break;
    case "clear":
      terminalOutput.innerHTML = ""; // Limpa o output
      break;
    default:
      showOutputAnimated(
        [
          "<br>]",
          [
            "<pre class='colorLiner'>Command not found! Try <span class='command'>'help'</span> for a list of available commands.</pre>",
          ],
          "<br>",
        ],
        50
      );
  }
}
