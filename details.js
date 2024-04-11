const urlparams = new URLSearchParams(window.location.search);
const id = urlparams.get('id');

axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
.then(function (recipes) {
    const data = recipes.data;
    const {title,image_url,ingredients} = data.recipe;
 
     document.querySelector(".title").textContent = title;
     document.querySelector("img").src = image_url;
     const result = ingredients.map(function(ele)
     {
         return `
         <li>${ele}</li>
         `;
     }).join('');
     document.querySelector(".ingredients").innerHTML = result;

});