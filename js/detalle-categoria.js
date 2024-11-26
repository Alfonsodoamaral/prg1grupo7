let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get(`id`)
console.log(id);






fetch(`https://dummyjson.com/recipes/tag/${id}`)
.then(function(res){
   return res.json()


})
.then(function(data){
   console.log(data)


})
