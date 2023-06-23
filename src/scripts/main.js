const button = document.getElementById('gera-number');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let resultado = Math.floor(Math.random() * (max  - min + 1)) + min;

    if (isNaN(resultado)) {
        resultado = 'Valor inválido'
    }

    if  (min > max ) {
        resultado = 'Valor máximo deve ser maior que o mínimo'
    }
    document.querySelector('#resultado > span').textContent = resultado;

})
