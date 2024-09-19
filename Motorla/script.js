function showDetails(productId) {
    // Hide all product detail divs
    var products = document.querySelectorAll('.product-details');
    products.forEach(function(product) {
        product.style.display = 'none';
    });

    // Show the selected product detail div
    var productDiv = document.getElementById('product' + productId);
    productDiv.style.display = 'block';

    // Show the overlay
    document.querySelector('.overlay').style.display = 'block';
}

function hideDetails() {
    // Hide all product detail divs and the overlay
    var products = document.querySelectorAll('.product-details');
    products.forEach(function(product) {
        product.style.display = 'none';
    });

    document.querySelector('.overlay').style.display = 'none';
}

function searchInDetails(productId) {
    // Get the search input and the corresponding product content
    var searchInput = document.getElementById('search' + productId).value.toLowerCase();
    var productContent = document.querySelector('#product' + productId + ' .product-content');

    // Filter the content based on the search input
    if (productContent.textContent.toLowerCase().includes(searchInput)) {
        productContent.style.display = 'block'; // Show matching content
    } else {
        productContent.style.display = 'none'; // Hide non-matching content
    }
}