let registro = document.querySelector(".registro");
let mailError = document.querySelector(".mailError");
let contraError = document.querySelector(".contraError");
let terminosCheckbox = document.querySelector("#terminosCheckbox");
let terminosError = document.querySelector(".terminosError");

registro.addEventListener("submit", function (e) {
    let valido = true;

    let email = document.querySelector("#email").value;
    if (email === "") {
        mailError.style.display = "block";
        mailError.textContent = "Por favor complete el campo";
        valido = false;
    } else {
        mailError.style.display = "none";
    }

    let password = document.querySelector("#password").value;
    if (password === "") {
        contraError.style.display = "block";
        contraError.textContent = "Por favor complete el campo";
        valido = false;
    } else {
        contraError.style.display = "none";
    }

    if (!terminosCheckbox.checked) {
        terminosError.style.display = "block";
        terminosError.textContent = "Debes aceptar los términos y condiciones";
        valido = false;
    } else {
        terminosError.style.display = "none";
    }

    if (!valido) {
        e.preventDefault();
    }
    console.log(email);
});
