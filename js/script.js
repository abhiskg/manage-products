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
};
