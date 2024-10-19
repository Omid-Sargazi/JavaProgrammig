// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the footer navigation menu
    const menuItems = document.querySelectorAll('.lower-short-menu li');
  
    if (menuItems.length > 0) {
      // Add Material Icons using class names from Google Fonts
      menuItems[0].querySelector('a').insertAdjacentHTML('afterbegin', `<span class="material-icons menu-icon">home</span>`);
      menuItems[1].querySelector('a').insertAdjacentHTML('afterbegin', `<span class="material-icons menu-icon">category</span>`);
      menuItems[2].querySelector('a').insertAdjacentHTML('afterbegin', `<span class="material-icons menu-icon">person</span>`);
      menuItems[3].querySelector('a').insertAdjacentHTML('afterbegin', `<span class="material-icons menu-icon">shopping_cart</span>`);
    }
  });
  