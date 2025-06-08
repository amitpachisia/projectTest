import logo from './logo.svg';
import { useState } from 'react';

function User() {

 
  const [userPass, setPassData] = useState([]);


  function fetchPass() {

    fetch("https://jsonplaceholder.typicode.com/posts?userId=1").
      then((response) => response.json())
      .then((pass) => { setPassData(pass) });
  }



  return (
    <div>

      
      <button type='button' onClick={fetchPass}>click me</button>

      <div className='dataMain'>
      {userPass.map((pass, index) => (
      <div className='dataList' key={index}>
         
           <p> <strong>ID:</strong> ({pass.id})</p>
           <p> <strong>Title:</strong> {pass.title}</p>
           <p> <strong>Body:</strong> {pass.body}</p>

          </div>

      ))}

</div>



    </div>
  );
}

export default User;
