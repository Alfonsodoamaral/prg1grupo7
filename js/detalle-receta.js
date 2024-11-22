let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
console.log(id);

let main = document.querySelector("#detalle-receta main");

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);

        let instrucciones = '';
        for (let i = 0; i < result.instructions.length; i++) {
            instrucciones += `<li>${result.instructions[i]}</li>`;
        }

        main.innerHTML = `
        <img src="${result.image}" alt="">
        <div>
            <h1>${result.name}</h1>
            <p>${result.cookTimeMinutes}</p>
            <h3>Instrucciones</h3>
            <ol>
                ${instrucciones}
            </ol>
            <h3>Categorías</h3>
            <ul>
                <li>Pizza</li>
                <li>Italian</li>
            </ul>
            <h3>Dificultad</h3>
            <p>Fácil</p>
        </div>
        `;
    })
    .catch(function(error) {
        console.error("Error encontrando la receta:", error);
    })

