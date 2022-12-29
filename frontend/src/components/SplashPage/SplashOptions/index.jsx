import './SplashOptions.css';
import biking from './assets/splash-biking.png'
import cooking from './assets/splash-cooking.png'
import typing from './assets/splash-typing.png'
import React from 'react';



const SplashOptions = () => {
  return (
        <div className="listings-grid univ-padding">
            <div className="listings-grid-ele">
                <div className="listing">
                    <img className="listings-image" src={biking} alt="biking-splash"/>
                </div>
                <div className="listings-cont">
                    <h3 className="listings-header">Feed Your Employees</h3>
                    <div>
                        <span className="listings-text">Create a business account</span>
                    </div>
                </div>
            </div>

            <div className="listings-grid-ele">
                <div className="listing">
                    <img className="listings-image" src={cooking} alt="cooking-splash"/>
                </div>
                <div className="listings-cont">
                    <h3 className="listings-header">Your resturaunt, delivered</h3>
                    <div>
                        <span className="listings-text">Add your resturaunt</span>
                    </div>
                </div>
            </div>

            <div className="listings-grid-ele">
                <div className="listing">
                    <img className="listings-image" src={typing} alt="typing-splash"/>
                </div>
                <div className="listings-cont">
                    <h3 className="listings-header">Deliver with Uber Eats</h3>
                    <div>
                        <span className="listings-text">Sign up to deliver</span>
                    </div>
                </div>
            </div>
        </div> 
  )
}

export default SplashOptions;
