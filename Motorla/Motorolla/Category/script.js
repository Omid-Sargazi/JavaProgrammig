// Show Categories page without hiding footer
document.getElementById('categoriesBtn').addEventListener('click', () => {
    document.getElementById('categoryPage').classList.add('active');
});

// Close Categories page when Home is clicked
document.getElementById('homeBtn').addEventListener('click', () => {
    document.getElementById('categoryPage').classList.remove('active');
});


// Fetch categories from JSON and display them
fetch('categories.json')
    .then(response => response.json())
    .then(data => {
        const categoryList = document.querySelector('.category-list');
        categoryList.innerHTML = data.categories.map(category => `
            <div class="category">
                <img src="${category.icon}" alt="${category.name}" />
                <span>${category.name}</span>
            </div>
        `).join('');
    });



    // Fetch and display products from the corresponding JSON file
function loadProducts(categoryId, page = 1) {
    fetch(`categories/${categoryId}.json`)
        .then(response => response.json())
        .then(data => {
            const productList = document.querySelector('.product-list');
            const productsPerPage = 20;
            const start = (page - 1) * productsPerPage;
            const end = page * productsPerPage;
            const productsToShow = data.products.slice(start, end);

            productsToShow.forEach(product => {
                const productHTML = `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-details">
                            <h4>${product.name}</h4>
                            <p class="product-description">${product.description}</p>
                        </div>
                        <div class="product-price">$${product.price}</div>
                    </div>
                `;
                productList.innerHTML += productHTML;
            });

            // Hide Load More button if all products are loaded
            if (end >= data.products.length) {
                document.getElementById('loadMoreBtn').style.display = 'none';
            }
        })
        .catch(error => console.error('Error fetching product data:', error));
}

// Load more products when "Load More" button is clicked
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    currentPage++;
    loadProducts(currentCategoryId, currentPage);
});

// Load products when category is selected
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', (e) => {
        currentCategoryId = e.target.dataset.categoryId;
        document.getElementById('productPage').classList.add('active');
        loadProducts(currentCategoryId);
    });
});
