const ProductList = ({ products }) => {
//   const products = [
//     { id: 1, name: "Plastic Cup", description: "Useful and clear!" },
//     { id: 2, name: "Orange Juice", description: "Great way to start the day, goes in cups"},
//     { id: 3, name: "Peanut Butter", description: "Does not go in cups, pairs with jelly"}, 
//   ];

  return <> 
  <h1> Products!</h1>
  {/* (product, index) can be used to input key if there's no id  */}
  {/* 
  
  array.map((item) => (
    HTML
    )) 
     where item represents the individual item in array 

     implicit return requires (), without using word return 
     implicit return using an arrow without a return 

     */}
  {products.map((product)=> (
    <Product product= {product}/>
    // <div> 
    //     <div key={product.id}>
    //     <h2> Product: {product.name} </h2> 
    //     <p>{product.description} </p></div>
    //     </div>
  ))} </>;
};
// the above is the preferred way to use React, use Map directly in JSX
// maps usually need keys 

// you can create a sub component if the HTML starts getting complex.  completely up to you!
const Product = ({product}) => {
  return (
    <div key={product.id}>
      <h2>Product: {product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductList;
