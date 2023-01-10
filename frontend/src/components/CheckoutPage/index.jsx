import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UXContext } from '../UXContext'
import CheckoutLeft from './CheckoutLeft'
import CheckoutRight from './CheckoutRight'
import UserMenuModal from '../universalModals/UserMenuModal'

const CheckoutPage = ({order}) => {

        const {menuModal, toggleMenuModal} = useContext(UXContext)
        // if(!orderInfo) return (<Redirect to={/>})

        return (
          <div className='checkout-page'>
            <div>
                <CheckoutLeft/>
            </div>
            <div>
              {/* <CheckoutRight/> */}

            </div>
            {menuModal && <UserMenuModal/>}
          </div>
      )
}

export default CheckoutPage;