const getInputValue = (id: string) => {
  const inputField = document.getElementById(id) as HTMLInputElement;
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const addProduct = () => {
  const name = getInputValue("product-name");
  const quantity = getInputValue("product-quantity");

  if (!isNaN(+name) || !Number.isInteger(+quantity) || !quantity) {
    alert("Wrong Input");
    return;
  }
  setProductInLocalStorage(name, quantity);
};

const getProductsFromLocalStorage = () => {
  const storedProduct = localStorage.getItem("allProduct");
  if (!storedProduct) {
    return {};
  }
  return JSON.parse(storedProduct);
};

const setProductInLocalStorage = (name: string, quantity: string) => {
  const products = getProductsFromLocalStorage();

  if (products[name]) {
    const totalQty = +products[name] + +quantity;
    quantity = totalQty + "";
  }

  if (parseInt(quantity) < 1) {
    return;
  }
  products[name] = quantity;

  localStorage.setItem("allProduct", JSON.stringify(products));
  showProducts();
};

const showProducts = () => {
  const productContainer = document.getElementById(
    "all-products"
  ) as HTMLElement;
  productContainer.textContent = "";
  const products = getProductsFromLocalStorage();

  for (const product in products) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="shadow-sm p-3 mb-2 bg-body rounded">
           <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="fs-4">${product}</span>
                Quantity:<small class="fw-bold">
                    ${products[product]}
                </small>
              </div>
              <button onclick="deleteProduct('${product}')" class='btn btn-danger'>Delete</button class='btn btn-danger'>
           </div>
        </div>
    `;
    productContainer.append(div);
  }
};

const deleteProduct = (product: string) => {
  const storedProduct = getProductsFromLocalStorage();
  delete storedProduct[product];
  localStorage.setItem("allProduct", JSON.stringify(storedProduct));
  showProducts();
};
showProducts();
