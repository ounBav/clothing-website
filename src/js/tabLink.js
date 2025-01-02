function openPage(pageName,element,backgroundColor,color) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.backgroundColor = "";
      tabLinks[i].style.color = "";
    }
    document.getElementById(pageName).style.display = "block";
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  function viewDetails(name, shop, price, description, imgUrl, categories ) {
    const modalBody = document.getElementById('modalBody');
    let categoriesElements = '';
    for(const category of categories) {
      categoriesElements += `<img class="m-2 shadow-sm" style="width: 15%; cursor: pointer;" id="category-${categories.indexOf(category)}" src=${category} alt="Gray Shirt" onclick="ChangeImageCard('${category}')">`;
    }
    modalBody.innerHTML = `
    <div class="d-flex w-100">
      <div class="w-100 d-flex justify-content-center">
        <img class="w-100 p-2 shadow-sm" src=${imgUrl} alt="Gray Shirt" id="modalImage">
      </div>
      <div>
        <p style="margin-top: 10px;"><strong>Name:</strong> ${name}t</p>
        <p><strong>From:</strong> ${shop} </p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Features:</strong></p>
        <ul>
            <li>Comfortable fit</li>
            <li>Durable material</li>
            <li>Available in various sizes</li>
        </ul>
        <div class="d-flex justify-content-center" style="background-color: #f0f8ff;">
            ${categoriesElements}
        </div>
      </div>
    </div>
    <h1 class="mt-4">Related Product</h1>
    <div class="row">
        <!-- Product Card 1 -->
        <div class="col-12 col-sm-6 col-md-3 col-lg-4">
            <div class="card product-card">
                <img src="/src/images/special_product_1.jpg" class="card-img-top" alt="Gray Shirt">
                <div class="card-body">
                    <h5 class="card-title">Name: Gray Shirt</h5>
                    <p class="card-text">From: Komsot Khmer Shop</p>
                    <p class="card-text"><strong>Price: $45.50</strong></p>
                    <a href="#" class="btn btn-dark">Order Now</a>
                    <div class="btn-group">
                        <button class="btn btn-light"><i class="fa fa-heart-o"></i></button>
                        <button class="btn btn-light"><i class="fa fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    $('#detailsModal').modal('show');
  }

  function closeModal() {
    $('#detailsModal').modal('hide');
  }
  function ChangeImageCard(image) {
   $('#modalImage').attr('src', image);
  }

  

 