let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
console.log(id);

let main = document.querySelector("#detalle-receta main");

fetch (`https://dummyjson.com/recipes/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let titulo = document.querySelector("#detalle-receta h1")
        titulo.innerHTML = data.name;

        let tiempo = document.querySelector("#detalle-receta p")
        tiempo.innerHTML = `tiempo de coccion: ${data.cookTimeMinutes}`

        let foto = document.querySelector("#detalle-receta img")
        foto.src = data.image

        let instrucciones = document.querySelector("#detalle-receta ol")
        for(let i =0; i < data.instrucciones.length; i++){
            instrucciones.innerHTML += `<li> ${data.instrucciones[i]} </li>`
    }
})