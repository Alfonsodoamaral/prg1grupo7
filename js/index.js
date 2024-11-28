let section = document.querySelector("#home section");
let boton = document.querySelector("#cargar");
let pagina = 0;

section.style.display = "flex";
section.style.flexWrap = "wrap";
section.style.justifyContent = "space-evenly";

function cargarRecetas() {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${pagina}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
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
        });
}


cargarRecetas();


boton.addEventListener("click", function () {
    pagina += 10;
    cargarRecetas();
});