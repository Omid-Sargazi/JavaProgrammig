document.addEventListener("DOMContentLoaded",()=>{
    let selectedProducts = [];
    const MAX_SELECTION = 4;

    const modal = document.getElementById("modal");
    const modalClose = document.getElementsByClassName("close")[0];
    const choiceItemBtn = document.getElementById("choiceItemBtn");
    const selectedProductsContainer = document.getElementById("selectedProducts");
    const productList = document.getElementById("productList");

    const products = [
        { id: 1, name: "Product 1", price: "$50", image: "./Image/1.png", description: "Product 1 description" },
        { id: 2, name: "Product 2", price: "$60", image: "./Image/2.png", description: "Product 2 description" },
        { id: 3, name: "Product 3", price: "$70", image: "./Image/3.png", description: "Product 3 description" },
        { id: 4, name: "Product 4", price: "$80", image: "./Image/1.png", description: "Product 4 description" },
        { id: 5, name: "Product 5", price: "$90", image: "./Image/2.png", description: "Product 5 description" }
    ];

    modalClose.onclick= function()
    {
        modal.style.display="none";
    }

    choiceItemBtn.onclick = function()
    {
        modal.style.display="block"
        
    }


})