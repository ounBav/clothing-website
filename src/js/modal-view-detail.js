function viewDetails(name, shop, price, description, imgUrl, categories) {
    const modalBody = document.getElementById('modalBody');

    // Generate category elements
    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'd-flex justify-content-center';
    categoriesContainer.style.backgroundColor = '#f0f8ff';

    categories.forEach((category, index) => {
        const categoryImg = document.createElement('img');
        categoryImg.className = 'm-2 shadow-sm';
        categoryImg.style.width = '15%';
        categoryImg.style.cursor = 'pointer';
        categoryImg.id = `category-${index}`;
        categoryImg.src = category;
        categoryImg.alt = 'Category Image';
        categoryImg.addEventListener('click', () => ChangeImageCard(category));
        categoriesContainer.appendChild(categoryImg);
    });

    // Generate recommended products
    const recommendProductContainer = document.createElement('div');
    const productRow = document.createElement('div');
    productRow.className = 'row';
    for (let i = 0; i < 10; i++) {

        const productCol = document.createElement('div');
        productCol.className = 'col-sm-6 col-md-3 col-lg-6';

        const productCard = document.createElement('div');
        productCard.className = 'card product-card';

        const productImg = document.createElement('img');
        productImg.className = 'card-img-top';
        productImg.src = '/src/images/special_product_1.jpg';
        productImg.alt = 'Gray Shirt';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = 'Name: Gray Shirt';

        const cardTextShop = document.createElement('p');
        cardTextShop.className = 'card-text';
        cardTextShop.textContent = 'From: Komsot Khmer Shop';

        const cardTextPrice = document.createElement('p');
        cardTextPrice.className = 'card-text';
        cardTextPrice.innerHTML = '<strong>Price: $45.50</strong>';

        const orderButton = document.createElement('a');
        orderButton.href = '#';
        orderButton.className = 'btn btn-dark';
        orderButton.textContent = 'Order Now';

        const btnGroup = document.createElement('div');
        btnGroup.className = 'btn-group';

        const heartButton = document.createElement('button');
        heartButton.className = 'btn btn-light';
        heartButton.innerHTML = '<i class="fa fa-heart-o"></i>';

        const cartButton = document.createElement('button');
        cartButton.className = 'btn btn-light';
        cartButton.innerHTML = '<i class="fa fa-shopping-cart"></i>';

        btnGroup.appendChild(heartButton);
        btnGroup.appendChild(cartButton);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardTextShop);
        cardBody.appendChild(cardTextPrice);
        cardBody.appendChild(orderButton);
        cardBody.appendChild(btnGroup);

        productCard.appendChild(productImg);
        productCard.appendChild(cardBody);

        productCol.appendChild(productCard);
        productRow.appendChild(productCol);

        recommendProductContainer.appendChild(productRow);
    }

    // Clear modal body and set new content
    modalBody.innerHTML = '';

    const modalContent = document.createElement('div');
    modalContent.className = 'd-flex w-100';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'w-100 d-flex justify-content-center';

    const modalImage = document.createElement('img');
    modalImage.className = 'w-100 p-2 shadow-sm';
    modalImage.src = imgUrl;
    modalImage.alt = 'Gray Shirt';
    modalImage.id = 'modalImage';

    imageContainer.appendChild(modalImage);

    const detailsContainer = document.createElement('div');

    const nameParagraph = document.createElement('p');
    nameParagraph.style.marginTop = '10px';
    nameParagraph.innerHTML = `<strong>Name:</strong> ${name}`;

    const shopParagraph = document.createElement('p');
    shopParagraph.innerHTML = `<strong>From:</strong> ${shop}`;

    const priceParagraph = document.createElement('p');
    priceParagraph.innerHTML = `<strong>Price:</strong> ${price}`;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.innerHTML = `<strong>Description:</strong> ${description}`;

    const featuresParagraph = document.createElement('p');
    featuresParagraph.innerHTML = '<strong>Features:</strong>';

    const featuresList = document.createElement('ul');
    ['Comfortable fit', 'Durable material', 'Available in various sizes'].forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.textContent = feature;
        featuresList.appendChild(featureItem);
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'd-flex justify-content-between align-items-center mt-2';

    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'btn btn-primary w-50 m-1';
    addToCartButton.textContent = 'Add To Cart';

    const buyNowButton = document.createElement('button');
    buyNowButton.className = 'btn btn-primary w-50 m-1';
    buyNowButton.textContent = 'Buy Now';

    buttonContainer.appendChild(addToCartButton);
    buttonContainer.appendChild(buyNowButton);

    detailsContainer.appendChild(nameParagraph);
    detailsContainer.appendChild(shopParagraph);
    detailsContainer.appendChild(priceParagraph);
    detailsContainer.appendChild(descriptionParagraph);
    detailsContainer.appendChild(featuresParagraph);
    detailsContainer.appendChild(featuresList);
    detailsContainer.appendChild(categoriesContainer);
    detailsContainer.appendChild(buttonContainer);

    modalContent.appendChild(imageContainer);
    modalContent.appendChild(detailsContainer);

    const relatedHeader = document.createElement('h1');
    relatedHeader.className = 'mt-4 mb-4 pl-3';
    relatedHeader.style.borderLeft = '1px solid #000';
    relatedHeader.textContent = 'Related Product';

    modalBody.appendChild(modalContent);
    modalBody.appendChild(relatedHeader);
    modalBody.appendChild(recommendProductContainer);

    // Show modal
    const detailsModal = document.getElementById('detailsModal');
    detailsModal.style.display = 'block';
    detailsModal.classList.add('show');
}

function closeModal() {
    const detailsModal = document.getElementById('detailsModal');
    detailsModal.style.display = 'none';
    detailsModal.classList.remove('show');
}

function ChangeImageCard(image) {
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = image;
    }
}
