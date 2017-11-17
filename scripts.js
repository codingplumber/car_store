const cars = [
  { num: 1, make: 'Porsche', model: '911', price: '65,000' },
  { num: 2, make: 'Ford', model: 'Mustang', price: '50,000' },
  { num: 3, make: 'BMW', model: '440i', price: '55,000' },
  { num: 4, make: 'Tesla', model: 'Model S', price: '75,000' },
  { num: 5, make: 'Volkswagen Toy', model: 'Bus', price: '1.50' }
];

window.addEventListener('load', populatePage);

function carSearch() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("car-search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function populatePage() {
  for (let i = 0; i < cars.length; i++) {
    switch(cars[i]) {
      case cars[0]:
        document.getElementById('num1').innerHTML = cars[0].num;
        document.getElementById('make1').innerHTML = cars[0].make;
        document.getElementById('model1').innerHTML = cars[0].model;
        document.getElementById('price1').innerHTML = '$' + cars[0].price;
        break;
      case cars[1]:
        document.getElementById('num2').innerHTML = cars[1].num;
        document.getElementById('make2').innerHTML = cars[1].make;
        document.getElementById('model2').innerHTML = cars[1].model;
        document.getElementById('price2').innerHTML = '$' + cars[1].price;
        break;
      case cars[2]:
        document.getElementById('num3').innerHTML = cars[2].num;
        document.getElementById('make3').innerHTML = cars[2].make;
        document.getElementById('model3').innerHTML = cars[2].model;
        document.getElementById('price3').innerHTML = '$' + cars[2].price;
        break;
      case cars[3]:
        document.getElementById('num4').innerHTML = cars[3].num;
        document.getElementById('make4').innerHTML = cars[3].make;
        document.getElementById('model4').innerHTML = cars[3].model;
        document.getElementById('price4').innerHTML = '$' + cars[3].price;
        break;
      case cars[4]:
        document.getElementById('num5').innerHTML = cars[4].num;
        document.getElementById('make5').innerHTML = cars[4].make;
        document.getElementById('model5').innerHTML = cars[4].model;
        document.getElementById('price5').innerHTML = '$' + cars[4].price;
        break;
    }
  }
}

function getTotalPrice(price) {
  price = price.split('')
  for (var i = 0; i < price.length; i++) {
    if (price[i] === ',') {
      price.splice(i, 1)
    }
  }

  let p = price.join('');

  document.getElementById('modal-price').innerHTML = '$' + ((p * 1.08).toFixed(2));

  document.getElementById('modal').setAttribute('class', 'show');
}

function closeModal() {
  document.getElementById('modal-price').innerHTML = '';
  document.getElementById('modal').removeAttribute('class');
}
