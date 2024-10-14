// Load Google Material Icons
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Icons to be added for each category item
const icons = {
    "بدون دسته‌بندی": "category",
    "پرفروش های موتورولا": "star",
    "تلفن های همراه موتورولا": "stay_primary_portrait",
    "شگفت انگیز": "whatshot",
    "قطعات سری موتورولا ایکس": "build",
    "قطعات سری موتورولا جی": "build",
    "قطعات سری موتورولا دروید": "build",
    "قطعات سری موتورولا زد": "build",
    "قطعات سری موتورولا سی": "build",
    "قطعات سری موتورولا وان": "build",
    "قطعات موتو ۳۶۰": "watch",
    "قطعات موتو ام": "build",
    "قطعات موتو ای ۷": "build",
    "قطعات موتو ای ۷ آی پاور": "build",
    "قطعات موتو جی 9 پاور": "battery_alert",
    "قطعات موتو جی 9 پلاس": "battery_full",
    "خشاب سیم کارت": "sim_card",
    "سنسور اثر انگشت موتورولا": "fingerprint"
};

// Select all the menu items
const menuItems = document.querySelectorAll('#menu-secondary li a');

// Loop through each menu item and inject the icon beside the text
menuItems.forEach(menuItem => {
    const text = menuItem.innerText.trim();
    if (icons[text]) {
        const iconElement = document.createElement('span');
        iconElement.classList.add('material-icons');
        iconElement.textContent = icons[text]; // Set the appropriate icon from the object
        menuItem.prepend(iconElement); // Insert the icon before the text
    }
});
