
axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')

.then(function (response) {
    const data = response.data;
    const products = data.recipes;
    const result = products.map( function (product) {
        return `
          <div>

            <h3>${product.title}</h3>

            <img src=${product.image_url} />

            <a href="details.html?id=${product.recipe_id}">details</a>

          </div>
        `
    }).join('');
    console.log(result);
    document.querySelector('.products').innerHTML = result;
});