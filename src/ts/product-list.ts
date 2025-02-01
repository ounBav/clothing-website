interface ProductInterface {
    image: string;
    title: string;
    price: string;
  }
  
  const products: ProductInterface[] = [
    {
      image: "../images/product-1.jpg",
      title: "Product Title",
      price: "$29.99",
    },
    {
      image: "../images/product-2.jpg",
      title: "Product Title",
      price: "$39.99",
    },
    {
      image: "../images/product-3.jpg",
      title: "Product Title",
      price: "$49.99",
    },
    {
      image: "../images/product-4.jpg",
      title: "Product Title",
      price: "$49.99",
    },
  ];
  
  const productContainer = document.createElement('div');
  productContainer.className = 'row';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'col-md-3';
  
    productCard.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" class="product-img">
        <div class="product-info">
          <div class="product-title">${product.title}</div>
          <div class="product-price">${product.price}</div>
        </div>
      </div>
    `;
  
    productContainer.appendChild(productCard);
  });
  
  document.body.appendChild(productContainer); // Or append to a specific element