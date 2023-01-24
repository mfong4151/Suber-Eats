import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UXContext } from '../UXContext'
import CheckoutLeft from './CheckoutLeft'
import CheckoutRight from './CheckoutRight'
import UserMenuModal from '../universalModals/UserMenuModal'

const CheckoutPage = () => {
        const {menuModal, checkoutOrder} = useContext(UXContext)
        if(!checkoutOrder) return (<Redirect to={'/'}/>)
        return (
          <div className='checkout-page' >
            <div id='left'>
                <CheckoutLeft checkoutOrder={checkoutOrder}/>
            </div>
            <div id='right'>
              <CheckoutRight checkoutOrder={checkoutOrder}/>

            </div>
            {menuModal && <UserMenuModal/>}
          </div>
      )
}

export default CheckoutPage;