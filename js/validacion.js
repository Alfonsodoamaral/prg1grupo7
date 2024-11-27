formulario = document.querySelector("header form")
error = document.querySelector("header #error")
formulario.addEventListener("submit",function(e){
   
    e.preventDefault();
    
    input = document.querySelector("header form input")
    texto = input.value
    console.log(input.value);
    console.log(texto);

    if(texto.length == 0){
        alert("El campo esta vacio")
        error.innerHTML = 'El campo esta vacio'
    } else if (texto.length <= 2){
        alert('El campo debe tener al menos 3 caracteres')
        error.innerHTML = 'El campo debe tener al menos 3 caracteres'

        } else {
            this.submit()

        }

        
    
})