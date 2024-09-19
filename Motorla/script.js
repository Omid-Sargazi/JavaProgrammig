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
