// Function to handle the recursive showing of nested ul elements
function toggleNestedList(event) {
    const clickedLi = event.target.closest('li');
    
    // Get the nested ul inside the clicked li
    const nestedUl = clickedLi.querySelector('.nested-list');
    
    // If the nested ul exists, toggle its visibility
    if (nestedUl) {
      nestedUl.classList.toggle('visible');
    }
  
    // After expanding the current li, show the next sibling li (if exists)
    const nextLi = clickedLi.nextElementSibling;
    if (nextLi) {
      nextLi.style.display = 'list-item';
    }
  }
  
  // Add event listeners to the main li elements and all nested li elements recursively
  function addEventListenersToListItems(ul) {
    const listItems = ul.children;
    
    Array.from(listItems).forEach(item => {
      item.addEventListener('click', function(event) {
        // Stop the event from propagating to parent elements
        event.stopPropagation();
        toggleNestedList(event);
      });
  
      // Recursively add event listeners to nested lists
      const nestedUl = item.querySelector('.nested-list');
      if (nestedUl) {
        addEventListenersToListItems(nestedUl);
      }
    });
  }
  
  // Start by adding event listeners to the main ul
  document.addEventListener('DOMContentLoaded', () => {
    const mainList = document.querySelector('.category-list');
    addEventListenersToListItems(mainList);
  });
  