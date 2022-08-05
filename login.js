function log(){
  var eml = document.getElementById("email");
  var ps = document.getElementById("password");
  if (eml.value=="") {
    eml.classList.add('is-invalid')
    eml.classList.remove('is-valid')
    document.getElementById('emer').innerText = "invalid e-mail"
  }
  else{
    eml.classList.add('is-valid')
    eml.classList.remove('is-invalid')
    document.getElementById('emer').innerText="";
  }

  if (ps.value=="") {
    ps.classList.add('is-invalid')
    ps.classList.remove('is-valid')
    document.getElementById('emer').innerText = "no password"
  }
  else{
    ps.classList.add('is-valid')
    ps.classList.remove('is-invalid')
    document.getElementById('pser').innerText ="";
  }
  
  var table = JSON.parse(localStorage.getItem("users"))|| [];
  var existuser = table.find(element=>element.email== eml.value && element.password==ps.value);
  console.log(existuser);
  if(existuser == undefined) {
    alert('user doesn\'t exist');
  }
  else{
    localStorage.setItem("connected",JSON.stringify(existuser));
    window.open('dashboard.html')
  }
}
var e = document.getElementById('buttonId');
e.addEventListener('click', log);

