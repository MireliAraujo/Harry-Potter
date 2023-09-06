const mode = document.getElementById('lua');

mode.addEventListener('click', () => {
    const corpo = document.getElementById('corpo');
    const sobre = document.getElementById('sobre');
    const rodape = document.getElementById('rodape');
    const personagens = document.getElementById('personagens');


    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        corpo.classList.add('dark');
        sobre.classList.add('dark');
        rodape.classList.add('dark');
        personagens.classList.add('dark');



        return; 
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    corpo.classList.remove('dark');
    sobre.classList.remove('dark');
    rodape.classList.remove('dark');
    personagens.classList.remove('dark');


});