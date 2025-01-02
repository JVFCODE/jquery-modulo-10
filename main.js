$(document).ready(function () {
    // Máscaras para os campos de entrada
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true // Nome é obrigatório
            },
            email: {
                required: true, // E-mail é obrigatório
                email: true // Deve ser um e-mail válido
            },
            telefone: {
                required: true // Telefone é obrigatório
            },
            endereco: {
                required: true // Endereço é obrigatório
            },
            cep: {
                required: true // CEP é obrigatório
            },
            cpf: {
                required: true // CPF é obrigatório
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: "Por favor, insira seu telefone.",
            endereco: "
