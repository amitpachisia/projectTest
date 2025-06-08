import logo from './logo.svg';
import { useState } from 'react';

function Fetch() {

  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  const [nationData, setNationData] = useState([]);


  function fetchData() {

    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").
      then((response) => response.json())
      .then((data) => { setNationData(data.data) });
  }



  return (
    <div>

      
      <button type='button' onClick={fetchData}>click me</button>

      <div className='dataMain'>
      {nationData.map((data, index) => (
      <div className='dataList' key={index}>
         
           <p> <strong>Nation:</strong> ({data.Nation})</p>
           <p> <strong>Population:</strong> {data.Population}</p>
           <p> <strong>Year:</strong> {data.Year}</p>

          </div>

      ))}

</div>



    </div>
  );
}

export default Fetch;
