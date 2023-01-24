import React from 'react';
import Options from './Options';
import Map from './GoogleMap';


const Pickup = ({restaurants, userLocation}) => {

  return (
    <div className='pickup-cols'>
      
      <Options restaurants={restaurants}/>
      <Map restaurants={restaurants} userLocation={userLocation} /> 

    </div>
  )
}

export default Pickup;