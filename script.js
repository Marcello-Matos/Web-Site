document.getElementById('testimonialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Cria um novo elemento de lista para o depoimento
    const testimonialItem = document.createElement('li');
    testimonialItem.innerHTML = `<strong>Nome:</strong> ${name}<br><strong>E-mail:</strong> ${email}<br><strong>Depoimento:</strong> ${message}`;

    // Adiciona o novo elemento de lista ao elemento ul
    document.getElementById('testimonialList').appendChild(testimonialItem);

    // Limpa os campos do formulário
    document.getElementById('testimonialForm').reset();
});
