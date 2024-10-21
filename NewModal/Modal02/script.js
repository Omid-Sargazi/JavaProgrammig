document.addEventListener("DOMContentLoaded", () => {
    let selectedProducts = [];
    const MAX_SELECTION = 4;

    const modal = document.getElementById("modal");
    const modalClose = document.getElementsByClassName("close")[0];
    const choiceItemBtn = document.getElementById("choiceItemBtn");
    const selectedProductsContainer = document.getElementById("selectedProducts");
    const productList = document.getElementById("productList");

    // Dummy JSON data (replace with actual fetch from a JSON file)
    const products = [
        { id: 1, name: "Product 1", price: "$50", image: "/Image/1.png", description: "Product 1 description" },
        { id: 2, name: "Product 2", price: "$60", image: "Image/1.png", description: "Product 2 description" },
        { id: 3, name: "Product 3", price: "$70", image: "Image/3.png", description: "Product 3 description" },
        { id: 4, name: "Product 4", price: "$80", image: "Image/2.png", description: "Product 4 description" },
        { id: 5, name: "Product 5", price: "$90", image: "Image/1.png", description: "Product 5 description" }
    ];

    // Show modal on button click
    choiceItemBtn.onclick = function() {
        modal.style.display = "block";
        loadProducts(products);
    };

    // Close the modal
    modalClose.onclick = function() {
        modal.style.display = "none";
    };

    // Load products in the modal
    function loadProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>${product.price}</p>
                <p>${product.description}</p>
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
        selectedProductDiv.className = "selected-product";
        selectedProductDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name} - ${product.price}</p>
        `;
        selectedProductsContainer.appendChild(selectedProductDiv);

        if (selectedProducts.length >= MAX_SELECTION) {
            choiceItemBtn.style.display = "none";
        }

        modal.style.display = "none";
    }

    // Hide modal on outside click
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
