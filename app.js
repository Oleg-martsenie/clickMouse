let button = document.querySelector('button');
let titulo = document.querySelector('#titulo')

button.addEventListener('click', function(){
    cliquei()
});

function cliquei() {
    titulo.innerHTML = 'Привет мне подруг'
}