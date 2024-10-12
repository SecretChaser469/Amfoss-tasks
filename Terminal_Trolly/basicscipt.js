const input = document.getElementById('input');
const output = document.getElementById('output');

// Listen for when the user presses "Enter" in the input
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Get the user's input
        const command = input.value.trim();
        // Clear the input field
        input.value = '';
        // Handle the command
        handleCommand(command);
    }
});

function handleCommand(command) {
    if (command === 'list') {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                products.forEach(product => {
                    displayMessage(`ID: ${product.id}, Name: ${product.title}, Price: $${product.price}`);
                });
            });
    } else if (command.startsWith('details')) {
        const productId = command.split(' ')[1];
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                displayMessage(`ID: ${product.id}, Name: ${product.title}, Description: ${product.description}, Price: $${product.price}`);
            });
    } else {
        displayMessage(`Command not recognized: ${command}`);
    }
}
function displayMessage(message) {
    // Create a new div for the message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    // Add it to the output
    output.appendChild(messageDiv);
}
