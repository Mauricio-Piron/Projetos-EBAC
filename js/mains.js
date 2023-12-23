$(document).ready(function() {
        
    
    $('#telefone').mask('(00) 00000-0000')


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                mensagem: false
            },
        
    },
    messages: {
        nome:      'Insira seu nome completo',
        email:     'Informe seu endereço de e-mail', 
        telefone:  'Informe número de telefone'
        
    },
    submitHandler:function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
        
    }
})
})