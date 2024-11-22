fetch('https://dummyjson.com/recipes')
  .then(function(res) {
    return res.json();
  })
  .then(function(result) {
    let recipes = result.recipes; 
    let recipeContent = ""; 
    let section = document.querySelector("#recetas-home");


    section.style.display = "flex";
    section.style.flexWrap = "wrap";
    section.style.justifyContent = "space-evenly";

    for (let i = 0; i < 10; i++) {
      recipeContent += `
                <article class="receta">
                    <img src="${recipes[i].image}" alt="Imagen de ${recipes[i].name}">
                    <div>
                        <h3>${recipes[i].name}</h3>
                        <p>Dificultad: ${recipes[i].difficulty}</p>
                        <a href="./detalle-receta.html?id=${recipes[i].id}">Ir al detalle</a>
                    </div>
                </article>`;
    }

    console.log(recipeContent);
    section.innerHTML = recipeContent; 
  })
  .catch(function(error) {
    console.log("Error: ", error); 
  });
