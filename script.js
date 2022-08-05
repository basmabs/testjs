const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

const addproduct = async () => {
  var nom = document.getElementById('productName')
  var description = document.getElementById('productDescription')
  var prix = document.getElementById('productPrice')
  var photo = document.getElementById('productPhoto')
  var form_error = false

  if (nom.value == "") {
    nom.classList.add('is-invalid')
    nom.classList.remove('is-valid')
    document.getElementById('checkname').innerHTML = ' name is missing '
    form_error = true
  }
  else {
    nom.classList.add('is-valid')
    nom.classList.remove('is-invalid')
    document.getElementById('checkname').innerHTML = ""
  }

  if (description.value == "") {
    description.classList.add('is-invalid')
    description.classList.remove('is-valid')
    document.getElementById('checkdescription').innerHTML = ' description is missing '
    form_error = true
  }
  else {
    description.classList.add('is-valid')
    description.classList.remove('is-invalid')
    document.getElementById('checkdescription').innerHTML = " "
  }
  if (prix.value == "") {
    prix.classList.add('is-invalid')
    prix.classList.remove('is-valid')
    document.getElementById('checkprice').innerHTML = ' price is missing '
    form_error = true
  }
  else {
    prix.classList.add('is-valid')
    prix.classList.remove('is-invalid')
    document.getElementById('checkprice').innerHTML = " "
  }
  if (photo.value == "") {
    photo.classList.add('is-invalid')
    photo.classList.remove('is-valid')
    document.getElementById('checkphoto').innerHTML = ' photo is missing '
    form_error = true
  }
  else {
    photo.classList.add('is-valid')
    photo.classList.remove('is-invalid')
    document.getElementById('checkphoto').innerHTML = " "
  }
  if (form_error == false) {

    var table = JSON.parse(localStorage.getItem('products')) || []
    var photoBase64 = "";
    if (photo.files.length > 0) {
      const image = photo.files[0];
      photoBase64 = await toBase64(image);
    }
    var product = {
      name: nom.value,
      description: description.value,
      price: prix.value,
      photo: photoBase64,
    }
    table.push(product)
    localStorage.setItem('products', JSON.stringify(table))
    location.href = 'dashboard.html'
  }
}
// var e = document.getElementById('addbutton')
// e.addEventListener('click', addproduct)


function showdata() {
  /* Getting the products from localStorage. If there are no products, it will return an empty array. */
  var products = JSON.parse(localStorage.getItem('products')) || []
  /* Getting the index of the product to be modified. */
  var index = localStorage.getItem('index')
  /* Getting the element with the id `productName` from the DOM. */
  var name = document.getElementById('productName')
  /* Getting the value of the product name from the localStorage and setting it to the input with the
  id `productName`. */
  name.value = products[index].name;
  var description = document.getElementById('productDescription')
  description.value = products[index].description

  var price = document.getElementById('productPrice')
  price.value = products[index].price
}

const modify = async () => {
  var nom = document.getElementById('productName')
  var description = document.getElementById('productDescription')
  var prix = document.getElementById('productPrice')

  var photo = document.getElementById('productPhoto')
  var form_error = false

  if (nom.value == "") {
    nom.classList.add('is-invalid')
    nom.classList.remove('is-valid')
    document.getElementById('checkname').innerHTML = ' name is missing '
    form_error = true
  }
  else {
    nom.classList.add('is-valid')
    nom.classList.remove('is-invalid')
    document.getElementById('checkname').innerHTML = ""
  }

  if (description.value == "") {
    description.classList.add('is-invalid')
    description.classList.remove('is-valid')
    document.getElementById('checkdescription').innerHTML = ' description is missing '
    form_error = true
  }
  else {
    description.classList.add('is-valid')
    description.classList.remove('is-invalid')
    document.getElementById('checkdescription').innerHTML = " "
  }
  if (prix.value == "") {
    prix.classList.add('is-invalid')
    prix.classList.remove('is-valid')
    document.getElementById('checkprice').innerHTML = ' price is missing '
    form_error = true
  } 
  else {
    prix.classList.add('is-valid')
    prix.classList.remove('is-invalid')
    document.getElementById('checkprice').innerHTML = " "
  }
  if (photo.value == "") {
    photo.classList.add('is-invalid')
    photo.classList.remove('is-valid')
    document.getElementById('checkphoto').innerHTML = ' photo is missing '
    form_error = true
  }
  else {
    photo.classList.add('is-valid')
    photo.classList.remove('is-invalid')
    document.getElementById('checkphoto').innerHTML = " "
  }
  if (form_error == false) {
    var products = JSON.parse(localStorage.getItem('products')) || [];
    var index = localStorage.getItem('index') || ''
    var product = products[index]
    var photoBase64 = "";
    if (photo.files.length > 0) {
      const image = photo.files[0];
      photoBase64 = await toBase64(image);
    }
    const data = {
      name: nom.value,
      description: description.value,
      price: prix.value,
      photo: photoBase64=="" ? product.photo : photoBase64
    }
    products.splice(index, 1, data)
    localStorage.setItem('products', JSON.stringify(products))
    location.href = 'dashboard.html'
  }
}

function dashboard() {
  var products = JSON.parse(localStorage.getItem("products")) || []
  var table = document.getElementById("list");
  products.map((product, index) => {
    table.innerHTML +=
      `
    <tr>
      <td>${index}</td>
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td>${product.price}</td>
      <td> <img src="${product.photo}" width="60px"></td>

      <td>
        <button id="add" type="button" class="btn btn-dark mb-2 mt-2 col-4" onclick="productfc(${index})">Update</button>
        <button class="btn btn-dark col-4" type="button" onclick="deletefc(${index})">Delete</button>
      </td>
  </tr>

  `
  });
}
function deletefc(index) {
  var products = JSON.parse(localStorage.getItem('products')) || []
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products))
  location.reload()
}
function productfc(index) {
  localStorage.setItem('index', index)
  location.href = 'modify.html'
}

