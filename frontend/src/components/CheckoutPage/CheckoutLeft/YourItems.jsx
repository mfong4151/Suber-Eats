import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCartItems } from '../../../store/cartItems'
import YourItemsItem from './YourItemsItem'

//See the menu modal for a quick copy paste
const YourItems = () => {
  const checkoutItems = useSelector(getCartItems)
  const dispatch = useDispatch()
  return (
    <div className='your-items'>
      <div>
        <h4 className="delivery-header">Your Items</h4>
      </div>

      <div id='your-items-section'>
        {checkoutItems.map((item, idx) => 
            <YourItemsItem item={item} key={idx}/>
        )}
      </div>

    </div>

    )
}

export default YourItems