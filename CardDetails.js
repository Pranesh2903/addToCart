let productId = localStorage.getItem("productId");
let allProducts = JSON.parse(localStorage.getItem("viewCard")) || [];
let product = allProducts.find(item => item.id == productId);









if (product) {
    document.getElementById("product-img").innerHTML = `<img src="${product.img}" class="img-fluid" alt="....">`;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText =  `₹${product.Price}`;
} else {
    document.querySelector('.container').innerHTML = "<h3>Product not found.</h3>";
}




let quantity = 1;

function changeQty(change) {
    let maxQty = product.maxQty;
    quantity += change;

    if (quantity < 1) quantity = 1;
    if (quantity > maxQty) {
        quantity = maxQty;
        alert("Reached maximum quantity limit.");
    }

    document.getElementById("product-qty").innerText = quantity;
}

function addToCart() {
    let cartData = JSON.parse(localStorage.getItem("cardData")) || [];
    let existing = cartData.find(item => item.id == product.id);
    
    if (existing) {
        if (existing.quantity + quantity <= product.maxQty) {
            existing.quantity += quantity;
        } else {
            alert("Exceeds maximum quantity limit.");
            return;
        }
    } else {
        cartData.push({ ...product, quantity });
    }

    localStorage.setItem("cardData", JSON.stringify(cartData));
    alert("Item added to cart!");
    quantity = 1;
    document.getElementById("product-qty").innerText = quantity;
}


function cartPageBtn(){
    window.location.href = "./index.html";
}


