import React from 'react'

const AddOnWidgets = () => {
  return (
    <div>
       <button className="deliv-est-btn delivery-options">
                <div className='loc-left'>

                    <div className="delivery-options-text">
                       <h4 className="delivery-text-top">

                        Request Utensils, straws, etc.
                       </h4>
                       <p className="delivery-text-bottom">10-20 min</p>
                    </div>
                </div>
            </button>
            <button className="deliv-est-btn delivery-options">            
                    <div className='loc-left'>

                        <div className="delivery-options-text">
                            <h4 className="delivery-text-top">Standard</h4>
                            <p className="delivery-text-bottom">Utensils, special instrcutions, etc</p>
                        </div>
                    </div>
            </button>
    </div>
  )
}

export default AddOnWidgets
