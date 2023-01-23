import React from 'react'
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/');  
  }
  return (
    <div>
      <h1>about page</h1>
      <button onClick={goToHomepage}>Go to HomePage</button>
    </div>
  )
}

export default AboutPage
