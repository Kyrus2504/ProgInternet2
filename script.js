var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.3.min.js"; // Check https://jquery.com/ for the current version
document.getElementsByTagName("head")[0].appendChild(script);

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//Shopping Cart & Add to Cart functions

function ready() {
  var removeItemButton = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeItemButton.length; i++) {
    var button = removeItemButton[i];
    button.addEventListener("click", removeCartItem);
  }

  var removeCartButton =
    document.getElementsByClassName("clear-cart-button")[0];
  removeCartButton.addEventListener("click", removeCartContent);

  var addToCartButtons = document.getElementsByClassName("add-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", function () {
      addToCartClicked;
    });
  }
  console.log(addToCartButtons);

  var changeQuantity = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < changeQuantity.length; i++) {
    var quantityInput = changeQuantity[i];
    quantityInput.addEventListener("change", changeQuantities);
  }

  console.log("Ready complete");

  //checkout button, couldnt get to work
  /*var addToCartButtons = document.getElementsByClassName("submit-order");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", submitOrder);
  }*/
  //cart
}

function removeCartItem(event) {
  var removeButton = event.target;
  var sessionTitle = removeButton.parentElement.parentElement
    .getElementsByClassName("cart-item")[0]
    .getElementsByClassName("cart-item-title")[0].textContent;
  sessionStorage.removeItem(sessionTitle);
  console.log(sessionStorage);
  removeButton.parentElement.parentElement.remove();
  console.log("pre remove button update cart reached");
  updateCartTotal();
}

function removeCartContent() {
  var cartBody = document.getElementsByClassName("cart-body")[0];
  cartBody.innerHTML = `<div class="cart-instance">
  <span class="cart-item cart-header cart-column">Car</span>
  <span class="cart-price cart-header cart-column">Price</span>
  <span class="cart-quantity cart-header cart-column">Rent Days</span>
</div>
</div>`;
  sessionStorage.clear();
  console.log(sessionStorage);
  updateCartTotal();
}

function addToCartClicked(event) {
  console.log("Add to cart clicked");
  var button = event;
  console.log(button);
  var Item = button.parentElement.parentElement;
  var title = Item.getElementsByClassName("card-title")[0].innerText;
  console.log(title);
  var price = Item.getElementsByClassName("card-price")[0].innerText;
  console.log(price);
  var image = Item.getElementsByClassName("card-img-top")[0].src;
  console.log(image);
  quantity = 1;
  addItemToCart(title, price, image, quantity);
  sessionStorage.setItem(title, [title, price, image, quantity]);
  console.log(sessionStorage.getItem(title));
  console.log("Reached pre update cart");
  updateCartTotal();
}

function changeQuantities(event) {
  console.log("Change Quantities reached");
  var input = event;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  } else {
    input.value = event.value;
  }
  //session storage bit
  var sessionTitle = event.parentElement.parentElement
    .getElementsByClassName("cart-item")[0]
    .getElementsByClassName("cart-item-title")[0].textContent;
  var sessionImage = event.parentElement.parentElement
    .getElementsByClassName("cart-item")[0]
    .getElementsByClassName("cart-item-image")[0].src;
  var sessionPrice = event.parentElement.parentElement.getElementsByClassName(
    "cart-price-instance"
  )[0].textContent;
  console.log(sessionPrice);
  sessionStorage.setItem(sessionTitle, [
    sessionTitle,
    sessionPrice,
    sessionImage,
    event.value,
  ]);
  console.log(sessionStorage.getItem(sessionTitle));
  updateCartTotal();
}

function addItemToCart(title, price, image, quantity) {
  var cartRow = document.createElement("div");
  var cartItems = document.getElementsByClassName("cart-body")[0];
  //var cartItemRows = document.getElementsByClassName("cart-row");
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      var cartQuantityUpdate = cartItems[i];
      cartQuantityUpdate.querySelector(".cart-quantity-input").value += 1;
      console.log(
        cartQuantityUpdate.querySelector(".cart-quantity-input").value
      );
      return;
    }
  }
  var cartRowContents = `
  <div class="cart-row">
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${image}" width="50" height="50">
      <span class="cart-item-title" value="${title}">${title}</span>
    </div>
    <span class="cart-price cart-price-instance cart-column" value="${price}">${price}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="${quantity}" oninput="changeQuantities(this)">
      <button style="display: flex;" class="btn btn-danger btn-instance" type="button">REMOVE</button>
    </div>
  </div>
`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
}

function updateCartTotal() {
  console.log("reached update cart");
  var cartItemContainer = document.getElementsByClassName("cart-body")[0];
  console.log(cartItemContainer);
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  console.log(cartRows);
  var total = 0;
  for (var x = 0; x < cartRows.length; x++) {
    var cartRow = cartRows[x];
    var price = cartRow.getElementsByClassName("cart-price")[0];
    console.log(price);
    var quantity = cartRow.getElementsByClassName("cart-quantity-input")[0];
    console.log(quantity);
    var actualPrice = parseFloat(price.innerText.replace("$", ""));
    var actualQuantity = quantity.value;
    total = total + actualPrice * actualQuantity;
  }
  total = Math.round(total * 100) / 100;
  console.log(total);
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

async function getData(file, callback) {
  var dataSrc = new XMLHttpRequest();
  dataSrc.overrideMimeType("application/json");
  dataSrc.open("GET", file, true);
  dataSrc.onreadystatechange = function () {
    if (dataSrc.readyState === 4 && dataSrc.status == "200") {
      callback(dataSrc.responseText);
    }
  };
  dataSrc.send(null);
}

//usage:

function indexReady() {
  getData("cars.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
    for (x = 0; x < data.length; x++) {
      var cardRow = document.createElement("div");
      var cardItems = document.getElementsByClassName("card-instance")[0];
      var cardRowContents = `
    
    <div class="card card-instance col mb-4" style="width: 33rem; height: 20rem; margin-left: 10%; margin-top: 3%;">
    <img class="card-img-top" src="${data[x].Image}" alt="${data[x].Name} Car Image" style="width: 160px; height: 90px; margin-left: 33%;"></img>
    <div class="card-body">
    <h5 class="card-title">${data[x].Name}</h5>
    <p class="card-description">${data[x].Description}</p>
    <p class="card-price" style="display: inline; margin-right: 25%; margin-top: 10%;">$${data[x].Price}</p>
    <input type="submit" value="Add to Cart" onclick="addToCartClicked(this)" class="add-item-button"></input>
  </div>
</div>
`;
      cardRow.innerHTML = cardRowContents;
      cardItems.append(cardRow);
    }
  });
}

//shopping cart

/*const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("open modal reached");
    const modal = document.querySelector(button.dataset.modalTarget);
    console.log(modal);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modalCart.active");
  modals.forEach((modal) => {
    console.log("close modal reached");
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modalCart");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}*/
