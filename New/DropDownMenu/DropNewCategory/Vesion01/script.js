document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', function () {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.sub-dropdown-button').forEach(button => {
    button.addEventListener('click', function () {
        alert(`Navigating to ${this.textContent} page...`);
        // Here, you can add code to redirect to the appropriate page, for example:
        // window.location.href = 'URL_TO_YOUR_PAGE';
