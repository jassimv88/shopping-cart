const boxesDiv = document.querySelector(".boxes")

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
const cartItems = [
]
populateProducts()

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
    newImg.src = 'https://images.pexels.com/photos/301448/pexels-photo-301448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    // or newImg.setAttribute('src', 'ps5.png');
    newBox.append(newImg);


    // const box1 = document.querySelector('#products#1');

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
    newButton.textContent = 'Add to Cart';
    newButton.setAttribute('data-id', products[i].id);
    newButton.addEventListener('click', addToCart);
    newBox.append(newButton);
  }
  // const productBtn = document.querySelector('.productButton')
  // productBtn.addEventListener('click', addToCart);
  

  // event listener for add to cart. function add to cart.
}


function addToCart() {
  const pId = parseInt(this.dataset.id);
  const product = products.find(function(p){
    return pId === p.id
  })
  cartItems.push(product);
  console.log(cartItems);
  loadCartItems();
}

function loadCartItems() {
  const cartContainer = document.querySelector('#cartItems');
  cartContainer.innerHTML = ""
  for(let item of cartItems) {
    let cartItemHtml = `
    <section class="bodyCart">
        <div class="cartItem">
          <img class="cartImg" src="ps5.png" alt="">
          <div class="itemDetail">
            <h5 >headsets</h5>
            <p class="itemPrice">${item.price}</p>
          </div>
          <div class="subTotal">
          ${item.price}
          </div>
          <button class="removeItemBtn">X</button>
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
}


