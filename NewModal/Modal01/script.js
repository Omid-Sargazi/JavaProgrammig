let productsJson = [];  // Will hold the products from the JSON file
let selectedItems = [];  // Keep track of selected items
const maxItems = 4;      // Max number of items allowed to select

fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        productsJson = data;  // Store products in the array
        renderItems();        // Render items initially
    })
    .catch(error => console.error("Error fetching products:", error));


const choiceItemBtn = document.getElementById('choiceItemBtn');
const selectedItemsDiv = document.getElementById('selectedItems');
const searchBox = document.getElementById('searchBox');
const itemList = document.getElementById('itemList');
const itemCount = document.getElementById('itemCount');

choiceItemBtn.addEventListener('click', function () {
    console.log("appear modal")
    renderItems();  // Show items when modal opens
    const modal = new bootstrap.Modal(document.getElementById('choiceItemModal'));
    modal.show();
});

function renderItems(searchTerm = "") {
    itemList.innerHTML = "";  // Clear existing items
    const filteredProducts = productsJson.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredProducts.slice(0, 200).forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('col-md-4', 'mb-3');
        itemDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h6 class="card-title">${product.title}</h6>
                    <p class="text-success">${product.price}</p>
                    <button class="btn btn-primary select-btn" onclick="selectItem(${product.id})">Select</button>
                </div>
            </div>
        `;
        itemList.appendChild(itemDiv);
    });

    // Update item count
    itemCount.textContent = `${filteredProducts.length} items available.`;
}