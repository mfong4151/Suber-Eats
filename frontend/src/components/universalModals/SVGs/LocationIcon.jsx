import React from 'react'
import '../UserMenuModal.css'

const LocationIcon = () => {
  return (
    <div className='location-icon'>
        <svg width="24px" height="24px" 
            fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" focusable="false">
                <path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="currentColor">
            </path>
        </svg>
    </div>
  )
}

export default LocationIcon