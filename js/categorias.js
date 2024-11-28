let section = document.querySelector("#home section");
fetch('https://dummyjson.com/recipes/tags')
.then(function (res) {
    return res.json()
})
.then(function (data){
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        section.innerHTML += `
            <article class="receta">
                
                    <a href="detalle-categoria.html?id=${data[i]}">${data[i]}</a>

            </article>
        `;
    }
})