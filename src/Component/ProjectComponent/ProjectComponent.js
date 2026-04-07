import React, { useState } from "react";
import ChooseImage from "../ChoiceImage/ChooseImage";
import Cointoss from "../CoinTossGame/Cointoss";
import Countriescapital from "../CountriesCapitals/Countriescapital";
import Contact from "../ContactsTodo/Contact";
import MainReview from "../Reviews/MainReview/MainReview";
import "./ProjectComponent.css";
import MainFAQS from "../FAQs/MainFAQS";
import MainDigitalTimer from "../DigitalTimer/MainDigitalTimer";
import MainStopWatch from "../StopWatch/MainStopWatch";

const ProjectComponent = () => {
  
  const [activeTab, setActiveTab] = useState("chooseimage");

  const menuItems = [
    { id: "chooseimage", component: <ChooseImage />, label: "Choose Image" },
    { id: "cointoss", component: <Cointoss />, label: "Coin Toss" },
    { id: "Contact", component: <Contact />, label: "Contacts" },
    { id: "Review", component: <MainReview />, label: "Reviews" },
    { id: "FAQS", component: <MainFAQS />, label: "FAQS" },
    { id: "DigitalTimer", component: <MainDigitalTimer />, label: "DigitalTimer" },
    { id: "StopWatch", component: <MainStopWatch />, label: "StopWatch" },
    {
      id: "Countriescapital",
      component: <Countriescapital />,
      label: "Countries & Capitals",
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeItem = menuItems.find((item) => item.id === activeTab);

  return (
    <div className="app-container">
      <nav className="top-nav">
        <div className="nav-scroll">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-btn ${activeTab === item.id ? "active" : ""}`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="display-area">
        <div className="component-window">
          {activeItem?.component}
        </div>
      </main>
    </div>
  );
};

export default ProjectComponent;