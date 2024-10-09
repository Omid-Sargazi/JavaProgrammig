const subProducts = 
{
    "Apple Accessories":["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "AirPods Protective Case"],
    "Samsung Accessories": ["Galaxy S24", "Galaxy S24 Plus", "Galaxy Z Fold 5", "Galaxy Watch 6", "Galaxy Buds 2"],
    "Xiaomi Accessories": ["Mi 13", "Mi 13 Ultra", "Redmi Note 12", "Mi Band 8", "Xiaomi Wireless Charger"]
}

document.querySelectorAll(".category-item").forEach(item=>{
    item.addEventListener("click",(event)=>{
        const category = event.target.closest('.category-item').getAttribute('data-category');
        const modal = document.getElementById('productModal');
        const modalTitle = document.getElementById('modalTitle');
        const subProductList = document.getElementById('subProductList');

        modalTitle.textContent = category;

        subProductList.innerHTML = ""
        if(subProducts[category])
        {
            subProducts[category].forEach(product=>{
                const li = document.createElement('li');
                li.textContent = product
                li.classList.add("sub-product-item");
                subProductList.appendChild(li);
            })
        }else
        {
            subProductList.innerHTML = "<li class='sub-product-item'>No sub-products available</li>";
        }
        modal.classList.toggle('show');
    })
})

document.getElementById("closeModal").addEventListener("click",()=>{
    const modal = document.getElementById('productModal');
    modal.classList.remove("show");
})