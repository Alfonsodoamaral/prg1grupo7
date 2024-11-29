let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let search = queryStringObj.get(`query`)
console.log(search);

let section = document.querySelector("#search section")
let h1 = document.querySelector("#search h1")

h1.innerHTML += `Resultados de busqueda para: ${search}`


fetch(`https://dummyjson.com/recipes/search?q=${search}`)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);

        if (data.recipes.length == 0) {
            h1.innerHTML = `No se encontraron resultados de busqueda para ${search}`
        } else {
            for (let i = 0; i < data.recipes.length; i++) {
                section.innerHTML +=
                    `
                <article>
                    <img src="${data.recipes[i].image}" alt="">
                    <h3>${data.recipes[i].name}<?h3>
                    <p>difficulty:${data.recipes[i].difficulty}</p>
                    <a href="detalle-receta.html?id=${data.recipes[i].id}">Link</a>
                </article>
            
            
            
            `
            }
        }
    })