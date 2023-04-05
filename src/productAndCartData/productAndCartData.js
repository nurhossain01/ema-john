import { getShoppingCart } from "../utilities/fakedb";

const productAndCartData = async() =>{
const product =  await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
const productData = await product.json();

const storedCart = getShoppingCart();
const savedCart = [];

for(const id in storedCart){
  const addedProduct = productData.find(pd => pd.id === id);
  if(addedProduct){
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    savedCart.push(addedProduct)
   
  }
}

return savedCart;
}

export default productAndCartData;