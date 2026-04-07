import React, { useState } from 'react'
import "./Cointoss.css"

function Cointoss() {

     const [Head,setHead] = useState(0)
     const [Tail,setTail] = useState(0)
     const [val,setval] = useState(0)
   // let valueav;
    const Tossfunc=()=>{
        setval( Math.floor(Math.random()*2));
    console.log("value ",val)
    
    val===0?setHead(pre=>pre+1):setTail(pre=>pre+1)
    }

     const resetfun =()=>{
        setHead(0)
        setTail(0)
     }
    
   
    
  return (
    <div className='toss'>
        <div className='coin'>
            <h1>Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
            {val===0?<img src='https://png.pngitem.com/pimgs/s/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png' alt='not found'/>:<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Indian_1_Rupee_Coin_Reverse_or_Tails.jpg/1280px-Indian_1_Rupee_Coin_Reverse_or_Tails.jpg?_=20230221012604" alt='not found'/>}
            <button onClick={Tossfunc}>Toss Coin</button>
            <div>
            <h3 onClick={resetfun}>Reset</h3>
            <h3>Head :{Head}</h3>
            <h3>Tail :{Tail}</h3> 
            </div>
            
        </div>
      
    </div>
  )
}

export default Cointoss
