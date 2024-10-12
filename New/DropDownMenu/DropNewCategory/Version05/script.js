document.querySelectorAll('.category-item, .sub-category-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from bubbling up to parent elements.
        const subMenu = item.querySelector('.sub-menu');
        if (subMenu) {
            // Toggle visibility of the sub-menu.
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});
