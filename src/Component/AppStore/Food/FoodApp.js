import React from 'react'
import "../index.css"

function FoodApp({val}) {

  const {id,nameApp,url} =val
  console.log("id",id," ","Name ",nameApp," ","urls ",url)
  return (
    <>
    <div className='play'>
      <li className='playstore'>
        <img src={url} alt="not found" />
        <p>{nameApp}</p>
      </li>
    </div>
    </>
  )
}

export default FoodApp
