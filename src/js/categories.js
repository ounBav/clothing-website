function createCard() {
    var cardContainer = document.getElementById("cardContainer");
    for (var _i = 0, categoriesNames_1 = categoriesNames; _i < categoriesNames_1.length; _i++) {
        var category = categoriesNames_1[_i];
        //card body
        var card = document.createElement("div");
        card.className = "col-lg-3 col-md-4 col-sm-6 pb-1";
        //category link
        var a = document.createElement("a");
        a.className = "text-decoration-none";
        a.href = '';
        //body of img and title
        var body = document.createElement("div");
        body.className = "cat-item img-zoom d-flex align-items-center mb-4 bg-light";
        //body of image
        var imgDiv = document.createElement("div");
        imgDiv.className = "overflow-hidden";
        imgDiv.style.width = "100px";
        imgDiv.style.height = "100px";
        var img = document.createElement("img");
        img.src = category.imgUrl;
        //append img
        imgDiv.appendChild(img);
        //body of title and quantity
        var categoryNameDiv = document.createElement("div");
        categoryNameDiv.className = "flex-fill pl-3";
        var categoryName = document.createElement("h6");
        categoryName.textContent = category.name;
        var categoryQuantity = document.createElement("span");
        categoryQuantity.textContent = category.quantity.toString();
        //append title quantity 
        categoryNameDiv.appendChild(categoryName);
        categoryNameDiv.appendChild(categoryQuantity);
        //append categories details to body
        body.appendChild(imgDiv);
        body.appendChild(categoryNameDiv);
        a.appendChild(body);
        card.appendChild(a);
        //append card to container
        cardContainer.appendChild(card);
        console.log(card);
    }
}
var categoriesNames = [
    { name: "Electronics", quantity: 10, imgUrl: "/src/images/cat-1.jpg" },
    { name: "Fashion & Apparel", quantity: 25, imgUrl: "/src/images/cat-2.jpg" },
    { name: "Beauty & Personal Care", quantity: 8, imgUrl: "/src/images/cat-3.jpg" },
    { name: "Sports & Outdoors", quantity: 12, imgUrl: "/src/images/cat-4.jpg" },
    { name: "Books & Stationery", quantity: 15, imgUrl: "/src/images/cat-3.jpg" },
    { name: "Toys & Games", quantity: 21, imgUrl: "/src/images/cat-1.jpg" },
    { name: "Health & Wellness", quantity: 34, imgUrl: "/src/images/cat-2.jpg" },
    { name: "Groceries & Gourmet", quantity: 56, imgUrl: "/src/images/cat-1.jpg" },
    { name: "Automotive & Tools", quantity: 32, imgUrl: "/src/images/cat-4.jpg" },
    { name: "Baby & Kids", quantity: 12, imgUrl: "/src/images/cat-1.jpg" },
    { name: "Jewelry & Accessories", quantity: 43, imgUrl: "/src/images/cat-2.jpg" }
];
//create card
createCard();
