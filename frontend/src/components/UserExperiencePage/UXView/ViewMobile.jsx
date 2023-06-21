import React, {useState} from "react"
import Options from './Options'
import Map from './GoogleMap'
import './Pickup.css'
import NearMe from "./NearMe"

const ViewMobile = ({restaurantsHeap, filterState, mapState}) => {

    const [toggleMap, setToggleMap ] = useState(false)
   
    return (
      <>   

            <div id="toggle-holder">


            </div>
            {
            toggleMap
                ? 
                <div id='map-cont-holder'>
                    <Map restaurants={restaurantsHeap} mapState={mapState} toggleMap ={toggleMap} setToggleMap={setToggleMap}/> 
                </div>
                :<Options restaurants={restaurantsHeap} filterState={filterState} mapState={mapState}/> 
            }
            <div id="near-me-holder">
                    <NearMe/>

            </div>

        </>
    )
  }
  
  export default ViewMobile