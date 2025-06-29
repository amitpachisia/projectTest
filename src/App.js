import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
// import Fetch from './Fetch';
// import TodoList from './TodoList';
import User from './User';
 import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiFetch from './ApiFetch';
import Dropdown from './Dropdown'
import Barchart from './Barchart';
import MyLineChart from './MyLineChart';
import PolarAreaChart from './PolarAreaChart';
import ImageCarouselSidd from './ImageCarouselSidd';
import CustomSlider from './CustomSlider';
// import Test from './test';
import Homebutton from './Homebutton';
import Layout from './Layout'

function App() {

  const[example, setExample] = useState(true);

  const checker = () => {
    setExample(!example)
  }


  return (
    <div>


      
   

      {/* <Contact /> */}
      {/* <Fetch/> */}
      {/* <TodoList/> */}
      {/* <User/> */}
      {/* <ApiFetch/> */}
      {/* <Dropdown/> */}
      {/* <Barchart/> */}
      {/* <MyLineChart/> */}
      {/* <PolarAreaChart/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homebutton />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <button onClick={checker}>click</button>


    </div>
  );
}

export default App;
