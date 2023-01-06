import React from 'react';
import Options from './Options';
import Map from './GoogleMap';


const Pickup = ({restaurants}) => {

  return (
    <div className='pickup-cols'>
      
      <Options restaurants={restaurants}/>
      <Map restaurants={restaurants}/> 

    </div>
  )
}

export default Pickup;