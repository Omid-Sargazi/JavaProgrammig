document.addEventListener('DOMContentLoaded', () => {
    const subProductsModal = document.getElementById('sub-products');
    const subProductList = document.getElementById('sub-product-list');
    const closeButton = document.getElementById('close-button');

    const productData = {
        1: ['Sub-product 1.1', 'Sub-product 1.2', 'Sub-product 1.3'],
        2: ['Sub-product 2.1', 'Sub-product 2.2', 'Sub-product 2.3'],
        3: ['Sub-product 3.1', 'Sub-product 3.2', 'Sub-product 3.3'],
    };

    // Function to open the sub-products modal
    function openSubProducts(productId) {
        // Populate the sub-product list based on the clicked product
        const subProducts = productData[productId] || [];
        subProductList.innerHTML = subProducts
            .map(subProduct => `<li>${subProduct}</li>`)
            .join('');
        
        // Slide in the modal from the right
        subProductsModal.style.transform = 'translateX(-100%)';
    }

    // Function to close the sub-products modal
    function closeSubProducts() {
        // Slide out the modal to the right
        subProductsModal.style.transform = 'translateX(0)';
    }

    // Add event listener to each product item
    document.querySelectorAll('.product-list ul li').forEach(product => {
        product.addEventListener('click', () => {
            const productId = product.getAttribute('data-product');
            openSubProducts(productId);
        });
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', closeSubProducts);
});
