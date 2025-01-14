// Get the cart from Local Storage or create an empty array if none exists
function getCart() {
    var storedCart = localStorage.getItem("cart");
    if (storedCart) {
        return JSON.parse(storedCart); // Convert JSON string to JavaScript object
    } else {
        return []; // Return an empty array if no cart data exists
    }
}

// Save the cart to Local Storage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart)); // Convert cart to JSON string and store it
}

// Add an item to the cart
function addToCart(productName, price, image) {
    var cart = getCart(); // Get the current cart
    cart.push({ productName: productName, price: price, image: image }); // Add the new product
    saveCart(cart); // Save the updated cart back to Local Storage
    alert(productName + " has been added to your cart!");
}

// Display cart items on the Cart page
function displayCart() {
    var cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return; // If the element is not found, exit

    var cart = getCart(); // Get the current cart
    cartItemsContainer.innerHTML = ""; // Clear the previous contents

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    // Loop through each item in the cart
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
        <div>
            <img src="${item.image}" alt="${item.productName}" style="width: 50px; height: auto; border-radius: 5px;">
            <p>${i + 1}. ${item.productName} - RM ${item.price.toFixed(2)}</p>
        </div>
    `;
        cartItemsContainer.appendChild(itemDiv); // Add item to the container
    }
}

// Display cart items and total price on the Checkout page
function displayCheckout() {
    var checkoutItemsContainer = document.getElementById("checkout-items");
    var totalPriceElement = document.getElementById("total-price");

    if (!checkoutItemsContainer || !totalPriceElement) return; // If elements not found, exit

    var cart = getCart(); // Get the current cart
    var totalPrice = 0; // Initialize the total price

    checkoutItemsContainer.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = "<p>Your cart is empty. Please add items before checking out.</p>";
        return;
    }

    // Loop through each item in the cart
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = 
            "<p>" + (i + 1) + ". " + item.productName + " - RM " + item.price.toFixed(2) + "</p>";
        checkoutItemsContainer.appendChild(itemDiv); // Add item to the container
        totalPrice += item.price; // Add item price to total
    }

    totalPriceElement.textContent = totalPrice.toFixed(2); // Update total price
}

function validateCheckoutForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var card = document.getElementById('card').value;
    var expiry = document.getElementById('expiry').value;
    var cvv = document.getElementById('cvv').value;

    var isValid = true;

    // Clear previous error messages
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('address-error').style.display = 'none';
    document.getElementById('card-error').style.display = 'none';
    document.getElementById('expiry-error').style.display = 'none';
    document.getElementById('cvv-error').style.display = 'none';

    // Check each field
    if (!name) {
        document.getElementById('name-error').style.display = 'inline';
        isValid = false;
    }

    if (!email) {
        document.getElementById('email-error').style.display = 'inline';
        isValid = false;
    }

    if (!address) {
        document.getElementById('address-error').style.display = 'inline';
        isValid = false;
    }

    if (!card) {
        document.getElementById('card-error').style.display = 'inline';
        isValid = false;
    }

    if (!expiry) {
        document.getElementById('expiry-error').style.display = 'inline';
        isValid = false;
    }

    if (!cvv) {
        document.getElementById('cvv-error').style.display = 'inline';
        isValid = false;
    }

    return isValid; // Return whether the form is valid or not
}

// Event listener for Checkout button on Cart page
document.addEventListener("DOMContentLoaded", function() {
    var checkoutButton = document.getElementById("checkout-btn");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", function() {
            var cart = getCart(); // Get the cart from local storage
            if (cart.length === 0) {
                alert("Your cart is empty. Please add items before proceeding.");
            } else {
                saveCart(cart); // Ensure cart is saved
                window.location.href = "ecoSunnah_checkout.html"; // Navigate to Checkout page
            }
        });
    }

    // Display cart items on the Cart page
    displayCart();
    displayCheckout();
});

// Event listener for the Checkout form on the Checkout page
document.addEventListener("DOMContentLoaded", function() {
    var paymentForm = document.getElementById("checkout-form");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from refreshing the page
            
            if (validateCheckoutForm()) {
                // If the form is valid, show the success message and submit the form
                alert("Thank you for your purchase! Your order is being processed.");
                localStorage.removeItem("cart"); // Clear the cart after purchase
                window.location.href = "index.html"; // Redirect to homepage
            } else {
                // If the form is not valid, alert the user
                alert("Please fill in all required fields.");
            }
        });
    }
});

// Fetch and display products using AJAX
$(document).ready(function () {
    $.ajax({
        url: "ecoSunnah_products.json", // The JSON file with product data
        method: "GET",
        dataType: "json",
        success: function (products) {
            let productsContainer = $("#products-container");
            productsContainer.empty(); // Clear the container before appending new products

            // Function to render products based on selected category
            function renderProducts(filteredProducts) {
                productsContainer.empty(); // Clear existing products

                filteredProducts.forEach(product => {
                    let productDiv = `
                        <div class="product ${product.category}">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <h3>${product.name}</h3>
                            <p>Price: RM ${product.price.toFixed(2)}</p>
                            <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Add To Cart</button>
                         </div>
                    `;
                    productsContainer.append(productDiv); // Add product to container
                });
            }

            // Initially display all products
            renderProducts(products);

            // Filter products when category changes
            $('#category-filter').on('change', function () {
                var selectedCategory = $(this).val();

                if (selectedCategory === 'all') {
                    renderProducts(products); // Show all products
                } else {
                    var filteredProducts = products.filter(function (product) {
                        return product.category === selectedCategory; // Filter by selected category
                    });
                    renderProducts(filteredProducts); // Render filtered products
                }
            });
        },
        error: function () {
            alert("Failed to load products. Please try again.");
        }
    });
});

$(document).ready(function () {
    // Function to slide images within each category
    function slideCategory(categoryId, totalImages) {
        let currentIndex = 0;
        let slider = $("#" + categoryId + " .slider");
        
        setInterval(function () {
            // Increment currentIndex, reset if it exceeds the total images
            currentIndex = (currentIndex + 1) % totalImages;
            // Slide the category images
            slider.css("transform", "translateX(-" + (currentIndex * 220) + "px)");
        }, 3000); // Slide every 5 seconds
    }

    // Slide the food category
    slideCategory("slider", 3);

});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form fields
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare the data to send via AJAX
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the form data using AJAX
    $.ajax({
        url: 'http://localhost:3000/contact',  // Corrected this line
        type: 'POST',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(response) {
            // Handle success - show success message
            alert("Thank you! Your message has been sent.");
            document.getElementById('formResponse').textContent = "Thank you! Your message has been sent.";
            document.getElementById('formResponse').style.color = 'green';
            document.getElementById('formResponse').style.display = 'block';  // Make sure it's visible
            document.getElementById('contactForm').reset(); // Reset the form after submission
        },
        error: function(xhr, status, error) {
            // Handle error - show error message
            alert("Sorry, there was an error. Please try again later.");
            document.getElementById('formResponse').textContent = "Sorry, there was an error. Please try again later.";
            document.getElementById('formResponse').style.color = 'red';
            document.getElementById('formResponse').style.display = 'block';  // Make sure it's visible
        }
    });
});
