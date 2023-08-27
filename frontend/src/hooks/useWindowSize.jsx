import React, { useState, useEffect } from 'react'
const useWindowSize = () => {
    const [windowDim, setWindowDim] = useState({
        width: window.innerWidth,
        height:window.innerHeight
       })

        useEffect(()=>{
        const handleResize = () => {
          setWindowDim({
            width: window.innerWidth,
            height: window.innerHeight
          })
        };
        window.addEventListener('resize', handleResize)
        return () =>{
          window.removeEventListener('resize', handleResize)
        };
      },[])
      return windowDim;
}

export default useWindowSize
