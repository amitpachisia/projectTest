import React, { useState } from 'react'
import './boxstyling.css'

const StarRating = () => {

  const[rating, setRating] = useState(0);
  const[button, setButton] = useState(false);

  function enableButton(){
    setButton(!button)}
  

  function disableButton() {
    setButton(!button)
  }


  return (
    <div>
      {[1,2,3,4,5].map((star) => (
        <span key={star}
        onClick={()=> setRating(star)}>
          <span>&#9733;</span> 
        </span>
        
      ))}
      <p>You rated {rating} star{rating !== 1 ? 's' : ''}</p>
      <button class="hoverEffect" disabled={button} onClick={disableButton}>click</button>
      <a href='https://www.google.com/' class='sampleEffect'>Click here to visit</a>
    </div>
  )
}

export default StarRating