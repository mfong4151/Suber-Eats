import React from 'react'
import './RestaurantListingPage.css'
import ListingsBlock from './ListingsBlock'

//bring in intersection observer here, have it change based class whats clicked

const MenuListings = ({menuItems}) => {

  return (
    <div className='listings-main'>

        <div className='table-of-contents'>
            {Object.keys(menuItems).map((header, idx)=>(
                    <div className='toc-index'>
                        <span className='' key={idx}>{header}</span>
                    </div>
            ))}
        </div>

        <div className='listings-view'>
            {Object.keys(menuItems).map((header, idx)=>(
                <ListingsBlock header={header} listings={menuItems[header]} key={idx}/> 
            ))}
                
        </div>
  </div>  
  )
}

export default MenuListings