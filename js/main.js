function borrar() {
  document.getElementById("pantalla").value = ``;
}

function agregar(id) {
  document.getElementById("pantalla").value += `${
    document.getElementById(id).value
  }`;
}

function resultado() {
  let ans = eval(document.getElementById("pantalla").value);

  document.getElementById("pantalla").value = ans;
}
