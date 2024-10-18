<script>
    document.addEventListener('DOMContentLoaded', function() {
        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove 'active' class from all items
                menuItems.forEach(i => i.classList.remove('active'));
                // Add 'active' class to the clicked item
                item.classList.add('active');
            });
        });
    });
</script>
