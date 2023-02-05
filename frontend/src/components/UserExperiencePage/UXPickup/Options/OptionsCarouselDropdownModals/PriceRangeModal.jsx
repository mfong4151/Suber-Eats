import React from 'react'
import { useState, useEffect} from 'react'
const PriceRange = ({filterOptions, setFilterOptions}) => {
  const [activePrice, setActivePrice] = useState(0)

  const handleOnClick = e =>{
    e.preventDefault()
    e.stopPropagation()
    const value = Number(e.target.value)
    setActivePrice(value)
    const newFilterOptions = {...filterOptions}
    newFilterOptions['priceRange'] = value
    setFilterOptions(newFilterOptions)
  }
  
   
  return (
    <div className="sort-modal-radio">
      <button className="btn-round-two grey-button sort-modal-btn udc" value={1} onClick={handleOnClick}>$</button>
      <button className="btn-round-two grey-button sort-modal-btn udc" value={2} onClick={handleOnClick}>$$</button>
      <button className="btn-round-two grey-button sort-modal-btn udc" value={3} onClick={handleOnClick}>$$$</button>
      {/* <button className="btn-round-two grey-button sort-modal-btn udc" value={4}>$$$$</button> */}

    </div>
  )


}

export default PriceRange




