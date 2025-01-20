var recentProducts = [
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
];
function createProducts() {
    var recentProductsContainer = document.getElementById("recent-products");
    recentProducts.forEach(function (product) {
        var productItem = document.createElement("div");
        productItem.className = 'col-lg-3 col-md-4 col-sm-6 pb-1';
        productItem.innerHTML =
            "<div class=\"product-item bg-light mb-4\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"".concat(product.img_url, "\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">").concat(product.name, "</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$").concat(product.pirce, "</h5><h6 class=\"text-muted ml-2\"><del>$").concat(product.total_rating, "</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(").concat(product.total_rating, ")</small>\n                        </div>\n                    </div>\n                </div>");
        recentProductsContainer === null || recentProductsContainer === void 0 ? void 0 : recentProductsContainer.appendChild(productItem);
    });
}
//create products
createProducts();
