import React from 'react'

const YourItemsItem = ({item}) => {
  return (
    <div className='your-items-item'>
        <p>${item.adjPrice.toFixed(2)}</p>
        <div className='your-items-quantity'>
            <p className='your-items-name'>{`${item.name}`}</p>
            <p className='item-quant'>{`x ${item.quantity}`}</p>
        </div>
    </div>
  )
}

export default YourItemsItem
