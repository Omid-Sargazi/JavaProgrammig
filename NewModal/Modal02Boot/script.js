document.addEventListener("DOMContentLoaded", () => {
    let selectedProducts = [];
    const MAX_SELECTION = 4;

    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    const choiceItemBtn = document.getElementById("choiceItemBtn");
    const selectedProductsContainer = document.getElementById("selectedProducts");
    const productList = document.getElementById("productList");

    // Dummy JSON data (replace with actual fetch from a JSON file)
    const products = [
        { id: 1, name: "Product 1", price: "$50", image: "https://via.placeholder.com/100", description: "Product 1 description" },
        { id: 2, name: "Product 2", price: "$60", image: "https://via.placeholder.com/100", description: "Product 2 description" },
        { id: 3, name: "Product 3", price: "$70", image: "https://via.placeholder.com/100", description: "Product 3 description" },
        { id: 4, name: "Product 4", price: "$80", image: "https://via.placeholder.com/100", description: "Product 4 description" },
        { id: 5, name: "Product 5", price: "$90", image: "https://via.placeholder.com/100", description: "Product 5 description" }
    ];

    // Show modal on button click
    choiceItemBtn.onclick = function() {
        productModal.show();
        loadProducts(products);
    };

    // Load products in the modal
    function loadProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "col-4";
            productItem.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
            `;
            productItem.onclick = function() {
                selectProduct(product);
            };
            productList.appendChild(productItem);
        });
    }

    // Select a product and display it between the "Choice Item" section and the main product
    function selectProduct(product) {
        if (selectedProducts.length >= MAX_SELECTION) {
            choiceItemBtn.style.display = "none";
            return;
        }

        selectedProducts.push(product);
        const selectedProductDiv = document.createElement("div");
        selectedProductDiv.className = "selected-product card";
        selectedProductDiv.innerHTML = `
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
            </div>
        `;
        selectedProductsContainer.appendChild(selectedProductDiv);

        if (selectedProducts.length >= MAX_SELECTION) {
            choiceItemBtn.style.display = "none";
        }

        productModal.hide();
    }
});
