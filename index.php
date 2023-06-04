<!doctype html>
<html lang="en">
<?php
session_start();
?>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hertz UTS</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

  <script type="text/javascript" src="cars.json"></script>
  <script defer src="script.js">
  </script>
</head>


<body onload="indexReady()">
  <nav class="navbar">
    <a class="logo-anchor" href="index.php">
      <img class="logo-img" src="imgs/Hertz UTS.png" alt="Hertz UTS Logo"></img>
    </a>

    <button class="shopping-cart btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img class="shopping-cart-img" src="imgs/shoppingCart.jpg" alt="Shopping Cart"></img>
    </button>


  </nav>


  <div class="row row-cols-1 row-cols-md-2">
    <div class="card-instance">
    </div>
  </div>

  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="cart-body">
            <div class="cart-instance">
              <span class="cart-item cart-header cart-column">Car</span>
              <span class="cart-price cart-header cart-column">Price</span>
              <span class="cart-quantity cart-header cart-column">Rent Days</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$0</span>
          </div>
          <button class="clear-cart-button" type="button">Clear Cart</button>
          <a class="checkout-button" href='checkout.php'>
            <button>Checkout</button>
            <a>
        </div>
      </div>
    </div>
  </div>
</body>

</html>