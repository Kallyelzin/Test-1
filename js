// Seleciona um botão pelo ID
const button = document.getElementById('myButton');

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
    // Seleciona um elemento pelo ID
    const message = document.getElementById('message');
    
    // Altera o texto do elemento
    message.textContent = 'Você clicou no botão!';
    
    // Adiciona uma classe CSS ao elemento
    message.classList.add('highlight');
});

// Função para resetar o texto
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'Mensagem original';
    message.classList.remove('highlight');
});