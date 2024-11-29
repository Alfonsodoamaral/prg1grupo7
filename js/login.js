let form = document.querySelector("#loginForm");

form.addEventListener("submit", function (e) {
  let emailInput = document.querySelector("#email"); 
  let passwordInput = document.querySelector("#password"); 

  
  if (emailInput.value === "") {
    alert("Por favor complete el campo email");
    e.preventDefault(); 
    return;
  }

 
  if (passwordInput.value === "") {
    alert("Por favor complete el campo contraseña");
    e.preventDefault(); 
    return;
  }
});
