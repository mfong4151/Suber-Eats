import React from 'react';
import './UXHeader.css'



const UXHeader = () => {
  //temporary place holder until we iron out cart dynamics
  const temp = 0

  return (
    <header id="splash-header" className="univ-padding">

          <div className="logo">
              <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
          </div>

          <button className="btn-round ux-buttons">Delivery Pickup</button>
          <button className='btn-round ux-buttons'>Map Location Pick Up Now</button>

          <form>
            <input className="form-bg" type='text' name='location' placeholder='What are you craving?'/> 

          </form>
          <button id='cart-button' className='btn-round ux-buttons'>{temp} carts</button>


    </header>

  )
}

export default UXHeader;
