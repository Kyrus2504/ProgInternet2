var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.3.min.js"; // Check https://jquery.com/ for the current version
document.getElementsByTagName("head")[0].appendChild(script);

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
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

getData("cars.json", function (text) {
  var data = JSON.parse(text);
  console.log(data);
  for (x = 0; x < data.length; x++) {
    var cardRow = document.createElement("div");
    var cardItems = document.getElementsByClassName("card-instance")[0];
    var cardRowContents = `
    
    <div class="card card-instance col mb-4" style="width: 33rem; height: 20rem; margin-left: 10%; margin-top: 3%;">
    <img class="card-img-top" src="" alt="Example Car Image"></img>
    <div class="card-body">
    <h5 class="card-title">${data[x].Name}</h5>
    <p class="card-description">${data[x].Description}</p>
    <p class="card-price" style="display: inline; margin-right: 25%; margin-top: 10%;">$${data[x].Price}</p>
    <a href="#" class="btn btn-primary" style="">Add to cart</a>
  </div>
</div>
`;
    cardRow.innerHTML = cardRowContents;
    cardItems.append(cardRow);
  }
});

function ready() {}

//shopping cart

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
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
}
