const categories = {
    category1: [
        { name: "Товар 1", description: "Опис товару 1" },
        { name: "Товар 2", description: "Опис товару 2" },
        { name: "Товар 3", description: "Опис товару 3" }
    ],
    category2: [
        { name: "Товар 4", description: "Опис товару 4" },
        { name: "Товар 5", description: "Опис товару 5" },
        { name: "Товар 6", description: "Опис товару 6" }
    ],
    category3: [
        { name: "Товар 7", description: "Опис товару 7" },
        { name: "Товар 8", description: "Опис товару 8" },
        { name: "Товар 9", description: "Опис товару 9" }
    ]
};

const productList = document.getElementById("productList");
const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const button = document.getElementById("buyButton")
const form = document.getElementById("orderForm")
const order = document.getElementById("orderConfirmation");




function showProducts(category) {

    productList.innerHTML = "";

    const products = categories[category];
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerText = product.name;
        li.onclick = function() {
            showProductInfo(product);
        };
        productList.appendChild(li);
    });
}


function showProductInfo(product) {
    productName.innerText = product.name;
    productDescription.innerText = product.description;
    button.style.display = "block";
}

function buyProduct() {
    form.style.display = "block"
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const city = document.getElementById("city").value;
    const delivery = document.getElementById("delivery").value;
    const payment = document.getElementById("payment").value;
    const quantity = document.getElementById("quantity").value;

    if (fullName.trim() !== ''|| city.trim() !== '' || delivery.trim() !== ''|| payment.trim() !== ''| quantity.trim() !== '') {
        showOrder();
    }
});

function showOrder() {
    form.style.display = "none";
    order.style.display = "block";

    const city = document.getElementById("city").value;
    const delivery = document.getElementById("delivery").value;
    const quantity = document.getElementById("quantity").value;
    let productText = productName.textContent

    document.getElementById("productDetails").innerText = "Назва товару: " + productText + "\nКількість: " + quantity;

    document.getElementById("deliveryDetails").innerText = "Доставка:\nМісто: " + city + "\nСклад Нової пошти: " + delivery;
}


