import React from 'react';

const Product = ({ product, updateTimestap }) => {
  console.log('product')
  return (
    <div>
      Name: {product?.name} <br />
      Price: {product?.price} <br />
      Stock: {product?.stock ? 'true' : 'false'}
    </div>
  )
}

export default React.memo(Product);

// export default React.memo(Product, customEqual);
// function customEqual(prevProps, nextProps) {
//   return prevProps.product.name === nextProps.product.name
// }