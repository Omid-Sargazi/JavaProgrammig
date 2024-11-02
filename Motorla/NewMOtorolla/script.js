// Function to open the modal with the clicked category's nested content
function openModal(element) {
    // Get the nested ul of the clicked li
    const nestedUl = element.querySelector('.nested-ul');
    
    // Clone the nested ul content to the modal
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = ''; // Clear previous content
    modalContent.appendChild(nestedUl.cloneNode(true));

    // Show the modal
    document.getElementById('modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Event listener for close button
document.getElementById('close-button').addEventListener('click', closeModal);

// Event listener for clicking outside the modal to close it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});
