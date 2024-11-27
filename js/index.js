let section = document.querySelector("#home section");
fetch(`https://dummyjson.com/recipes?limit=10&skip=${pagina}`)
    .then(function(res) {
        return res.json();
  })
  .then(function(data){
    console.log(data);
    for (let i = 0; i < 10; i++) {  
            section.innerHTML += `
                <article class="receta">
                    <img src="${recipes[i].image}" alt="">
                    <div>
                        <h3>${recipes[i].name}</h3>
                        <p>Dificultad: ${recipes[i].difficulty}</p>
                        <a href="./detalle-receta.html?id=${recipes[i].id}">Ir al detalle</a>
                    </div>
                </article>`;
        }
  })

    let boton = document.querySelector("#cargar") 
    let pagina = 0
    
    boton.addEventListener("click", function(){
        console.log(pagina);
        pagina += 10;
        console.log(pagina);
        fetch(`https://dummyjson.com/recipes?limit=10&skip=${pagina}`)
            .then(function(res){
                return res.json()
        })
        .then(function(data){
            console.log(data);
    
            for (let i = 0; i < data.recipes.length; i++) {
                section.innerHTML +=`
                    <article>
                        <img src="${data.recipes[i].image}" alt=""> 
                        <h3>${data.recipes[i].name}</h3>
                        <p>${data.recipes[i].difficulty}</p>
                        <a href="detalle-receta-html?id=${data.recipes[i].id}">link</a>
                    </article>
        `;
            }
        })
}) 