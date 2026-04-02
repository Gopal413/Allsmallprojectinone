import React from 'react'
import "./index.css"

function ContactList(props) {
    const {contactlist,favfun} =props
    const {id,name,Number,isFavourite} =contactlist;
    //const favourite =isFavourite?"true":"false";
     
  return (
    <div>
     
         <li className="table-row">
            <div className="table-cell">
                <p className="mobile-no-value">{name}</p>
            </div>
            <hr className="separator"/>
            <div className='table-cell'>
                <p className="mobile-no-value">{Number}</p>
                 <button className='favourite' onClick={()=>favfun(id)} >{isFavourite?"⭐" : "☆"}</button>
            </div>
        </li>
    </div>
  )
}

export default ContactList
