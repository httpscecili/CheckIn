document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registrationForm');
    var registrationTimeField = document.getElementById('registrationTime');
    var checkInTimeField = document.getElementById('checkInTime');

    // Função para atualizar o campo de data/hora de inscrição
    function updateRegistrationTime() {
        var now = new Date();
        registrationTimeField.value = now.toLocaleString();
    }

    // Função para atualizar o campo de data/hora de check-in
    function updateCheckInTime() {
        var now = new Date();
        checkInTimeField.value = now.toLocaleString();
    }

    // Registrar data/hora de inscrição quando o formulário é enviado
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        updateRegistrationTime(); // Atualiza a data/hora de inscrição
        alert('Inscrição registrada!'); // Exibe mensagem de confirmação (pode ser removido)
        registrationForm.reset(); // Limpa o formulário
    });

    // Registrar data/hora de check-in quando o usuário clica no botão de envio
    registrationForm.addEventListener('submit', function() {
        updateCheckInTime(); // Atualiza a data/hora de check-in
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registrationForm');
    var registrationTimeField = document.getElementById('registrationTime');
    var checkInTimeField = document.getElementById('checkInTime');
    var dadosPessoaDiv = document.getElementById('dadosPessoa');

    // Função para atualizar o campo de data/hora de inscrição
    function updateRegistrationTime() {
        var now = new Date();
        registrationTimeField.value = now.toLocaleString();
    }

    // Função para atualizar o campo de data/hora de check-in
    function updateCheckInTime() {
        var now = new Date();
        checkInTimeField.value = now.toLocaleString();
    }

    // Função para exibir os dados da pessoa
    function exibirDadosPessoa(nome, email, dataInscricao, dataCheckIn) {
        dadosPessoaDiv.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Data de Inscrição:</strong> ${dataInscricao}</p>
            <p><strong>Data de Check-in:</strong> ${dataCheckIn}</p>
        `;
    }

    // Registrar data/hora de inscrição quando o formulário é enviado
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        updateRegistrationTime(); // Atualiza a data/hora de inscrição
        var nome = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var dataInscricao = registrationTimeField.value;
        var dataCheckIn = checkInTimeField.value;
        exibirDadosPessoa(nome, email, dataInscricao, dataCheckIn);
        alert('Inscrição registrada!'); // Exibe mensagem de confirmação (pode ser removido)
        registrationForm.reset(); // Limpa o formulário
    });

    // Registrar data/hora de check-in quando o usuário clica no botão de check-in
    document.getElementById('checkInButton').addEventListener('click', function() {
        updateCheckInTime(); // Atualiza a data/hora de check-in
        var nome = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var dataInscricao = registrationTimeField.value;
        var dataCheckIn = checkInTimeField.value;
        exibirDadosPessoa(nome, email, dataInscricao, dataCheckIn);
        alert('Check-in realizado!'); // Exibe mensagem de confirmação (pode ser removido)
    });
});
