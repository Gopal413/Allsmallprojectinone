import React, { useState } from 'react'

function Searchfun() {
    const [search , setSearch] = useState("")
    const [res , setres] = useState(false)
    
    const changefunc =(e)=>{
      setSearch(e.target.value)
      
    }

    const Data = [{name:"Gopal"},{name:"Sasi"},{name:"Avinash"},{name:"Chandrashekar"},{name:"Basha"},{name:"Anil"},{name:"Naveen"}];
    const Data2 = [{name2:"Gopal"},{name2:"Sasi"},{name2:"Avinash"},{name2:"Chandrashekar"},{name2:"Basha"},{name2:"Anil"},{name2:"Naveen"}];
    const Data3 = [{name3:"Gopal"},{name3:"Sasi"},{name3:"Avinash"},{name3:"Chandrashekar"},{name3:"Basha"},{name3:"Anil"},{name3:"Naveen"}];
    const [store,setStore] = useState([Data,Data2,Data3]);

    const getStore = store.filter(data=>
        data[0].name.toLowerCase().data[1].name2.toLowerCase().data[2].name3.toLowerCase().includes(search.toLowerCase())
    )
    console.log("value :",getStore)

    //const searchresult =inputvalue.filter(prev=>prev.name.toLowerCase().includes(inpserach.toLowerCase()))


  return (
    <div>
      <div>
        <h2>Google Search</h2>
        <input type="text" onChange={changefunc} onClick={()=>setres(true)} onMouseLeave={()=>setres(false)}/>
        {/* {getStore.map((value)=>(
            <p key={value}>{value.name}</p>
        ))} */}

        {getStore.map((value,index)=>(
            <p key={index}>{value.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Searchfun
