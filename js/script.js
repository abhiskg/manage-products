"use strict";
const getInputValue = (id) => {
    const inputField = document.getElementById(id);
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
const setProductInLocalStorage = (name, quantity) => {
    const products = getProductsFromLocalStorage();
    products[name] = quantity;
    localStorage.setItem("allProduct", JSON.stringify(products));
    showProducts();
};
const showProducts = () => {
    const productContainer = document.getElementById("all-products");
    const products = getProductsFromLocalStorage();
    for (const product in products) {
        console.log(product);
        console.log(products[product]);
    }
};
showProducts();
