// Função para alternar entre tema claro e tema escuro
function alternarTema() {
    const body = document.body;
    const titulo = document.querySelector('h1');
    const texto = document.querySelector('p');
    const botoes = document.querySelectorAll('button');

    // Alternar as classes do body e do título
    body.classList.toggle('tema-claro');
    body.classList.toggle('tema-escuro');
    texto.classList.toggle('tema-claro');
    texto.classList.toggle('tema-escuro');
    titulo.classList.toggle('tema-claro');
    titulo.classList.toggle('tema-escuro');

    // Alternar as classes dos botões
    botoes.forEach(botao => {
      botao.classList.toggle('tema-claro');
      botao.classList.toggle('tema-escuro');
    });
  }