import React from 'react'
import univPhotos from '../../assets/photoExport'
import './Footer.css'

const Footer = () => {
  const {linkedin, gitHubBlack, gitHubWhite} = univPhotos()

  return (
    <>
    <hr className="footer-divider"/>

    <div className="univ-padding univ-font" id='sub-footer'>

        

        <div>
          <div className="logo">
                  <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
          </div>
          <div className='subfooter-holder'>
                <div className="udc">
                    <a href="https://www.linkedin.com/in/mfong415/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>
                        <img src={linkedin} className='github-linkedin-footer'/>
                    </a>
              </div>
              <div className="udc">
                
                <a  href="https://www.github.com/mfong4151/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>
                    <img src={gitHubBlack} className='github-linkedin-footer'/>
                </a>
              </div>
              
          </div>
        </div>

        <div className="footer-options">
            {/* <p>About me: My Site</p> */}
            <div className="footer-text">

                <p>Email me: mfong415@gmail.com</p>
            </div>
            <div className="footer-text">
                <a href="https://www.linkedin.com/in/mfong415/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>
                    <p>My Linkedin</p>
                </a>

            </div>
            <div className="footer-text">
                <a  href="https://www.github.com/mfong4151/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>
                    <p>My Github</p>
                </a>

            </div>



            
        </div>
    </div>

    <hr className="footer-divider"/>
    <div id='footer-bottom'>
        <div id='footer-left'>

        </div>
        <div id='footer-right' >
            <div className='footer-text'>
                <p >
                Original design concept and copyright owned by ©2023 Uber Technologies
                </p>
            </div>
            <div className="footer-text">
                <a href='https://www.ubereats.com/'  target="_blank" id='original-material' className='footer-text'>
                    Check out the original source material
                </a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer
