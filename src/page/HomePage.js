import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate('/products?q=pants');
  }
// 쿼리와 파라미터 차이 명확하게 알아보기
  return (
    <div>
      <h1>Home page</h1>
      <Link to='/about'>Go to about page</Link>
      <br/>
      <button onClick={goProductPage}>go to product page</button>
      {/* a태그와 유사, 라우터 간에 이동할 수 있게 도와주는 링크 */}
    </div>
  )
}

export default HomePage;
