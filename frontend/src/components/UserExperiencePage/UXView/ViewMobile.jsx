import React, {useState} from "react"
import Options from './Options'
import Map from './GoogleMap'

const ViewMobile = ({restaurantsHeap, filterState, mapState}) => {

    const [toggleMap, setToggleMap ] = useState(false)

    return (
      <>   

            <div id="toggle-holder">

                    <button
                        id='toggle-btn'
                        onClick={() => setToggleMap(!toggleMap)}
                        className="btn-round-two ux-buttons black-button header-button udc"
                        >
                        
                            Show {toggleMap ? 'Restaurants' : 'Map'}

                
                    </button>

            </div>
            {
            toggleMap
                ? <Map restaurants={restaurantsHeap} mapState={mapState} toggleMap ={toggleMap} setToggleMap={setToggleMap}/> 
                :<Options restaurants={restaurantsHeap} filterState={filterState}/> 
            }

        </>
    )
  }
  
  export default ViewMobile