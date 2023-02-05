import React from 'react'

const YourItemsItem = ({item}) => {
  return (
    <div className='your-items-item'>
        <p>${item.adjPrice}</p>
        <div>
            <p>{`${item.name} x${item.quantity}`}</p>
        </div>
    </div>
  )
}

export default YourItemsItem
