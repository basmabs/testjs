var eml = document.getElementById('email');
var n = document.getElementById('nom');
var p = document.getElementById('prenom');
var s = document.getElementById('password');
var wd = document.getElementById('wr');


function register(e) {
  if (n.value == "") {
    n.classList.add('is-invalid')
    n.classList.remove('is-valid')
    document.getElementById('nameError').innerText = 'no name'
  }
  else {
    n.classList.add('is-valid')
    n.classList.remove('is-invalid')
    document.getElementById('nameError').innerText = ''
  }
  if (p.value == "") {
    p.classList.add('is-invalid')
    p.classList.remove('is-valid')
    document.getElementById('prenomError').innerText = 'no lastname'
  } else {
    p.classList.add('is-valid')
    p.classList.remove('is-invalid')
    document.getElementById('prenomError').innerText = ""
  }
  if (eml.value == "") {
    eml.classList.add('is-invalid')
    eml.classList.remove('is-valid')
    document.getElementById('emailError').innerText = 'no email'
  }
  else {
    eml.classList.add('is-valid')
    eml.classList.remove('is-invalid')
    document.getElementById('emailError').innerText = ""
  }
  if (s.value == "") {
    s.classList.add('is-invalid')
    s.classList.remove('is-valid')
    document.getElementById('mdpError').innerText = 'no pssword'
  } else {
    s.classList.add('is-valid')
    s.classList.remove('is-invalid')
    document.getElementById('mdpError').innerText = ""
  }

  if (wd.value == "") {
    wd.classList.add('is-invalid')
    wd.classList.remove('is-valid')
    document.getElementById('wError').innerText = 'wrong pssword'
  } else {
    wd.classList.add('is-valid')
    wd.classList.remove('is-invalid')
    document.getElementById('wError').innerText = ""
  }
  var table = JSON.parse(localStorage.getItem('users')) || [];
  const data = {
    "nom": n.value,
    "prenom": p.value,
    "email": eml.value,
    "password": s.value,
  };
  table.push(data);
  localStorage.setItem("users", JSON.stringify(table));
  window.open('login.html');
}
var e = document.getElementById("register")
e.addEventListener('click', register);

