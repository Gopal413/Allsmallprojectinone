
import FAQS from './FAQS';
import { useState } from 'react';

function MainFAQS() {
  const [store, setstore] = useState([{
    id:1,
    question: "What is React?",
    answer: "React is a JavaScript library used to build user interfaces, especially single-page applications."
  },
  {
    id:2,
    question: "What is JSX in React?",
    answer: "JSX stands for JavaScript XML and allows developers to write HTML-like syntax inside JavaScript."
  },
  {
    id:3,
    question: "What is a component in React?",
    answer: "A component is a reusable piece of UI that can be used multiple times in a React application."
  },
  {
    id:4,
    question: "What is useState hook?",
    answer: "useState is a React hook that allows functional components to manage state."
  },
  {
    id:5,
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight copy of the real DOM used by React to improve performance."
  },
  {
    id:6,
    question: "What are props in React?",
    answer: "Props are inputs passed from a parent component to a child component."
  },
  {
    id:7,
    question: "What is useEffect hook?",
    answer: "useEffect is a React hook used to perform side effects such as fetching data or updating the DOM."
  },
  {
    id:8,
    question: "What is a single page application?",
    answer: "A single page application loads a single HTML page and dynamically updates the content without refreshing the page."
  },
  {
    id:9,
    question: "What is React Router?",
    answer: "React Router is a library used for navigation between different pages in a React application."
  },
  {
    id:10,
    question: "Why is React popular?",
    answer: "React is popular because it is fast, reusable, component-based, and backed by a large community."
  }
])
  console.log("app",store[0].question)
  return (
    <div className="min-h-screen bg-white-200 flex justify-center items-center gap-10">
      
      <FAQS datas ={store}  setdatas={setstore}/>
    </div>
  );
}

export default MainFAQS;
