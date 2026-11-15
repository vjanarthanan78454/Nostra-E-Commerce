// PRODUCT DETAILS

var newArrivals = [
    {
        name: "Floral Summer Shirt",
        price: 220,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500"
    },
    {
        name: "Summer Green",
        price: 260,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
    },
    {
        name: "Party Floral Shirt",
        price: 399,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500"
    },
    {
        name: "White Casual Shirt",
        price: 399,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500"
    }
];

var mostWanted = [
    {
        name: "Beach Shirt",
        price: 579,
        image: "https://images.unsplash.com/photo-1620012253295-c15a3e6c5f7a?w=500"
    },
    {
        name: "Red Party Shirt",
        price: 579,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
    },
    {
        name: "Holiday Shirt",
        price: 449,
        image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500"
    },
    {
        name: "Linen Shirt",
        price: 499,
        image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500"
    }
];


// DISPLAY PRODUCTS

function displayProducts(products, containerId) {

    var container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    products.forEach(function(product) {

        container.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <button onclick="addToWishlist('${product.name}')">
                    Add to Wishlist ♡
                </button>

            </div>
        `;

    });
}


// WISHLIST

function addToWishlist(productName) {

    var wishlist = JSON.parse(
        localStorage.getItem("nostraWishlist") || "[]"
    );

    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        localStorage.setItem(
            "nostraWishlist",
            JSON.stringify(wishlist)
        );
        alert(productName + " added to wishlist!");
    } else {
        alert("This product is already in your wishlist!");
    }

}


// LOAD PRODUCTS

document.addEventListener("DOMContentLoaded", function() {

    displayProducts(newArrivals, "newArrivalGrid");

    displayProducts(mostWanted, "wantedTrack");

});