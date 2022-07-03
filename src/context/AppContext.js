import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export function useApp () {
  return useContext(AppContext)
}

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(null)

  const handleOpen = () => {
    setOpen(!open)
  }

  const value = {
    open,
    handleOpen
  }

  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
