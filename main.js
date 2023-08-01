const boxesDiv = document.querySelector(".boxes")

const products = [
  {
    id: 1,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 2,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 3,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 4,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 5,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 6,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
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
    newImg.src = 'ps5.png';
    // or newImg.setAttribute('src', 'ps5.png');
    newBox.append(newImg);

    let newH3 = document.createElement('h3');
    newH3.classList = 'description';
    newH3.textContent =`${products[i].product_name}`;
    newBox.append(newH3);

    let newH4 = document.createElement('h4');
    newH4.textContent = `$${products[i].price}`;
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
}


