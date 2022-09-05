import AuthProvider from './AuthProvider'
import React from 'react'
import Routes from './Routes'

const Providers = () => {
  // AuthProvider provides all the authentication related services. The AuthProvider component is coming from the AuthProvider.js file in the Navigation folder
  // The Routes component is returning from Routes.js file in the navigation folder which provides all the navigation routes
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  )
}

export default Providers;