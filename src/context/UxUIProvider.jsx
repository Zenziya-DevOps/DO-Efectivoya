import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const UXUIContext = createContext('')

const UxUIProvider = ({children}) => {
  const [device, setDevice] = useState(window.outerWidth < 1024 ? 'mobile' : 'desktop')


  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {

    console.log(window.outerWidth,'width')
    setDevice(window.innerWidth < 1050 ? 'mobile' : 'desktop')
    setWidth(window.innerWidth)
  } 

  useEffect(() => {
    
    window.addEventListener('resize',handleResize)
  
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [window.innerWidth])


  return (
    <UXUIContext.Provider value={{device,browserWidth:width}}>
      {children}
    </UXUIContext.Provider>
  )
}

export default UxUIProvider

