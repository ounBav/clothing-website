// Mockup data
var products = [
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/special_product_1.jpg", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/special_product_1.jpg',
            '/src/images/special_product_2.jpg'
        ]
    },
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/cloth-1.webp", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/special_product_1.jpg',
            '/src/images/special_product_2.jpg'
        ]
    },
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/cloth-2.webp", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/cloth-2.webp',
            '/src/images/cloth-3.jpg'
        ]
    },
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/cloth-3.jpg", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/cloth-2.webp',
            '/src/images/cloth-3.jpg'
        ]
    },
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/cloth-4.jpg", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/special_product_1.jpg',
            '/src/images/special_product_2.jpg'
        ]
    },
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/cloth-5.jpg", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/special_product_1.jpg',
            '/src/images/special_product_2.jpg'
        ]
    },
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/cloth-6.jpg", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/special_product_1.jpg',
            '/src/images/special_product_2.jpg'
        ]
    },
    {
        title: "Product 1", 
        description: "the description of product 1", 
        productImg: "/src/images/cloth-7.jpg", 
        shopName: "Komsot Khmer Shop",
        price: "$10.00",
        categories: [
            '/src/images/special_product_1.jpg',
            '/src/images/special_product_2.jpg'
        ]
    },
];
// Create a function to generate the product card
function createProductCard() {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row px-xl-5';
    for(const product of products) {    
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3 col-md-4 col-sm-6 mt-4';

        // Create the card container
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card product-card shadow-sm border-0 rounded';
    
        // Create the image element
        const img = document.createElement('img');
        img.className = 'card-img-top rounded-top';
        img.alt = 'Gray Shirt';
        img.src = product.productImg;
    
        // Create the card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        // Create the title
        const title = document.createElement('h5');
        title.className = 'card-title text-center';
        title.textContent = product.title;
    
        // Create the shop description
        const shopDescription = document.createElement('p');
        shopDescription.className = 'card-text text-center text-muted';
        shopDescription.textContent = `From: ${product.shopName}`;
    
        // Create the price
        const price = document.createElement('p');
        price.className = 'card-text text-center';
        price.innerHTML = `<strong>${product.price}</strong>`;
    
        // Create the button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'd-flex justify-content-center';
    
        // Create the "Order Now" button
        const orderButton = document.createElement('a');
        orderButton.href = '#';
        orderButton.className = 'btn btn-outline-primary me-2';
        orderButton.textContent = 'Order Now';
    
        // Create the button group
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'btn-group';
    
        // Create the heart button
        const heartButton = document.createElement('button');
        heartButton.className = 'btn btn-light';
        heartButton.innerHTML = '<i class="fas fa-heart"></i>';
    
        // Create the eye button
        const eyeButton = document.createElement('button');
        eyeButton.className = 'btn btn-light';
        eyeButton.innerHTML = '<i class="fa fa-eye"></i>';
        eyeButton.onclick = function () {
            viewDetails(
                'Gray Shirt',
                'Komsot Khmer Shop',
                '$45.50',
                'A high-quality gray shirt.',
                product.productImg,
                product.categories
            );
        };
    
        // Create the cart button
        const cartButton = document.createElement('button');
        cartButton.className = 'btn btn-light';
        cartButton.innerHTML = '<i class="fa fa-shopping-cart"></i>';
    
        // Append buttons to the button group
        buttonGroup.appendChild(heartButton);
        buttonGroup.appendChild(eyeButton);
        buttonGroup.appendChild(cartButton);
    
        // Append buttons to the button container
        buttonContainer.appendChild(orderButton);
        buttonContainer.appendChild(buttonGroup);
    
        // Append elements to the card body
        cardBody.appendChild(title);
        cardBody.appendChild(shopDescription);
        cardBody.appendChild(price);
        cardBody.appendChild(buttonContainer);
    
        // Append image and body to the card container
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
    
        // Append the card container to the outer container
        colDiv.appendChild(cardDiv);

        rowDiv.appendChild(colDiv);
    }
    return rowDiv;
}

function insertToParent(id) {
    const productCard = createProductCard();
    const parentElement = document.querySelector(id);
    parentElement.appendChild(productCard);
}
// Call the function to create the product card
insertToParent('#girlCard')
insertToParent('#boyCard')
insertToParent('#kidCard')
insertToParent('#bayCard')

