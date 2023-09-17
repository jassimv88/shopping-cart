// DECLARING VARIABLES
// product boxes
const boxesDiv = document.querySelector(".boxes")
// button that closes cart
const closeCartBtn = document.querySelector("#closeCart")
// cart
const cartContents = document.querySelector("#cart")
// cart button on top right
const openCartBtn = document.querySelector("#openCartButton")
// display of number of items in cart button
const numOfCartItems = document.querySelector("#numOfCartItems")
// products with images, name, price in array with embedded objects
const products = [
  {
    id: 1,
    product_name: "mouse",
    price: 5,
    image: "https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    product_name: "cat",
    price: 20,
    image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    product_name: "dog",
    price: 50,
    image: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    product_name: "pig",
    price: 100,
    image: "https://images.pexels.com/photos/63285/pig-alp-rona-furna-sow-63285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    product_name: "horse",
    price: 500,
    image: "https://images.pexels.com/photos/1996332/pexels-photo-1996332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    product_name: "elephant",
    price: 1000,
    image: "https://images.pexels.com/photos/3739327/pexels-photo-3739327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]
// cart items not yet declared
let cartItems = []

// ADDING NEW PRODUCT
populateProducts()

// CLICKING OF BUTTON TO OPEN/CLOSE CART
// closes cart when button is clicked
closeCartBtn.addEventListener('click', closeCartFunction)
// closes cart when button is clicked
function closeCartFunction() {
  cartContents.style.display = "none"
}
// opens cart when button is clicked
openCartBtn.addEventListener('click', openCartFunction)
// opens cart when button is clicked
function openCartFunction() {
  cartContents.style.display = "flex"
}

// ADDING NEW PRODUCT
function populateProducts() {
  // new box's html not yet declared
  boxesDiv.innerHTML = ""
  for (let i = 0; i <products.length; i++) {
      // replace line 46-55. Use document.createElement to create HTML elements. Refer to do list.
      // let htmlElement = `
      // <div class="box">
      // <img src="ps5.png" alt="">
      // <h3 class="description">${products[i].product_name}</h3>
      // <h4 class="price">$${products[i].price}</h4>
      // <button data-id=${products[i].id} class="productButton">+ Add to cart</button>
      // </div>
      // `;
      // boxesDiv.innerHTML+=htmlElement

    // declaring variables for ADDING NEW BOX
    const boxes = document.querySelector('.boxes');
    // creating new element for new box as a div
    let newBox = document.createElement('div');
    // adding class of box
    newBox.classList = 'box';
    // adding newBox to parent boxes
    boxes.append(newBox);
    // declaring variables for ADDING NEW IMG
    let newImg = document.createElement('img');
    // source of new image should = image of products[i]
    newImg.src = products[i].image;
      // or newImg.setAttribute('src', 'ps5.png');
    // adding newImg to parent newBox
    newBox.append(newImg);
      // let box1 = document.querySelector('#products#1');
      // let newImg1 = document.createElement('img');
      // newImg1.setAttribute('src', 'https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      // box1.append(newImg1);




    let newH3 = document.createElement('h3');
    newH3.classList = 'description';
    newH3.textContent =`${products[i].product_name}`;
    newBox.append(newH3);

    let newH4 = document.createElement('h4');
    // from MDN Internation Number Format
    const priceValue = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(products[i].price)
    newH4.textContent = priceValue;
    newBox.append(newH4);

    let newButton = document.createElement('button');
    newButton.classList = 'productButton';
    // Try to find product in cart items
  const productInCart = cartItems.find(function(p){
    return products[i].id === p.id
  })
  // If product exists in the cart, return
  if(productInCart){
    newButton.textContent = 'Already in Cart';
  }
  else{newButton.textContent = 'Add to Cart'}

    newButton.setAttribute('data-id', products[i].id);
    newButton.addEventListener('click', addToCart);
    newBox.append(newButton);
  }
  // const productBtn = document.querySelector('.productButton')
  // productBtn.addEventListener('click', addToCart);
  
  numOfCartItems.textContent = cartItems.length
  // event listener for add to cart. function add to cart.
}

// TOTALLING PRICE IN CART
// declaring variable for item price in cart
let price = document.querySelector(".itemPrice");
// adds up total price of cart items
function AddTotalPriceInCart() {
  // setting total cart price as not yet declared
  let cartTotalPrice = 0;
  // cartItems(line52) not yet assigned
  for (let i = 0; i < cartItems.length; i++) {
  // total cart price should += prices of cart items
    cartTotalPrice += cartItems[i].price;
  }
  // displays in console total price
  console.log(cartTotalPrice)
  // declaring variable for cartTotal(html line30)
  const cartTotal = document.querySelector('#cartTotal');
  // setting USD currency, change last value in ".format(...)"
  cartTotal.textContent = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(cartTotalPrice);
}


// ADDS ITEM/S TO CART ???????????????????????????????????
function addToCart() {
  // declaring variable for items with id(eg,1,2,3etc) converted from string to integer
  const pId = parseInt(this.dataset.id);
  // stored variable of array method find products(line13)
  const product = products.find(function(p){
  
    return pId === p.id
  })
  // Try to find product in cart items
  const productInCart = cartItems.find(function(p){
    return pId === p.id
  })
  // If product exists in the cart, return
  if(productInCart){
    return
  }
  cartItems.push(product);
  populateProducts();
  loadCartItems();
  AddTotalPriceInCart();
}

// LOADING ITEMS IN CART
function loadCartItems() {
  // declaring variable of cartItems(html line29)
  const cartContainer = document.querySelector('#cartItems');
  // HTML content of cartContainer not yet defined
  cartContainer.innerHTML = ""
  for(let item of cartItems) {
    // declaring variable of cart items from HTML using backticks
    let cartItemHtml = `
    <section class="bodyCart">
        <div class="cartItem">
          <img class="cartImg" src=${item.image} alt="">
          <div class="itemDetail">
            <h5 >headsets</h5>
            <p class="itemPrice">${item.price}</p>
          </div>
          <div class="subTotal">
          ${item.price}
          </div>
          <button class="removeItemBtn" data-id=${item.id}>X</button>
        </div>
        <div class="editAmount">
          Edit Amount
          <button type="button" class="minus">
            -
          </button>
          <span class="amount">
          ${item.price}
          </span>
          <span class="inCart">
            in cart
          </span>
          <button type="button" class="add">
            +
          </button>

        </div>
      </section>
    `
    cartContainer.innerHTML+=cartItemHtml
  }
const removeItemBtns = document.querySelectorAll('.removeItemBtn');
removeItemBtns.forEach(function(removeItemBtn){
  removeItemBtn.addEventListener("click", removeItemFromCart)
})
}

// REMOVING ITEM/S FROM CART
function removeItemFromCart() {
// declaring variable for items with id(eg,1,2,3etc)
  const itemId = this.dataset.id;
// array method filter returning element array thata meets call back condition  ????????????????????????????????????
  cartItems = cartItems.filter(function(item){
    return item.id !== parseInt(itemId);
  })
  loadCartItems();
  AddTotalPriceInCart();
}


