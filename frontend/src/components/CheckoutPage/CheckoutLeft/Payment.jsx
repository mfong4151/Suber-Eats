import React from 'react'

const Payment = () => {
  return (
    <div className='mp'>
        <h4 className="payment-your-items">
            Payment
        </h4>

        <div className="delivery-options">

                <div className='loc-left'>
                <div className="delivery-options-text">
                   <h4 className="delivery-text-top">Suber Cash: $0.00</h4>
                   <p className="delivery-text-bottom">+ Visa - 4269</p>
                </div>
                </div>
                <button className="delivery-edit grey-button udc">Edit</button>
          </div>
            <div className="delivery-options">
                <div className="delivery-options-text">
                   <h4 className="delivery-text-top">Add Promo Code</h4>
                  
                  </div>
                <button className="delivery-edit grey-button udc">Edit</button>
          </div>
    </div>
  )
}

export default Payment