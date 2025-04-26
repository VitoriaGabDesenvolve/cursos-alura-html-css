document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('.header__menu_burguer');
    const menu = document.querySelector('.header__navbar');
  
    function alternarMenu() {
      console.log('clicou');
      menu.classList.toggle('ativo');
    }
  
    botao.addEventListener('click', alternarMenu);
  });
  