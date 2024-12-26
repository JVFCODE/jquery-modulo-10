$(document).ready(function() {
    $('#carousel').slick({
        autoplay: true,
        arrows: false
    });
  
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
  
    $('#form').validate({
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
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, informe seu nome completo.',
            email: 'Por favor, informe um e-mail válido.',
            telefone: 'Por favor, informe seu número de telefone.',
            cpf: 'Por favor, informe seu CPF.',
            endereco: 'Por favor, informe seu endereço completo.',
            cep: 'Por favor, informe seu CEP.'
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        }
    });
  });