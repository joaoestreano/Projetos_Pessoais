function palavraParaNumeros(palavra) {
    return palavra
      .toLowerCase()
      .split('')
      .map(letra => letra.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
      .join('');
  }
  
  function converterPalavra() {
    let palavra = prompt("Digite uma palavra:");
    if (palavra) {
      let resultado = palavraParaNumeros(palavra);
      document.getElementById("resultado").innerText = 
        `A palavra "${palavra}" convertida é: ${resultado}`;
    }
  }
  