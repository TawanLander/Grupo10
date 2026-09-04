function definirTema(tema) {
  document.documentElement.setAttribute('data-tema', tema);
  localStorage.setItem('tema-finsight', tema);
}

const temaSalvo = localStorage.getItem('tema-finsight') || 'escuro';
definirTema(temaSalvo);

document.addEventListener('DOMContentLoaded', () => {
  const btnTema = document.getElementById('btn-tema');

  if (btnTema) {
    btnTema.addEventListener('click', () => {
      const temaAtual = document.documentElement.getAttribute('data-tema');
      
      const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
      definirTema(novoTema);
    });
  }
});