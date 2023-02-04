import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const SortModal = ({filterOptions, setFilterOptions}) => {

  const [ forClicked, setForClicked] = useState(false)
  const [ nearClicked, setNearClicked] = useState(false)
  const [ topRatedClicked, setTopRatedClicked] = useState(false)
  

  useEffect(() => {
    
  }, [forClicked, nearClicked, topRatedClicked])
  
  const toggleForClicked = e =>{
    e.preventDefault()
    e.stopPropagation()
    switch(e.target.value){
      case 'foryou': 
          setForClicked(!forClicked)
          return
      case 'nearyou': 
          setNearClicked(!nearClicked)
          return
      case 'toprated':  
        setTopRatedClicked(!topRatedClicked)
        return 
    }
  }





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




