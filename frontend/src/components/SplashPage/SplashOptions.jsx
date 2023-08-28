import './SplashPage.css'
import biking from './assets/splash-biking.png'
import cooking from './assets/splash-cooking.png'
import typing from './assets/splash-typing.png'
import React from 'react';
import {NavLink} from 'react-router-dom'



const SplashOptions = () => {
  return (
        <div className="listings-grid univ-padding">
            <section className="listings-grid-ele">
                <div className="listing-img-holder">
                    <img className="listings-image" src={biking} alt="biking-splash"/>
                </div>
                <div className="listings-cont">
                    <h3 className="listings-header">Feed Your Employees</h3>
                    <div>
                        <NavLink to='/login'>
                            <span className="listings-text">Create a business account</span>
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="listings-grid-ele">
                <div className="listing-img-holder">
                    <img className="listings-image" src={cooking} alt="cooking-splash"/>
                </div>
                <div className="listings-cont">
                    <h3 className="listings-header">Your resturaunt, delivered</h3>
                    <div>
                        <NavLink to='/login'>

                        <span className="listings-text">Add your resturaunt</span>
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="listings-grid-ele">
                <div className="listing-img-holder">
                    <img className="listings-image" src={typing} alt="typing-splash"/>
                </div>
                <div className="listings-cont">
                    <h3 className="listings-header">Deliver with Suber Eats</h3>
                    <div>
                        <NavLink to='/login'>
                            <span className="listings-text">Sign up to deliver</span>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div> 
  )
}

export default SplashOptions;
