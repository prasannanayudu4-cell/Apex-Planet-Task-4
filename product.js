let products = [
    {name: "Item 1", price: 300},
    {name: "Item 2", price: 700},
    {name: "Item 3", price: 200}
];

function displayProducts(list) {
    let ul = document.getElementById("productList");
    ul.innerHTML = "";

    list.forEach(p => {
        let li = document.createElement("li");
        li.textContent = p.name + " - ₹" + p.price;
        ul.appendChild(li);
    });
}

function filterProducts(type) {
    if (type === "low") {
        displayProducts(products.filter(p => p.price < 500));
    } else if (type === "high") {
        displayProducts(products.filter(p => p.price >= 500));
    } else {
        displayProducts(products);
    }
}

function sortProducts() {
    products.sort((a, b) => a.price - b.price);
    displayProducts(products);
}

displayProducts(products);
