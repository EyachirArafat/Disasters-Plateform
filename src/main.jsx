import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import { Dashboard } from './components/dashboard/DashboardSection.jsx'
import { Incidents } from './components/incidents/IncidentsSection.jsx'
import { CreateNew } from './components/incidents/newIncidents/CreateNew.jsx'
import { GetStarted } from './components/incidents/newIncidents/incidentStep/GetStarted.jsx'
import { Instep2 } from './components/incidents/newIncidents/incidentStep/Instep2.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/incidents" element={<Incidents />}>
        <Route path="get-started" element={<CreateNew />}/>
        {/* <Route path="step-1" element={<Instep1 />}/> */}
      </Route>

      <Route path="/cypher-ai" element={<Instep2 />}/>


      <Route path='*' element={<div className='text-center flex flex-col text-5xl py-20 '>
        <span className='text-red-500 pt-40'>404!</span>
        <span className='text-black text-3xl'>Page is not found</span>
      </div>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}/>
  </React.StrictMode>
)
