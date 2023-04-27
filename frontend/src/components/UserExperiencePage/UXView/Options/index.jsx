import React, {Suspense, lazy} from 'react';
import OptionsCarousel from './OptionsCarousel';
import OptionsDropdowns from './OptionsDropdowns';
// import OptionsGrid from './OptionsGrid';
import '../Pickup.css'
import Loading from '../../../generalDesignComponents/Loading';

const OptionsGrid = lazy(() => import('./OptionsGrid'));

const Options = ({restaurants, filterState, mapState}) => {
  
  return (
    <div className='univ-padding univ-padding-mobile' id="options-dimensions">
      <h1 className="subheader">Delivery nearby</h1>
      <OptionsDropdowns filterState={filterState} mapState={mapState}/>
      <OptionsCarousel filterState={filterState}/>
      <Suspense fallback={<Loading/>}>

          <OptionsGrid restaurants={restaurants}/>
      </Suspense>
   
    </div>
  )
}

export default Options;
