import React from 'react'

const SortModal = ({filterOptions, setFilterOptions}) => {

  const toggleForClicked = e =>{
    e.preventDefault()
    e.stopPropagation()
    const value = e.target.value
    const newFilter = {...filterOptions}
    if(value === 'foryou'){
          newFilter['score'] =  0;
          newFilter['nearYou'] =  false;
          newFilter['topRated'] =  false;
          newFilter['rating'] =  false;
          newFilter['priceRange'] =  0;
          newFilter['score'] =  '';
          newFilter['cuisineType'] = '';
          setFilterOptions(newFilter)
          
    }else{
        newFilter[value] = !newFilter[value]
        setFilterOptions(newFilter)
   }
  }
  

 

  return (
    <div className="sort-modal-radio">
        <button className="btn-round-two grey-button sort-modal-btn udc" id="default-sort" onClick={toggleForClicked} value={'foryou'}>
          Defaults
        </button>
        <button className={`btn-round-two grey-button sort-modal-btn udc ${filterOptions.nearYou && 'black-button'}`}  onClick={toggleForClicked} value={'nearYou'}>
            Near you
        </button>
        <button  className={`btn-round-two grey-button sort-modal-btn udc ${filterOptions.topRated && 'black-button'}`}   onClick={toggleForClicked} value={'topRated'}>
            Top Rated
        </button>


    </div>
  
  )

}

export default SortModal