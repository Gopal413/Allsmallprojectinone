import React from 'react'
import "../index.css"

function SocialApp({val}) {
  const {id,nameApp,url} =val;
  console.log("Social Result ",val)
  return (
    <>
    <div className='play'>
     
        <li className='playstore' >
        <p>{id}</p>
         <img src={url} alt="not found" />
        <p>{nameApp}</p>
      </li>
      
      
    </div>
    </>
  )
}

export default SocialApp
