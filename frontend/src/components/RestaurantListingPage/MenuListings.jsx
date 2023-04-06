import './RestaurantListingPage.css'
import ListingsBlock from './ListingsBlock'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMenuItemsSorted } from '../../store/menu'
import { useRef } from 'react'

//bring in intersection observer here, have it change based class whats clicked

const TOC_POS = 20;

const MenuListings = ({reviewSection}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuItemModal, setMenuItemModal] = useState(false);  
    const [seeYourCart, setSeeYourCart] = useState(-1)
    const menuItems = useSelector(getMenuItemsSorted);
    const tocRef = useRef(null)
    const innerTocRef = useRef(null)
    const tocTop = tocRef?.current?.offsetTop;
    const innerTocHeight = innerTocRef?.current?.offsetHeight
    const reviewSectionHeight = reviewSection?.current?.offsetTop
    const toggleItemModal = () =>{
      setMenuItemModal(!menuItemModal)
    }

    const handleIndexClick = (e, idx) =>{
        e.preventDefault();
        document.getElementById(`block-${idx}`).scrollIntoView({behavior:'smooth'})
    }



    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
    <div className='listings-main fdc-mobile'>
        <div className='toc-holder' ref={tocRef}>

            <div className={`table-of-contents ${scrollPosition > tocTop && scrollPosition + innerTocHeight + TOC_POS < reviewSectionHeight  && 'toc-pos'}`} ref={innerTocRef}>
                <div className='toc-inner'>

                {Object.keys(menuItems).map((header, idx)=>(
                    <div id={`toc-label-${idx}`} className='toc-index' onClick={e=> handleIndexClick(e, idx)}> 
                            <span key={idx}>{header}</span>
                        </div>
                ))}
                </div>
            </div>

        </div>

        <div className='univ-padding univ-padding-mobile'>
            {Object.keys(menuItems).map((header, idx)=>(
                <ListingsBlock 
                    header={header} 
                    menuItems={menuItems[header]} 
                    id={idx}
                    menuItemModal={menuItemModal} 
                    toggleItemModal={toggleItemModal}
                    seeYourCart={seeYourCart}
                    setSeeYourCart={setSeeYourCart}
                    /> 
            ))}
            {/* feature is currently not ready */}
            {/* {menuItemModal && <MenuItemModal menuItem={menuItem} setMenuItem={setMenuItem} menuItemModal={menuItemModal} toggleItemModal={toggleItemModal}/>} */}

        </div>
  </div>  
  )
}

export default MenuListings