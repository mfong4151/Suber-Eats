import React from 'react';
import Options from './Options';
import Map from './GoogleMap';

const Pickup = () => {


  //https://www.youtube.com/watch?v=lhMKvyLRWo0 : making context over a scope
  //https://stackoverflow.com/questions/42825869/how-to-make-a-scroll-bar-in-separate-div-in-body-of-html

  
  return (
    <div className='pickup-cols'>
      
      <Options/>
      <Map/> 

    </div>
  )
}

export default Pickup;
