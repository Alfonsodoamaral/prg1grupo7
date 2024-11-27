let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log(id);

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);

        let titulo = document.querySelector("#detalle-receta h1")
        titulo.innerHTML = data.name;

        let tiempo = document.querySelector("#detalle-receta p")
        tiempo.innerHTML = `tiempo de coccion: ${data.cookTimeMinutes}`

        let foto = document.querySelector("detalle-receta img")
        foto.scr = data.image


        let instrucciones = document.querySelector("#detalle-receta ol")
        for(let i = 0; i < data.instructions.length; i++) {
            instrucciones.innerHTML += <li>${data.instructions[i]}</li>

        }
        
        let categorias = document.querySelector("#detalle-receta ul")
        for(let i = 0; i < data.tags.length; i++) {
            instrucciones.innerHTML += `<li><a href=detalle-categoria.html?id=${data.tags[i]}>${data.tags[i]}</a></li>`

        }
    })