import React from 'react'
import { useState, useEffect } from 'react'
const DeliveryEstimate = () => {
    const [highlightedBox, setHighlightedBox] = useState(0)

    useEffect(()=>{
        
    },[highlightedBox])
      return (
        <div className='mp'>
            <h4 className="deliv-est">Delivery estimate</h4>
            <button className="deliv-est-btn delivery-options mp">
                <div className='loc-left loc-left-est'>
                    <div className="delivery-options-text ">
                       <h4 className="delivery-text-top">Priority</h4>
                       <p className="delivery-text-bottom">10-20 min</p>
                    </div>
                </div>
            </button>
            <button className="deliv-est-btn delivery-options mpm">            
                    <div className='loc-left loc-left-est'>

                        <div className="delivery-options-text">
                            <h4 className="delivery-text-top">Standard</h4>
                            <p className="delivery-text-bottom">10-25 min</p>
                        </div>
                    </div>
            </button>

            <button className="deliv-est-btn delivery-options mpm">

                <div className='loc-left loc-left-est'>

                    <div className="delivery-options-text">
                        <h4 className="delivery-text-top">Schedule</h4>
                        <p className="delivery-text-bottom">10-25 min</p>
                    </div>
                </div>
            </button>


        </div>
    )
}

export default DeliveryEstimate