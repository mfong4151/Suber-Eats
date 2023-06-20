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
                        
                            {toggleMap ? 'Restaurants' : 'Map'}

                
                    </button>

            </div>
            {
            toggleMap
                ? 
                <div style={{minWidth: '100vw', height:800}}>
                    <Map restaurants={restaurantsHeap} mapState={mapState} toggleMap ={toggleMap} setToggleMap={setToggleMap}/> 
                </div>
                :<Options restaurants={restaurantsHeap} filterState={filterState} mapState={mapState}/> 
            }

        </>
    )
  }
  
  export default ViewMobile