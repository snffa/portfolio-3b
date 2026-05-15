function mostrarAba(id, botaoClicado) {
  // Esconde todas as seções
  var secoes = document.querySelectorAll('.secao');
  for (var i = 0; i < secoes.length; i++) {
    secoes[i].classList.remove('ativa');
  }

  // Remove o estilo ativo de todos os botões
  var botoes = document.querySelectorAll('.abas button');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove('ativo');
  }

  // Mostra a seção clicada e marca o botão como ativo
  document.getElementById(id).classList.add('ativa');
  botaoClicado.classList.add('ativo');
}

function selecionarTrimestre(botaoClicado, trimestre) {
  var grupo = botaoClicado.parentElement;
  var botoes = grupo.querySelectorAll('button');

  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove('ativo');
  }

  botaoClicado.classList.add('ativo');

  var secao = botaoClicado.closest('.secao');
  var atividades = secao.querySelectorAll('.card-atividade');

  for (var j = 0; j < atividades.length; j++) {
    var trimestresDaAtividade = atividades[j].dataset.trimestre.split(' ');

    if (trimestresDaAtividade.indexOf(trimestre) !== -1) {
      atividades[j].classList.remove('oculta');
    } else {
      atividades[j].classList.add('oculta');
    }
  }
}
