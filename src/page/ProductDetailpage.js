import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailpage = () => {
  const {id} = useParams(); 
  // 비구조화 할당으로 url 파라미터 가져오기

  return (
    <div>
      <h1>Show product Detail {id}~!</h1>
    </div>
  )
}

export default ProductDetailpage
