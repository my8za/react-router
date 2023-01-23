import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Productpage = () => {
  let [query, setQuery] = useSearchParams();
  console.log(query.get('num'));

  return (
    <div>
      <h1>Show all products!!!</h1>
    </div>
  )
}

export default Productpage
