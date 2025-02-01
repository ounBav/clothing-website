function createProductList() {
    const productDetail = document.getElementById('productDetail') as HTMLDivElement;

    // Check if productDetail exists
    if (!productDetail) {
        console.error("Element with ID 'productDetail' not found.");
        return; // Exit the function if the element is not found
    }

    // Create the main container
    const productListContainer = document.createElement('div');
    productListContainer.className = 'col-md-6';

    // Create the card list container
    const cardList = document.createElement('div');
    cardList.className = 'card-list';

    // Create a product card
    const productCard = document.createElement('div');
    productCard.className = 'card shadow-sm';

    // Create the flex container for image and card body
    const flexContainer = document.createElement('div');
    flexContainer.className = 'd-flex';

    // Create the image element
    const productImage = document.createElement('img');
    productImage.className = 'img-thumbnail';
    productImage.src = '../images/product-1.jpg';
    productImage.alt = '';
    productImage.width = 100;
    productImage.height = 100;

    // Create the card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create the card title
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Product Name';

    // Create the list for price and shop
    const infoList = document.createElement('ul');
    const priceItem = document.createElement('li');
    priceItem.textContent = 'Price: $10';
    const shopItem = document.createElement('li');
    shopItem.textContent = 'Shop: Shop1';
    infoList.appendChild(priceItem);
    infoList.appendChild(shopItem);

    // Append title and list to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(infoList);

    // Append image and card body to flex container
    flexContainer.appendChild(productImage);
    flexContainer.appendChild(cardBody);

    // Append flex container to product card
    productCard.appendChild(flexContainer);

    // Append product card to card list
    cardList.appendChild(productCard);

    // Create the pricing table
    const pricingCard = document.createElement('div');
    pricingCard.className = 'card mt-3';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Sale Price', 'Shipping Fee', 'Tax', 'Total Price'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const bodyRow = document.createElement('tr');
    const values = ['$100', '$1', '$2', '$103'];

    values.forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        bodyRow.appendChild(td);
    });

    tbody.appendChild(bodyRow);
    table.appendChild(tbody);
    pricingCard.appendChild(table);
    productListContainer.appendChild(cardList);
    productListContainer.appendChild(pricingCard);
    // Append card list and pricing card to the main container
    productDetail.appendChild(productListContainer);
}

createProductList();