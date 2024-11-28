let section = document.querySelector("#home section");
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get(`id`)
console.log(id);


fetch(`https://dummyjson.com/recipes/tag/${id}`)
.then(function(res){
   return res.json()
})
.then(function(data){
   console.log(data);
   for (let i = 0; i < data.recipes.length; i++) {
      section.innerHTML += `
          <article class="receta">
              <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}">
              <div>
                  <h3>${data.recipes[i].name}</h3>
                  <p>Dificultad: ${data.recipes[i].difficulty}</p>
                  <a href="./detalle-receta.html?id=${data.recipes[i].id}">Ver detalles</a>
              </div>
          </article>
      `;

  }
})
 .catch(function (error) {
            console.error("Error al cargar las recetas:", error);
        })