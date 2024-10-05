// Select all main list items
const listItems = document.querySelectorAll('.category-list > li');

// Add a click event listener to each main category li
listItems.forEach(item => {
  item.addEventListener('click', function () {
    // Toggle visibility of the nested ul
    const nestedList = this.querySelector('.nested-list');
    
    if (nestedList) {
      nestedList.classList.toggle('visible');
    }
  });
});
