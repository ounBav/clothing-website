var saleOrderList = [
    {name: "Product 1", img: '../images/product-1.jpg', price: 10, priceAfterDiscount: 7, shop: { name: 'Cambodia Traditional Shop' }},
    {name: "Product 2", img: '../images/product-2.jpg', price: 10, priceAfterDiscount: 7, shop: { name: 'Cambodia Traditional Shop' }},
    {name: "Product 3", img: '../images/product-3.jpg', price: 10, priceAfterDiscount: 7, shop: { name: 'Cambodia Traditional Shop' }},
    {name: "Product 4", img: '../images/product-4.jpg', price: 10, priceAfterDiscount: 7, shop: { name: 'Cambodia Traditional Shop' }},
    {name: "Product 5", img: '../images/product-5.jpg', price: 10, priceAfterDiscount: 7, shop: { name: 'Cambodia Traditional Shop' }},
];

function createProductList() {
    var productDetail = document.getElementById("productDetail");
    if (!productDetail) {
        console.error("Element with ID 'productDetail' not found.");
        return;
    }

    // Create the main container
    var productListContainer = document.createElement('div');
    productListContainer.className = 'row g-3'; // Bootstrap row with gutters

    // Loop through Product Cards
    for (const product of saleOrderList) {
        // Create a product card
        var productCard = document.createElement('div');
        productCard.className = 'col-md-6 col-lg-4'; // Responsive column sizes

        var card = document.createElement('div');
        card.className = 'card shadow-sm h-100'; // Full height card

        // Create the flex container for image and card body
        var flexContainer = document.createElement('div');
        flexContainer.className = 'd-flex flex-column';

        // Create the image element
        var productImage = document.createElement('img');
        productImage.className = 'card-img-top img-fluid'; // Responsive image
        productImage.src = product.img;
        productImage.alt = product.name;

        // Create the card body
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Create the card title
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = product.name;

        // Create the list for price and shop
        var infoList = document.createElement('ul');
        infoList.className = 'list-unstyled'; // Remove default list styles

        var priceItem = document.createElement('li');
        priceItem.className = 'text-muted';
        priceItem.textContent = `Price: $${product.price}`;

        var shopItem = document.createElement('li');
        shopItem.className = 'text-muted';
        shopItem.textContent = `Shop: ${product.shop.name}`;

        infoList.appendChild(priceItem);
        infoList.appendChild(shopItem);

        // Append title and list to card body
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(infoList);

        // Append image and card body to flex container
        flexContainer.appendChild(productImage);
        flexContainer.appendChild(cardBody);

        // Append flex container to product card
        card.appendChild(flexContainer);
        productCard.appendChild(card);

        // Append product card to the main container
        productListContainer.appendChild(productCard);
    }

    // Create the pricing table
    var pricingCard = document.createElement('div');
    pricingCard.className = 'col-12 mt-3'; // Full width for pricing card

    var pricingTable = document.createElement('div');
    pricingTable.className = 'card shadow-sm';

    var table = document.createElement('table');
    table.className = 'table table-striped'; // Bootstrap table styles

    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ['Sale Price', 'Shipping Fee', 'Tax', 'Total Price'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    var bodyRow = document.createElement('tr');
    var values = ['$100', '$1', '$2', '$103'];
    values.forEach(function (value) {
        var td = document.createElement('td');
        td.textContent = value;
        bodyRow.appendChild(td);
    });
    tbody.appendChild(bodyRow);
    table.appendChild(tbody);

    pricingTable.appendChild(table);
    pricingCard.appendChild(pricingTable);

    // Append product list and pricing card to the main container
    productDetail.appendChild(productListContainer);
    productDetail.appendChild(pricingCard);
}

createProductList();