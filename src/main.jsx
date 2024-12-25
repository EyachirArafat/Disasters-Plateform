import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Dashboard } from './components/dashboard/DashboardSection.jsx'
import { Incidents } from './components/incidents/IncidentsSection.jsx'
import { CreateNew } from './components/incidents/newIncidents/CreateNew.jsx'
import { InStep1 } from './InStep1.jsx'
import { InStep2 } from './components/incidents/newIncidents/incidentStep/Instep2.jsx'
import { InStep3 } from './components/incidents/newIncidents/incidentStep/InStep3.jsx'
import { LocationsSection } from './components/locations/LocationsSection.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/incidents" element={<Incidents />}>
        <Route path="get-started" element={<CreateNew />}/>
        <Route path="get-started/step-1" element={<InStep1 />}/>
        <Route path="get-started/step-2" element={<InStep2 />}/>
        <Route path="get-started/step-3" element={<InStep3 />}/>
      </Route>
      <Route path="/locations" element={<LocationsSection/>}/>

      <Route path='*' element={<div className='text-center flex flex-col text-5xl py-20 '>
        <span className='text-red-500 pt-40'>404!</span>
        <span className='text-black text-3xl'>Page is not found</span>
      </div>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
