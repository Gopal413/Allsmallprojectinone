import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import ContactList from "./ContactList";
import "./index.css"


    const initialContactlist =[{
        id:uuidv4(),
        name:"ram",
        Number:"8654",
        isFavourite :false
    },
    {
        id:uuidv4(),
        name:"Nikhil",
        Number:"8785515",
        isFavourite :false
    },
    {
        id:uuidv4(),
        name:"Suresh",
        Number:"84641",
        isFavourite :false
    }
]

function Contact() {

    const [contactlt,setcontactlt] =useState(initialContactlist);
    const [name,setname] =useState("");
    const [Numberval,setNumberval] = useState("")

    const addcontact =(event)=>{

        event.preventDefault()

        const newobj ={
                id:uuidv4(),
                name:name,
                Number:Numberval,
                isFavourite :false
            }
            

        setcontactlt(pre=>[...pre,newobj])
        setname("");
        console.log("form submit",newobj,"name",name);
        setNumberval("");
    }


    const newcontact =(id)=>{

        setcontactlt(pre=>pre.map(each=>each.id===id?{...each,isFavourite:!each.isFavourite}:each))
       
         }

  return (
    <>
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Contacts</h1>
        <form action="" className="contact-form-container" onSubmit={addcontact}>
          <input type="text" value={name} className="input" placeholder="Name" onChange={e=>setname(e.target.value)} />
          <input type="text" value={Numberval} className="input" placeholder="Mobile Number" onChange={e=>setNumberval(e.target.value)} />
          <button type="submit" className="button">
            Add Contact
          </button>
        </form>
        <ul className="contacts-table">
            <li className="table-header">
                <p className="table-header-cell name-column">Name</p>
                <hr className="separator"/>
                <p className="table-header-cell">Mobile Number</p>
            </li>
           {contactlt.map((each)=>(
            <ContactList key={each.id} contactlist ={each} favfun ={newcontact} />
           ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Contact;
