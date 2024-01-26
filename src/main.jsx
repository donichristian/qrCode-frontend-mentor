import React from 'react'
import ReactDOM from 'react-dom/client'
import CardComponent from './components/Card.jsx'
import AttributionComponent from './components/Attribution.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardComponent/>
    <AttributionComponent/>
  </React.StrictMode>,
)
