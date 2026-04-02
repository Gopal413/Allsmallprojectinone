

import Header from "../Hearder/Header";
import ProjectItem from "../ProjectItems/ProjectItem";
import TabItem from "../Tabitem/Tabitem";
import "./MainProject.css"
import { useState } from 'react';

const tabList = [
  {tabId:'STATIC', displayText : "Static"},
  {tabId : 'RESPONSIVE', displayText : "Responsive"},
  {tabId : 'DYNAMIC', displayText : "Dynamic"}
]
const projectList = [
  {projectId : 0,
    category : 'STATIC',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPcMFa5QSl2KRRUFOd9dWQd5K_wZ8xTe-EA&s',
    title: 'Paytm Clone',
    description: 'Online Payment Website'
  },
  {projectId : 4,
    category : 'RESPONSIVE',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vHj-vSbynrZTu_jmsQC2Tuyb3E-UYOTNRA&s',
    title: 'E-commerce Webite',
    description: 'Online Shopping Website'
  },
  {projectId : 8,
    category : 'DYNAMIC',
    imageUrl : 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-pastel-world-typing-day-a4-design-template-44f04f2642de8234aa491d44966c5840.webp?ts=1736163439',
    title: 'Speed Typing Test',
    description: 'Measures the time taken to type a sentence'
  }
]
function MainProject() {
  const [activeId, setActiveId] = useState(tabList[0].tabId)

  const changeActiveId = (tabId) =>{
    setActiveId(tabId)
  }

  const filterDetails = projectList.filter(project =>(
    project.category === activeId
  ))

  return (
    <>
    <Header/>
    <h1 style={{textAlign:"center", fontSize:"35px", fontWeight:"500"}}>Projects</h1>
    
    <ul>
      {tabList.map(tab =>(
        <TabItem
        id = {tab.tabId}
        tabListItems = {tab}
        changeActiveId = {changeActiveId}
        isActive = {activeId === tab.tabId}
        />
        //<button key={tab.tabId} className={activeId==tab.tabId ? 'btn-active' : ""} onClick={()=>setActiveId(tab.tabId)}>{tab.displayText}</button>
      ))}
    </ul>

    <ul>
      {filterDetails.map(project=>(
        <ProjectItem 
        id = {project.projectId}
        projectDetails = {project}
        />
      ))}
    </ul>
    </>
  );
}

export default MainProject;