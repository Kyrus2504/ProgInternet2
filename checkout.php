<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hertz UTS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <nav class="navbar">
        <a class="logo-anchor" href="index.php">
            <img class="logo-img" src="" alt="Hertz UTS Logo"></img>
        </a>

        <button class="shopping-cart">
            <img class="shopping-cart-img" src="" alt="Shopping Cart"></img>
        </button>
    </nav>
   
    <form style="width: 50%; margin-left: 33%;">
  <div class="form-group">
    <label>Email Address</label>
    <input type="email" class="form-control" id="checkoutEmail" placeholder="Enter your email">
  </div>
  <div class="form-group">
    <label>Debit Card Holder Name</label>
    <input type="text" class="form-control" id="cardName" placeholder="Enter your name">
    <small>PLEASE DO NOT PUT LEGITIMATE INFORMATION HERE</small>
  </div>
  <div class="form-group">
    <label>Debit Card Number</label>
    <input type="number" class="form-control" id="cardNumber" placeholder="Enter your card number">
    <small>PLEASE DO NOT PUT LEGITIMATE INFORMATION HERE</small>
  </div>
  <div class="form-group">
    <label>Debit Card Expiry</label>
    <input type="date" class="form-control" id="cardExpiry" placeholder="Enter your card expiry">
    <small>PLEASE DO NOT PUT LEGITIMATE INFORMATION HERE</small>
  </div>
  <div class="form-group">
    <label>Debit Card CVV</label>
    <input type="number" class="form-control" id="cardCVV" placeholder="Enter your card CVV">
    <small>PLEASE DO NOT PUT LEGITIMATE INFORMATION HERE</small>
  </div>
  <button type="submit" class="orderButton">Submit</button>
    </form>
  </body>
</html>

