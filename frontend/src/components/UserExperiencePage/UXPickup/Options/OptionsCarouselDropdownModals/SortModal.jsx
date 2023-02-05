import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const SortModal = ({filterOptions, setFilterOptions}) => {

  const [ forClicked, setForClicked] = useState(false)
  const [ nearClicked, setNearClicked] = useState(false)
  const [ topRatedClicked, setTopRatedClicked] = useState(false)
  
  const newFilterOptions = filterParameter => {
    let newFilter = {...filterOptions}
    if(filterParameter === 'nearyou') newFilter['nearYou'] = nearClicked
    else if(filterParameter ==='toprated') newFilter['topRated'] = topRatedClicked
    else if(filterParameter === 'foryou' && !forClicked){
      newFilter = { 
        'score': 0,
        'nearYou':false,
        'topRated':false,
        'rating':false,
        'priceRange':0,
        'cuisineType':'',
      }
    }
    return newFilter;
  }
    
  

  
  const toggleForClicked = e =>{
    e.preventDefault()
    e.stopPropagation()
    const value = e.target.value
    switch(value){
      case 'foryou': 
          setForClicked(!forClicked)
          setFilterOptions(newFilterOptions(value))
          return
      case 'nearyou': 
          setNearClicked(!nearClicked)
          setFilterOptions(newFilterOptions(value))
          return
      case 'toprated':  
        setTopRatedClicked(!topRatedClicked)
        setFilterOptions(newFilterOptions(value))
        return 
    }
  }
  

  // useEffect(() => {
    
  // }, [forClicked, nearClicked, topRatedClicked])




  return (
    <div className="sort-modal-radio">
        <button className="btn-round-two grey-button sort-modal-btn udc"  onClick={toggleForClicked} value={'foryou'}>
            For you (default)
        </button>
        <button className="btn-round-two grey-button sort-modal-btn udc"  onClick={toggleForClicked} value={'nearyou'}>
            Near you
        </button>
        <button className="btn-round-two grey-button sort-modal-btn udc"  onClick={toggleForClicked} value={'toprated'}>
            Top Rated
        </button>


    </div>
  
  )

}

export default SortModal




