import React from 'react';
import Options from './Options';
import Map from './GoogleMap';


const Pickup = ({restaurants, userLocation, setUserLocation}) => {

  return (
    <div className='pickup-cols'>
      
      <Options restaurants={restaurants}/>
      <Map restaurants={restaurants} userLocation={userLocation} setUserLocation={setUserLocation}/> 

    </div>
  )
}

export default Pickup;