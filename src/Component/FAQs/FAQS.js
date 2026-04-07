import React, { useState } from 'react'

function FAQS(props) {

    const {datas} = props
    //const [status,setstatus] =useState(false)
    const [value ,setvalue] =useState(null)
    console.log("data",datas.question)
    const result = (id)=>{
        const res =(value === id?null:id)
        setvalue(res)
        
    }
    
  return (
    <div className='text-center'>
        <h2 className='text-yellow-700 text-5xl font-bold mb-8'>FAQs</h2>
        {datas.map((val)=>(
            <div className='border border-indigo-600 w-[700px] bg-white-500 rounded-[20px]  m-4 ' key={val.id}>
                <h3 className='border-b-2 w-[90%] mx-auto p-2 text-xl m-5 flex justify-between border-indigo-500  '>Question : {val.question}  <button className='text-4xl flex items-center justify-center text-white-700 border-2 border-yellow-700 bg-yellow-700 w-10 h-10 rounded-[50px]' onClick={()=>result(val.id)}>{value === val.id?"-":"+"}</button></h3>
                 {value === val.id && <p className='text-gray-500 m-1'>Answer :{ val.answer}</p>}
            </div>
            
            
        ))}
       
    </div>
  )
}

export default FAQS
