document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();

        const category = event.target.closest('.category-item').innerText;
        const modal = document.getElementById('productModal');
        const modalTitle = document.getElementById('modalTitle');
        const subProductList = document.getElementById('subProductList');

        // Set the modal title
        modalTitle.textContent = category;

        // Clear the previous list
        subProductList.innerHTML = '';

        // Check if the clicked <li> contains an inner <ul>
        const subMenu = item.querySelector('ul');
        if (subMenu) {
            const clonedSubMenu = subMenu.cloneNode(true); // Clone the sub-menu to avoid altering the original HTML
            clonedSubMenu.classList.add('sub-menu-in-modal');
            subProductList.appendChild(clonedSubMenu);

            // Add click event to toggle only one nested sub-menu at a time within the modal
            clonedSubMenu.querySelectorAll('li').forEach(subItem => {
                subItem.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent click event from bubbling up
                    const innerSubMenu = subItem.querySelector('ul');

                    // If the clicked <li> contains another <ul>, toggle its display
                    if (innerSubMenu) {
                        // Hide any other open sub-menus at the same level
                        clonedSubMenu.querySelectorAll('ul').forEach(ul => {
                            ul.style.display = 'none';
                        });

                        // Toggle the clicked sub-menu visibility
                        innerSubMenu.style.display = innerSubMenu.style.display === 'block' ? 'none' : 'block';
                    } else {
                        // If no inner sub-menu, redirect to the link in the <a> tag
                        const link = subItem.querySelector('a');
                        if (link) {
                            window.location.href = link.href; // Redirect to the href
                        }
                    }
                });
            });
        } else {
            // If no sub-items, redirect to the link in the <a> tag
            const link = item.querySelector('a');
            if (link) {
                window.location.href = link.href; // Redirect to the href
            }
        }

        // Show the modal with a 500ms delay
        setTimeout(() => {
            modal.classList.toggle('show');
        }, 500);
    });
});

// Close the modal on clicking the close button
const closeButton = document.getElementById('closeModal');
closeButton.addEventListener('click', () => {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show'); // Hide the modal
});
