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
    } else if (command.startsWith('add')) {
        const productId = command.split(' ')[1];
        addToCart(productId);
    } else if (command.startsWith('remove')) {
        const productId = command.split(' ')[1];
        removeFromCart(productId);
    } else if (command === 'cart') {
        viewCart();
    } else if (command === 'buy') {
        proceedToBuy();
    } else {
        displayMessage(`Command not recognized: ${command}`);
    }
}
function addToCart(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            cart.push(product);
            displayMessage(`Added to cart: ${product.title}`);
        })
        .catch(() => {
            displayMessage('Product not found');
        });
}
function removeFromCart(productId) {
    const productIndex = cart.findIndex(product => product.id == productId);
    if (productIndex !== -1) {
        const removedProduct = cart.splice(productIndex, 1)[0];
        displayMessage(`Removed from cart: ${removedProduct.title}`);
    } else {
        displayMessage('Product not found in cart');
    }
}

function viewCart() {
    if (cart.length === 0) {
        displayMessage('Your cart is empty.');
    } else {
        let totalPrice = 0;
        cart.forEach(product => {
            displayMessage(`ID: ${product.id}, Name: ${product.title}, Price: $${product.price}`);
            totalPrice += product.price;
        });
        displayMessage(`Total Price: $${totalPrice.toFixed(2)}`);
    }
}
function proceedToBuy() {
    if (cart.length === 0) {
        displayMessage('Your cart is empty. Add some products before buying.');
    } else {
        displayMessage('Proceeding to checkout...');
        let totalPrice = 0;
        cart.forEach(product => {
            displayMessage(`ID: ${product.id}, Name: ${product.title}, Price: $${product.price}`);
            totalPrice += product.price;
        });
        displayMessage(`Total Price: $${totalPrice.toFixed(2)}`);
        displayMessage('Thank you for shopping with us!');
    }
}

function displayMessage(message) {
    // Create a new div for the message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    // Add it to the output
    output.appendChild(messageDiv);
}
