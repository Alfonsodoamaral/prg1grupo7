document.querySelector("h1").innerText = 'Hola'

let section = document.querySelector("#recetas-home");

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(function(result){
        console.log(result);
        for(let i = 0; i < 10; i ++){
            section.innerHTML += '<article class="receta">'
                <img src=${result.recipes[i].image} alt="">
                <div>
                    <h3>${result.recipes[i].name}</h3>
                    <p>${result.recipes[i].diffivulty}</p>
                    <a href="detalle-receta.html?id= ${result.recipes[i]}"></a>
                </div>
            </article>

        }
    })
