import React from 'react'
import univPhotos from '../../assets/photoExport'
const Footer = () => {
  const {linkedin, gitHubBlack, gitHubWhite} = univPhotos()

  return (
    <>
    <hr className="divider-thick"/>

    <div className="univ-padding univ-font" id='sub-footer'>

        

        <div>
          <div className="logo">
                  <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
          </div>
          <div>
                <div className="modal-item-univ modal-menu-button">
                <a href="https://www.linkedin.com/in/mfong415/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>
                    <img src={linkedin} className='github-linkedin'/>
                </a>
              </div>
              <div className="modal-item-univ modal-menu-button">
                
                <a  href="https://www.github.com/mfong4151/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>
                    <img src={gitHubBlack} className='github-linkedin'/>
                </a>
              </div>
              
          </div>
        </div>

        <div className="options">
            {/* <p>About me: My Site</p> */}
            <p>Email me: mfong415@gmail.com</p>
            <p>My Linkedin</p>
            <p>My Github</p>
        </div>
    </div>

    <hr className="divider-thick"/>
    <div>
        <div id='footer-left'>

        </div>
        <div id='footer-right'>
            <p>
                Original design concept and copyright owned by ©2023 Uber Technologies
            </p>
            <p>
                Check out the original source material
            </p>
        </div>

    </div>
    </>
  )
}

export default Footer
