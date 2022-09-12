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
};
