let productsJson = [];
let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];  // Persist selected items across reloads
const maxItems = 4;  // Maximum number of items allowed to select

// Fetch products from JSON file
fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        productsJson = data;
        renderItems();  // Render the modal items
        renderSelectedItems();  // Render selected items beside the main product
    })
    .catch(error => console.error("Error fetching products:", error));

// DOM Elements
const choiceItemBtn = document.getElementById('choiceItemBtn');
const selectedItemsDiv = document.getElementById('selectedItems');
const searchBox = document.getElementById('searchBox');
const itemList = document.getElementById('itemList');
const itemCount = document.getElementById('itemCount');

// Open modal and render items
choiceItemBtn.addEventListener('click', function () {
    renderItems();  // Show items when modal opens
    const modal = new bootstrap.Modal(document.getElementById('choiceItemModal'));
    modal.show();
});

// Render items with optional search term
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

// Add search functionality
searchBox.addEventListener('input', function () {
    const searchTerm = this.value;
    renderItems(searchTerm);
});

// Function to handle item selection
function selectItem(productId) {
    if (selectedItems.length >= maxItems) return;  // Don't allow more than 4 items

    const selectedProduct = productsJson.find(product => product.id === productId);

    // Add selected product to selectedItems array
    selectedItems.push(selectedProduct);

    // Save selected items to localStorage to persist on reload
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

    // Reload the page to reflect changes
    window.location.reload();
}

// Render selected items beside the main product
function renderSelectedItems() {
    selectedItemsDiv.innerHTML = "";  // Clear previous items

    selectedItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('selected-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" class="img-fluid" alt="${item.title}">
            <h6>${item.title}</h6>
            <p class="text-success">${item.price}</p>
            <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
        `;
        selectedItemsDiv.appendChild(itemDiv);
    });

    // Hide "Choice Item" button if 4 items are selected
    if (selectedItems.length >= maxItems) {
        choiceItemBtn.classList.add('hide-btn');
    } else {
        choiceItemBtn.classList.remove('hide-btn');
    }
}

// Function to remove a selected item
function removeItem(index) {
    selectedItems.splice(index, 1);  // Remove the item from the array

    // Save updated items to localStorage
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

    // Reload the page to reflect changes
    window.location.reload();
}

// Render selected items on page load
renderSelectedItems();
