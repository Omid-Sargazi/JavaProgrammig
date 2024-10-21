document.addEventListener('DOMContentLoaded', function () {
    // Load Google Material Icons (if needed)
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Create the modal for displaying subcategories
    const createModal = () => {
        const modal = document.createElement('div');
        modal.id = 'productModal';
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeButton = document.createElement('span');
        closeButton.classList.add('close-button');
        closeButton.id = 'closeModal';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        const modalTitle = document.createElement('h2');
        modalTitle.id = 'modalTitle';

        const subProductList = document.createElement('ul');
        subProductList.id = 'subProductList';
        subProductList.classList.add('sub-product-list');

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(subProductList);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    };

    createModal(); // Initialize the modal

    // Function to populate the modal with subcategories or navigate to the final URL
    const populateModal = (categoryName, subMenu) => {
        const modalTitle = document.getElementById('modalTitle');
        const subProductList = document.getElementById('subProductList');

        // Set modal title to the category clicked
        modalTitle.textContent = categoryName;
        subProductList.innerHTML = ''; // Clear previous items

        // Extract sub-menu items
        if (subMenu) {
            const subItems = subMenu.querySelectorAll('li');
            if (subItems.length > 0) {
                // If there are sub-menu items, list them in the modal
                subItems.forEach(item => {
                    const li = document.createElement('li');
                    const aTag = item.querySelector('a');
                    li.textContent = aTag ? aTag.innerText : item.innerText;
                    li.classList.add('sub-product-item');

                    // Add click event for each subcategory
                    li.addEventListener('click', (event) => {
                        event.stopPropagation();

                        // If this item has another sub-menu, populate it
                        const nestedSubMenu = item.querySelector('.sub-menu');
                        if (nestedSubMenu) {
                            populateModal(li.textContent, nestedSubMenu);
                        } else if (aTag) {
                            // If it's a final item (with no more sub-menus), navigate to the URL
                            window.location.href = aTag.href;
                        }
                    });

                    subProductList.appendChild(li);
                });
            }
        }
    };

    // Add event listeners to all menu items
    document.querySelectorAll('#menu-secondary li').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent navigation
            event.stopPropagation();

            const category = item.querySelector('a').innerText;
            const subMenu = item.querySelector('.sub-menu');

            // Populate modal with the sub-menu items
            populateModal(category, subMenu);

            // Show the modal
            setTimeout(() => {
                document.getElementById('productModal').classList.add('show');
            }, 300);
        });
    });

    // Close the modal on clicking the close button
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('productModal').classList.remove('show');
    });
});
