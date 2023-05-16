<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hertz UTS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

  <script type="text/javascript" src="cars.json"></script>
  <script defer src="script.js"></script>
    <nav class="navbar">
        <a class="logo-anchor" href="index.php">
            <img class="logo-img" src="" alt="Hertz UTS Logo"></img>
        </a>

        <button class="shopping-cart" data-modal-target="#modal">
            <img class="shopping-cart-img" src="" alt="Shopping Cart"></img>
        </button>
    </nav>
    <div class="row row-cols-1 row-cols-md-2">
    <div class="card-instance">
</div>
</div>


<div class="modal" id="modal">
    <div class="modal-header">
      <div class="title">Shopping Cart</div>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="cart-body">
    <div class="cart-instance">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
    </div>
    <div class="cart-footer">
      <div class ="cart-item-list">
        
      </div>
    <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0</span>
            </div>
  <button class="clear-cart-button" type="button">Clear Cart</button>
  <a class="checkout-button" href='checkout.php'>
    <button >Checkout</button>
    <a>
</div>
  </div>
  
  <div id="overlay"></div>
  </body>
</html>
