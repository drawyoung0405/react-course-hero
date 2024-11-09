import React from 'react';

import Product from './components/performance/Product';
import { useResize } from './hooks/useResize';

/*
Higher order-component.
Prevent the component re-render unnecessary.
It takes 2 arguments: one for React Component, one for custom compare (option). 
Shallow comparison.

- tôi chỉ muốn component re-render khi các thuộc tính chỉ định khác nhau.
=> có thể xài tham số thứ 2 của memo là 1 function custom equal

- closure javascript nằm trong useEffect or useCallback => useCallback
*/

// const Product = ({ product }) => {
//   console.log('product')
//   return (
//     <div>
//       Name: {product?.name} <br />
//       Price: {product?.price} <br />
//       Stock: true
//     </div>
//   )
// }

// const ProductMemo = React.memo(Product);

function PerformanceHook() {
  const { isSmallScreen } = useResize();
  const [timestamp, setTimestamp] = React.useState(Date.now()); // 10
  const [product, setProduct] = React.useState({
    name: '',
    price: 0,
    stock: false
  })

  const total = React.useMemo(() => {
    return timestamp + 10
  }, [])

  const updateTimestap = React.useCallback(() => {
    console.log('updateTimestap: ', timestamp);
    setTimestamp(Date.now())
  }, [timestamp])

  function updateName() {
    setProduct(prevState => {
      return {
        ...prevState,
        name: 'Product'
      }
    })
  }

  return (
    <div>
      <h1>PerformanceHook</h1>
      Timestamp: {timestamp} <br />
      Total: {total} <br />
      Small screen: {isSmallScreen ? 'true' : 'false'} <br />
      <button type="button" onClick={updateTimestap}>Force Update</button>
      <br />
      <button type="button" onClick={updateName}>Update Name</button>


      <Product product={product} updateTimestap={updateTimestap} />
    </div>
  )
}

export default PerformanceHook