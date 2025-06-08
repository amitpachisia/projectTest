import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

import { useState } from 'react';

function App() {

  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  // const [showContent, setShowContent] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const [theme, setTheme] = useState("light");

  const [nationData, setNationData] = useState([

   

  ]);

  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayValue(inputValue);
  };


  function themeChangeDark() {
    setTheme("dark")
  }
  function themeChangeLight() {
    setTheme("light")
  }
  // const handleKeyDown = (event) => {
  //   console.log("Key down:", event.key);
  // };
  // const handleKeyUp = (event) => {
  //   console.log("Key up:", event.key);
  // };




  // const [inputValue, setInputValue] = useState('');
  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // }


  // const handleMouseOver = () => {
  //   console.log("Mouse is over the element");
  // };


  function fetchData() {

    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").
      then((response) => response.json())
      .then((data) => { setNationData(data.data) });
  }



  return (
    <div className={theme}>



<input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleButtonClick}>Show Value</button>
      <p>Value: {displayValue}</p>

      {/* <div onMouseOver={handleMouseOver}>
        Hover over this text!
      </div> */}

      <button onClick={themeChangeDark}>themeChange</button>
      <button onClick={themeChangeLight}>themeChange</button>

      {/* <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>You typed: {inputValue}</p>
      </div> */}

      {/* <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Type something"
      /> */}

      {/* <div>
        <button onClick={() => setShowContent(!showContent)}>
          {showContent ? 'Hide' : 'Show'} Content
        </button>
        {showContent && (
          <div style={{ marginTop: '10px', padding: '10px', border: '1px solid gray' }}>
            <h3>Hidden Content</h3>
            <p>This section is now visible.</p>
          </div>
        )}
      </div> */}
      {/* <div>
        <button onClick={() => setIsActive(!isActive)}>
          Toggle Highlight
        </button>
        <p className={isActive ? 'highlight' : ''}>
          This text can be highlighted.
        </p>
      </div> */}


      <div>
        {/* <h1>Fruit List</h1> */}
        <ul>
          {nationData.map((showData, index) => (
            <li key={index}>{showData}</li>
          ))}
        </ul>
      </div>


      <button onClick={fetchData}>click me</button>

      <ul>
        {nationData.map((item, index) => (
          <li key={index}>
            Year: {item.Year}, Population: {item.Population}, Nation: ({item.Nation})
          </li>
        ))}
      </ul>


      {/* <Contact /> */}

    </div>
  );
}

export default App;
