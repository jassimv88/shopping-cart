const boxesDiv = document.querySelector(".boxes")

const closeCartBtn = document.querySelector("#closeCart")
const cartContents = document.querySelector("#cart")

const openCartBtn = document.querySelector("#openCartButton")

const numOfCartItems = document.querySelector("#numOfCartItems")



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
let cartItems = [
]
populateProducts()

closeCartBtn.addEventListener('click', closeCartFunction)

function closeCartFunction() {
  cartContents.style.display = "none"
}
openCartBtn.addEventListener('click', openCartFunction)

function openCartFunction() {
  cartContents.style.display = "flex"
}


function populateProducts() {
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


    const boxes = document.querySelector('.boxes');

    let newBox = document.createElement('div');
    newBox.classList = 'box';
    boxes.append(newBox);

    let newImg = document.createElement('img');
    newImg.src = products[i].image;
    // or newImg.setAttribute('src', 'ps5.png');
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


let price = document.querySelector(".itemPrice");


function AddTotalPriceInCart() {
  let cartTotalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cartTotalPrice += cartItems[i].price;
  }
  console.log(cartTotalPrice)
  const cartTotal = document.querySelector('#cartTotal');
  cartTotal.textContent = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(cartTotalPrice);
}




function addToCart() {
  const pId = parseInt(this.dataset.id);
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

function loadCartItems() {
  const cartContainer = document.querySelector('#cartItems');
  cartContainer.innerHTML = ""
  for(let item of cartItems) {
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
function removeItemFromCart() {
  const itemId = this.dataset.id;
  cartItems = cartItems.filter(function(item){
    return item.id !== parseInt(itemId);
  })
  loadCartItems();
  AddTotalPriceInCart();
}

