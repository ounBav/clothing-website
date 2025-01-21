interface Product {
    img_url:string,
    name:string,
    pirce: number,
    total_rating:number
}

const recentProducts: Array<Product> = [
    {
        img_url: "/src/images/product-1.jpg",
        name: "Product Name",
        pirce: 123.00,
        total_rating: 99
    },
    {
        img_url: "/src/images/product-2.jpg",
        name: "Product Name",
        pirce: 123.00,
        total_rating: 99
    },
    {
        img_url: "/src/images/product-3.jpg",
        name: "Product Name",
        pirce: 133.00,
        total_rating: 99
    },
    {
        img_url: "/src/images/product-4.jpg",
        name: "Product Name",
        pirce: 1223.00,
        total_rating: 99
    },
    {
        img_url: "/src/images/product-5.jpg",
        name: "Product Name",
        pirce: 323.00,
        total_rating: 99
    },
    {
        img_url: "/src/images/product-6.jpg",
        name: "Product Name",
        pirce: 128.00,
        total_rating: 99
    },
    {
        img_url: "/src/images/product-7.jpg",
        name: "Product Name",
        pirce: 173.00,
        total_rating: 99
    },
    {
        img_url: "/src/images/product-8.jpg",
        name: "Product Name",
        pirce: 153.00,
        total_rating: 99
    }
]


function createProducts() {
    const recentProductsContainer = document.getElementById("recent-products");
    recentProducts.forEach(product => {
        const productItem: HTMLElement = document.createElement("div");
        productItem.className = 'col-lg-3 col-md-4 col-sm-6 pb-1';
        productItem.innerHTML = 
                `<div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="${product.img_url}" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${product.name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$${product.pirce}</h5><h6 class="text-muted ml-2"><del>$${product.total_rating}</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(${product.total_rating})</small>
                        </div>
                    </div>
                </div>`

        recentProductsContainer?.appendChild(productItem);
    });
}


//create products
createProducts();
