const laptops = [
    {
        productName: "Dell XPS 13",
        productImg: "https://tiacotech.com.ng/wp-content/uploads/2024/08/image-42.jpg",
        productPrice: 999.99,
        quantity: 1,
      productDescription: "The Dell XPS 13 is an ultra-thin and lightweight laptop that features an InfinityEdge display, providing stunning visuals and powerful performance with its Intel Core i7 processor. Perfect for professionals on the go.",
      productFeatures: [
        "13.3-inch FHD display",
        "16 GB RAM",
        "512 GB SSD",
        "Up to 12 hours of battery life"
      ]
    },
    {
        productName: "Apple MacBook Air",
        productImg: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/161396-laptops-review-hands-on-macbook-air-review-image1-v2jzcb3rqd.jpg",
        productPrice: 1199.00,
        quantity: 1,
      productDescription: "The MacBook Air features Apple’s M1 chip, delivering impressive performance and efficiency. Its sleek design and Retina display make it a favorite among creatives and students alike.",
      productFeatures: [
        "13.3-inch Retina display",
        "8 GB RAM",
        "256 GB SSD",
        "All-day battery life"
      ]
    },
    {
        productName: "Lenovo ThinkPad X1 Carbon",
        productImg: "https://pcplaceng.com/wp-content/uploads/2023/04/Untitled-2021-11-02T174710.567.jpg",
        productPrice: 1399.99,
        quantity: 1,
      productDescription: "Designed for business professionals, the ThinkPad X1 Carbon boasts a premium build, robust security features, and a brilliant 4K display, ensuring productivity and efficiency in any environment.",
      productFeatures: [
        "14-inch 4K display",
        "16 GB RAM",
        "1 TB SSD",
        "Lightweight and durable design"
      ]
    },
    {
      productImg: "https://www.zdnet.com/a/img/resize/82ef73d73ca55b9b2c4e2eadb194e8dfb6e98e9e/2021/06/01/f142a480-28e0-48ab-8756-371966789aaf/hp-spectre-x360-14-main.jpg?auto=webp&width=1280",
      productName: "HP Spectre x360",
      productPrice: 1299.99,
      quantity: 1,
      productDescription: "This premium convertible laptop combines beauty and performance. With its stunning design and flexible 360-degree hinge, the Spectre x360 is perfect for both work and play.",
      productFeatures: [
        "13.3-inch FHD display",
        "16 GB RAM",
        "512 GB SSD",
        "Up to 14 hours of battery life"
      ]
    },
    {
      productImg: "https://images-na.ssl-images-amazon.com/images/I/711qq962gdL._SS400_.jpg",
      productName: "Acer Aspire 5",
      productPrice: 649.99,
      quantity: 1,
      productDescription: "The Acer Aspire 5 offers solid performance for everyday tasks at an affordable price. With a large display and a comfortable keyboard, it's ideal for students and casual users.",
      productFeatures: [
        "15.6-inch FHD display",
        "8 GB RAM",
        "256 GB SSD",
        "Great battery life for all-day use"
      ]
    }
  ];
  
// render products to the DOM
const cartContainer = document.getElementById("cart-list");

// handle increment
function incrementQuantity(param) {
   let clickProductName = param.target.id;

  // find the product in the array
  let product;
  for (item of laptops){
       if (item.productName === clickProductName) {
        product = item;
         break;
      }
  }

  // remove the product from the array
  let index = laptops.indexOf(product);
  laptops.splice(index,1);

  // remove the product card from the cart container
  let productCard = param.target.parentElement.parentElement;
  cartContainer.removeChild(productCard);
    
  // increment of quantity
  product.quantity++;

  // update the quantity element for this products
  let quantityEle = document.getElementById(`quantity-${clickProductName}`);

   quantityEle.textContent = product.quantity;
}

// handle decrement
function decrementQuantity(param){
  let clickProductName = param.target.id;

  // find the product in the array
  let product;
  for (item of laptops){
       if (item.productName === clickProductName) {
        product = item;
         break;
      }
  }

  // decrement of quantity
  if (product.quantity > 1) {
  product.quantity--;
  }
  
  // update the quantity element for this products
  let quantityEle = document.getElementById(`quantity-${clickProductName}`);

   quantityEle.textContent = product.quantity;

}

// decrement of quantity
if (product.quantity > 1) {
  product.quantity--;
}

// calculate total price
function sumProducts() {
  let total = 0
  for (product of laptops) {
    total += product.price * product.quantity
  }

  return total;
}

// get total element
const totalElem = document.getElementById("total")
totalElem.textContent = sumProducts();

// handle rendering of products
function renderProduct() {
    for (product of laptops) {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let productImg = document.createElement("img");
        productImg.src = product.productImg;

        let productName = document.createElement("h3");
        productName.textContent = product.productName;

        let productPrice = document.createElement("p");
        productPrice.textContent = product.productPrice;

        let productDescription = document.createElement("p");
        productDescription.textContent = product.productDescription;

        let productFeatures = document.createElement("p");
        productFeatures.textContent = product.productFeatures;

        // buttons  
        let incrementBtn = document.createElement("button");
        incrementBtn.textContent = "+";
        incrementBtn.setAttribute("id", product.productName);
        incrementBtn.addEventListener("click", function(eventobj) {
          incrementQuantity
        })

        let decrementBtn = document.createElement("button");
        decrementBtn.textContent = "-";
        decrementBtn.setAttribute("id", product.productName);
        decrementBtn.addEventListener("click", function(eventobj) {
          decrementQuantity
        })
        let quantity = document.createElement("p");
        quantity.textContent = 1;
        quantity.setAttribute("id", `quantity-${product.productName}`)

        let deleteEle = document.createElement("button")
        deleteEle.textContent = "Remove";
        deleteEle.setAttribute("id", product.productName);
        deleteEle.addEventListener("click", function(eventobj) {
          
        })

        let leftBox = document.createElement("div")
        leftBox.setAttribute("class", "left-box")

        leftBox.appendChild(decrementBtn);
        leftBox.appendChild(quantity);
        leftBox.appendChild(incrementBtn);

        let actionBox = document.createElement("div");
        actionBox.setAttribute("class", "action-box");
        actionBox.appendChild(leftBox);
        actionBox.appendChild(deleteEle);


        // add elements to products card
        productCard.appendChild(productImg);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productCard.appendChild(productFeatures);
        productCard.appendChild(actionBox);

        // add product card to the cart container
        cartContainer.appendChild(productCard);

    }
}
renderProduct();

// renderProducts
// calculate total price
// increment quantity
// decrement of quantity