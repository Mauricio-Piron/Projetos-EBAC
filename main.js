$(document).ready(function() {  
    $('header button').click(function() { /* Adicionando Evento click */
        $('form').slideDown(); /*Exibir formulário efeito Animações*/
    })

    $('#botao-cancelar').click(function(e) {
        $('form').slideUp(); /* Esconder formulário slideup Animações */
    })

    $('form').on('submit', function(e) { /* Evento de submeter */
        e.preventDefault(); /* Para  previnir comportamento padrão quando o formulario é submetido */
        const enderecoNovaImagem = $('#endereco-imagem-nova').val(); /* quando formulario for submetido recuperar o endereço isnerido */ 
        const novoItem = $('<li style="display: none;"></li>'); /* Criar elemento html que será criado ao final da lista */
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem); /* Adicionando a imagem e seu endereço e adiconando este elemento ao novo item appendto */
        $(` 
            <div class="orverlay-imagem-link"> 
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real";
                Ver imagem em tamanho real
                </a>
            </div>
        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); /* Adiconando novo item na tag ul */
        $(novoItem).fadeIn(1000); /* fadeIn - possibilita ajustar carregamento da imagem na pagina */
        $('#endereco-imagem-nova').val(''); /* Limpando formulario apos ser enviado */
    })
})