let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");


fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function (res) {
        return res.json()
    })
    .then(function (data){
        console.log(data);

        let titulo = document.querySelector("#detalle-receta h1")
        titulo.innerHTML = data.name;

        let tiempo = document.querySelector("#detalle-receta-tiempo")
        tiempo.innerHTML = `tiempo de coccion: ${data.cookTimeMinutes} Minutos`

        let foto = document.querySelector("#detalle-receta-img")
        foto.innerHTML = `<img src="${data.image}"alt="portada">`;


        let instrucciones = document.querySelector("#detalle-receta-ol")
        for(let i = 0; i < data.instructions.length; i++) {
            instrucciones.innerHTML += `<li>${data.instructions[i]}</li>`

        }
       
        let categorias = document.querySelector("#detalle-receta-ul")
        for(let i = 0; i < data.tags.length; i++) {
            categorias.innerHTML += `<li><a href=detalle-categoria.html?id=${data.tags[i]}>${data.tags[i]}</a></li>`

        }
        console.log(data.difficulty)
        let nivelDificultad = document.querySelector("#detalle-receta-dificultad")
        nivelDificultad.innerHTML = `Nivel de dificultad: ${data.difficulty}`
    })
    .catch(function (error) {
        console.error("Error al cargar las recetas:", error);
    })