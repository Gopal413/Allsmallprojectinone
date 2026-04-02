import React from 'react'
import "../index.css"

function NewsApp({val}) {
  const {id,nameApp,url} =val
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

export default NewsApp
