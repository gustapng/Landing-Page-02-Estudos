const btnMobile = document.getElementById('btn-mobile');

    /* Função ativada somente quando o dispositivo que acessar a página tiver uma width menor que 600px*/
function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
} /* Função Toogle no menu para ativar ou desativar ao clicar no elemento com a tag 'btn-mobile'*/

btnMobile.addEventListener('click', toggleMenu); /* Monitorar o click no menu quando a tela tiver um width menor que 600px*/
btnMobile.addEventListener('touchstart', toggleMenu); /* Monitorar o touch "click" de aparelhos mobile */