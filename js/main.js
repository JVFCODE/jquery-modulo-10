$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#form').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            telefone: 'required',
            cpf: {
                required: true
            },
            endereco: 'required',
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, informe seu nome completo.',
            email: {
                required: 'Por favor, informe seu e-mail.',
                email: 'Por favor, informe um e-mail válido.'
            },
            telefone: 'Por favor, informe seu telefone.',
            cpf: {
                required: 'Por favor, informe seu CPF.'
            },
            endereco: 'Por favor, informe seu endereço completo.',
            cep: {
                required: 'Por favor, informe seu CEP.'
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
});
