import React, {useState, useContext ,useEffect} from 'react';
import { CartContext } from './CartContext';
import Cart from './Cart';


// this components show the productlist ,which are already mention in it as demo and use map method

const ProductList = () => {
  const [totalitem ,setTotalItem] =useState(0)
    // extract the element from context
  const { addToCart } = useContext(CartContext);
// create arry object of dummy data
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 3', price: 30 }, 
    { id: 5, name: 'Product 3', price: 70 }, 
    { id: 6, name: 'Product 3', price: 80 },
  ];

//   function to update the list and use onclick event to trigger the button its add item to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // count the item 
  useEffect(()=>{
    setTotalItem(products.filter(products=>products).length)
  })

 
  return (
    <div>
      <h2 >Product List</h2>
      <span style={{ fontSize: "20px" }}>TotalItem:({totalitem})</span>
       <div className='list'  >
        {/* map method use for populate the element from the object  */}
        {products.map((product) => (
          <li key={product.id} >
            {product.name} - ${product.price}
          
            <button onClick={() => handleAddToCart(product)} style={{marginTop:"5px"}}>Add to Cart</button>
        
          </li>
        ))}
      </div>
     <Cart/>
      </div>
  
  );
};

export default ProductList;
