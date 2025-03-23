import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleMapComponent from './GoogleMapComponent'
import GoogleMapComponentWithApi from './GoogleMapComponentWithApi'
import ErrorBoundary from './ErrorBoundary'



function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
        <h2>Google Maps React Vite Demo</h2>
        <GoogleMapComponentWithApi />
      </div>
  
  );
}

export default App
