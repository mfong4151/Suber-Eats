import React, {useRef} from 'react'
import './OptionsModals.css'
import SortModal from './SortModal'
import PriceRangeModal from './PriceRangeModal'
import extractOffsets, {mobilePosition} from '../utils/extractOffsets'
import useWindowSize from '../../../../customHooks/useWindowSize'

const SortOptionsModal = ({sortModal, setSortModal, styleOptions, filterState, btnParent}) => {
  const {width} = useWindowSize()
  const {x, y}  = extractOffsets(btnParent)
  const position = {top: y, left: x}
  
  
  const {filterOptions, setFilterOptions} = filterState;
  const {filterType,modal, activeModal,  modalOverlay, modalMenuContent} = styleOptions();
  

  if (sortModal) document.body.classList.add(activeModal)
  else document.body.classList.remove(activeModal)


  return (
    <div className={modal}>
        <div className={modalOverlay} onClick={()=>setSortModal(!sortModal)}
        
        >
          <div className='univ-options-body price-modal price-rating-modal udc'
            style={position}
          >
              {filterType === 'sort' && <SortModal filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>}             
              {filterType === 'price' && <PriceRangeModal filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>}            
              {/* {filterType === 'rating' && <RatingModal/>} */}
          </div>
        </div>
    </div>
  )

}

export default SortOptionsModal;