import React, { useState } from "react";

import GamesApp from "../Games/GamesApp"
import NewsApp from "../News/NewsApp";
import FoodApp from "../Food/FoodApp";
import SocialApp from "../Social/SocialApp";
import "./MainApp.css"


const tablist = [
  { tabId: "social", displaytext: "Social" },
  { tabId: "games", displaytext: "Games" },
  { tabId: "news", displaytext: "News" },
  { tabId: "food", displaytext: "Food" },
];

const games = [
  { id: 1, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "subway surfers" },
  { id: 2, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "Crossy Road" },
  { id: 3, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "Angry Birds" },
  { id: 4, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "Angry Birds" },
  { id: 5, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "Angry Birds" },
  { id: 6, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "Angry Birds" },
  { id: 7, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "Angry Birds" },
  { id: 8, info:"games", url: "https://img.icons8.com/color/96/controller.png", nameApp: "Angry Birds" },
];
const news = [
  { id: 1, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "Inshorts" },
  { id: 2, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "Google News" },
  { id: 3, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "FlipBoard" },
  { id: 4, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "FlipBoard" },
  { id: 5, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "FlipBoard" },
  { id: 6, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "FlipBoard" },
  { id: 7, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "FlipBoard" },
  { id: 8, info:"news", url: "https://img.icons8.com/color/96/news.png", nameApp: "FlipBoard" },
];
const social = [
  { id: 1, info:"social", url: "https://img.icons8.com/color/96/facebook.png", nameApp: "Facebook" },
  { id: 2, info:"social", url: "https://img.icons8.com/color/96/instagram-new.png", nameApp: "Instagram" },
  { id: 3, info:"social", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Snapchat_logo.svg", nameApp: "Snapchat" },
  { id: 4, info:"social", url: "https://img.icons8.com/color/96/whatsapp.png", nameApp: "Whatsapp" },
  { id: 5, info:"social", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Messenger_Logo_%282020%29.svg", nameApp: "Messenger" },
  { id: 6, info:"social", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_X.svg", nameApp: "Twitter (X)" },
  { id: 7, info:"social", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", nameApp: "LinkedIn" },
  { id: 8, info:"social", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Reddit_logo.svg", nameApp: "Reddit" },
];
const food = [
  { id: 1, info:"food", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png", nameApp: "Zomato" },
  { id: 2, info:"food", url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png", nameApp: "Swiggy" },
  { id: 3, info:"food", url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg", nameApp: "Domino's Pizza" },
  { id: 4, info:"food", url: "https://logo.clearbit.com/ubereats.com?size=200&format=png", nameApp: "Uber Eats" },
  { id: 5, info:"food", url: "https://logo.clearbit.com/instacart.com?size=200&format=png", nameApp: "Instacart" },
  { id: 6, info:"food", url: "https://logo.clearbit.com/grubhub.com?size=200&format=png", nameApp: "Grubhub" },
  { id: 7, info:"food", url: "https://logo.clearbit.com/mercato.com?size=200&format=png", nameApp: "Mercato" },
  { id: 8, info:"food", url: "https://logo.clearbit.com/doordash.com?size=200&format=png", nameApp: "DoorDash" },
];

function MainApp() {
  const [data, setdata] = useState("Social");

  const changefun = (tabId) => {
    setdata(tabId);
    console.log("tab", data);
  };;

  const [search,setsearch] = useState("")
  const [active,setactive] =useState({social,games,news,food});

  const changefunc =(e)=>{
    setsearch(e.target.value)
     console.log("search",search)
  }
 
 
  const result2 =active[data]?.filter(item =>
    item.nameApp.toLowerCase().includes(search.toLowerCase())
  )||[];

  // const result =active[data]?.find(item=>item.nameApp === search)||[]
  // const result2 =result?[result]:[]
 
  // const gamelist = games.filter(item=>(
  //   item.info===data
  // )) 
  // const newslist = news.filter(item=>(
  //   item.info===data
  // )) 
  // const foodlist = food.filter(item=>(
  //   item.info===data
  // )) 
  // const sociallist = social.filter(item=>(
  //   item.info===data
  // )) 

  return (
    <div>
      <div className="mainapp">
        <h1>App Store</h1>
        <input type="text" onChange={changefunc} />
        <br />
        <ul className="list">
        {tablist.map((item) => (
          <button key={item.tabId} onClick={() => changefun(item.tabId)}>
            {item.displaytext}
          </button>
        ))}
        </ul>
        {/* <ul>
        {gamelist.map((values)=>(
            <GamesApp id={values.id} val={values} result ={result2}/>
          ))
        }
        </ul>
        <ul>
        {newslist.map((values)=>(
            <NewsApp id={values.id} val={values} result ={result2} />
          ))
        }
        </ul>
        <ul>
        {foodlist.map((values)=>(
            <FoodApp id={values.id} val={values} result ={result2} />
          ))
        }
        </ul>
        <ul>
        {sociallist.map((values)=>(
            <SocialApp id={values.id} val={values} result ={result2} />
          ))
        }
        </ul> */}
        <ul className="data">
        {result2.map((val)=>(
          <FoodApp key={val.id} val ={val}/>,
          <GamesApp key={val.id} val={val} />,
          <SocialApp  key={val.id}  val ={val}/>,
          <NewsApp  key={val.id}  val ={val}/>
        ))}
        {/* {result?<FoodApp val={result}/>:null} */}
        </ul>
      </div>
    </div>
  );
}

export default MainApp;
