
  function addToCart(event) {
    event.preventDefault();
    var productName = event.target.getAttribute("data-product");
    var message = "Login required to add " + productName + " to cart.";
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
    messageDiv.style.display = "block";
    // Redirect to login/register page
    window.location.href = "login.html";
  }

  var cartButtons = document.getElementsByClassName("cart-btn");
  for (var i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener("click", addToCart);
  }

