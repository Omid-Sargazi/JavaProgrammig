function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Close modal on scroll
window.addEventListener('scroll', function () {
    const modal = document.getElementById('modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});