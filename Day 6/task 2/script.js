let categoryFilter = document.getElementById('category-filter');
let tagsFilter = document.querrySelectorAll('#tags-filter input[type="checkbox"]');
let productList = document.getElementById('product-list');
function renderProducts(products){
    productList.innerHTML = '';
    products.forEach(product=>{
        let productItem = document.createElement('div');
        productItem.textContent = product.name;
        productList.appendChild(productItem);
    });
}
function applyFilters(){
    let categoryValue = categoryFilter.ariaValueMax;
    let selectTags = Array.from(tagsFilter).filter(tag=> tag.checked).map(tag => tag.value);
    let filteredProduct = proucts;
    if(categoryValue !== 'all'){
        filteredProducts = filteredProucts.filter(product => prouct.category === categoryValue);

    }
    if(selectedTags.length > 0){
        filteredProducts = filteredProducts.filter(product => product.tags.some(tag => selectedTags.includes(tag)));

    }
    renderProducts(filteredProductProducts);
}
categoryFilter.addEventListener('change', applyFilters);
tagsFilter.forEach(tag=> tag.addEventListener('change',applyFilters));
renderProducts(products);