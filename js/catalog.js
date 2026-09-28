let allProducts = [];

fetch("data/products.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    allProducts = data;
    renderCard(allProducts, "coffee");
  })
  .catch(function (error) {
    console.error("Памылка загрузкі products.json:", error);
  });

function createCard(product, index) {
  const imagePath =
    "assets/" +
    product.category +
    "/" +
    product.category +
    "-" +
    (index + 1) +
    ".png";
  const card = document.createElement("article");
  card.className = "catalog-card";
  card.innerHTML = `
    <div class="catalog-card__img-wrap">
      <img src="${imagePath}" alt="${product.name}" class="catalog-card__img">
    </div>
    <div class="catalog-card__info">
      <h2 class="catalog-card__title">${product.name}</h2>
      <p class="catalog-card__text">${product.description}</p>
      <span class="catalog-card__price">${product.price}</span>
    </div>
    `;
  return card;
}

function renderCard(products, category) {
  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = "";

  const filtered = products.filter(function (product) {
    return product.category === category;
  });
  filtered.forEach(function (product, index) {
    const card = createCard(product, index);
    grid.appendChild(card);
  });
}
