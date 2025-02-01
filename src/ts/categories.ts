interface Category {
    name: string;
    quantity: number;
    imgUrl: string
}

const categoriesNames: Array<Category> = [
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

function createCard(): void {
    const cardContainer = document.getElementById("cardContainer") as HTMLDivElement;

    for (const category of categoriesNames) {
        //card body
        const card: HTMLDivElement = document.createElement("div");
        card.className = "col-lg-3 col-md-4 col-sm-6 pb-1";
    
        //category link
        const a: HTMLAnchorElement = document.createElement("a");
        a.className = "text-decoration-none";
        a.href = '';
    
        //body of img and title
        const body: HTMLDivElement = document.createElement("div");
        body.className = "cat-item img-zoom d-flex align-items-center mb-4 bg-light";
    
        //body of image
        const imgDiv: HTMLDivElement = document.createElement("div");
        imgDiv.className = "overflow-hidden";
        imgDiv.style.width = "100px";
        imgDiv.style.height = "100px";
    
        const img: HTMLImageElement = document.createElement("img");
        img.src = category.imgUrl;
        //append img
        imgDiv.appendChild(img);
    
        //body of title and quantity
        const categoryNameDiv: HTMLDivElement = document.createElement("div");
        categoryNameDiv.className = "flex-fill pl-3";
    
        const categoryName: HTMLHeadElement = document.createElement("h6");
        categoryName.textContent = category.name;
    
        const categoryQuantity: HTMLSpanElement = document.createElement("span");
        categoryQuantity.textContent = category.quantity.toString() + 'Products';
        //append title quantity 
        categoryNameDiv.appendChild(categoryName)
        categoryNameDiv.appendChild(categoryQuantity)
    
        //append categories details to body
        body.appendChild(imgDiv);
        body.appendChild(categoryNameDiv);
        a.appendChild(body);
        card.appendChild(a);

        //append card to container
        cardContainer.appendChild(card);
        
    }
}




//create card
createCard();
  