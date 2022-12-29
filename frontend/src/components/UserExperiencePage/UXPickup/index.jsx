import React from 'react';
import Options from './Options';
import GoogleMap from './GoogleMap';

const Pickup = () => {


  //https://www.youtube.com/watch?v=lhMKvyLRWo0 : making context over a scope
  //https://stackoverflow.com/questions/42825869/how-to-make-a-scroll-bar-in-separate-div-in-body-of-html

  return (
    <div>
      
      <Options/>
      <GoogleMap/> 

    </div>
  )
}

export default Pickup;
