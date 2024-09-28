// Sample products data from JSON file (you can load this via AJAX)
const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: '$15', image: 'image2.jpg' },
    // More products (up to 2000) should be listed here
];

let selectedProducts = [];

// Load modal and product selection logic
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('product-modal');
    const choiceProductButton = document.getElementById('choice-product');
    const closeModal = document.getElementById('close-modal');
    const productList = document.getElementById('product-list');
    const searchBar = document.getElementById('search-bar');
    const selectedProductsContainer = document.getElementById('selected-products');

    // Open modal on choice product button click
    choiceProductButton.addEventListener('click', function () {
        if (selectedProducts.length < 4) {
            modal.style.display = 'block';
            loadProducts(products); // Initially load all products
        }
    });

    // Close modal on click
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Filter products in modal by search
    searchBar.addEventListener('keyup', function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        loadProducts(filteredProducts);
    });

    // Load products into the modal
    function loadProducts(productListArray) {
        productList.innerHTML = '';
        productListArray.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>${product.price}</p>
            `;
            productItem.addEventListener('click', () => selectProduct(product));
            productList.appendChild(productItem);
        });
    }

    // Select a product and display it beside the main product
    function selectProduct(product) {
        if (selectedProducts.length < 4 && !selectedProducts.includes(product)) {
            selectedProducts.push(product);
            displaySelectedProducts();
            modal.style.display = 'none';

            if (selectedProducts.length >= 2) {
                choiceProductButton.style.display = 'none';
            }
        }
    }

    // Display selected products beside the main product
    function displaySelectedProducts() {
        selectedProductsContainer.innerHTML = '';
        selectedProducts.forEach(product => {
            const selectedProductDiv = document.createElement('div');
            selectedProductDiv.className = 'selected-product';
            selectedProductDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <button class="remove-product">Remove</button>
            `;
            selectedProductDiv.querySelector('.remove-product').addEventListener('click', () => removeProduct(product));
            selectedProductsContainer.appendChild(selectedProductDiv);
        });
    }

    // Remove a selected product and update the display
    function removeProduct(product) {
        selectedProducts = selectedProducts.filter(p => p.id !== product.id);
        displaySelectedProducts();

        if (selectedProducts.length < 2) {
            choiceProductButton.style.display = 'block';
        }
    }
});
