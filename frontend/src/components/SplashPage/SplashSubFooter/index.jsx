import React from 'react';
import { Link } from 'react-router-dom'


const SplashSubFooter = () => {

    //We should do something more dynamic for the last item
    const options =[
        'Get Help',
        'Buy gift cards',
        'Add your restaurant',
        'Sign up to deliver',
        'Create a business account',
        'Promotions',
        'Restaurants near me',
        'View all cities',
        'View all countries',
        'Pickup near me',
        'About Uber Eats',
        'English'
        ]
  
        //we need to fix alignment on the options
  return (
    
    <>
    <hr className="divider-thick"/>

    <div className="univ-padding univ-font" id='sub-footer'>

        

        <div>
          <div className="logo">
                  <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
          </div>
          <div>
              <h1> apple and google logos here</h1>

          </div>
        </div>

        <div className="options">

            {options.map((option, idx) => (
                <div key={idx}><Link to='/'>{option}</Link></div>
            ))
            }
        </div>
    </div>
    </>

  )
}

export default SplashSubFooter;