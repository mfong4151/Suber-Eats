import React, {Suspense, lazy} from 'react';
import OptionsCarousel from './OptionsCarousel';
import OptionsDropdowns from './OptionsDropdowns';
import useWindowSize from '../../../../hooks/useWindowSize';
import '../Pickup.css'
import Loading from '../../../Loading'
const OptionsGrid = lazy(() => import('./OptionsGrid'));

const Options = ({restaurants, filterState, mapState}) => {
  const windowDim = useWindowSize()

  return (
    <div className='univ-padding univ-padding-mobile' id="options-dimensions">
      <h1 className="subheader">Delivery nearby</h1>
      <OptionsDropdowns filterState={filterState} mapState={mapState}/>
    
      {windowDim.width > 600 
        ? <OptionsCarousel filterState={filterState}/>
        : <div><br/><br/></div>
          
    }
      <Suspense fallback={<Loading/>}>
          <div  id='mobile-spacing'/>
          <OptionsGrid restaurants={restaurants}/>
      </Suspense>
   
    </div>
  )
}

export default Options;
