import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import { Dashboard } from './components/dashboard/DashboardSection.jsx'
// import { Dashboard } from './components/dashboard/DashboardSection.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

      <Route path='*' element={<div className='text-center flex flex-col text-5xl py-20'>
        <span className='text-red-500'>404!</span>
        <span className='text-black text-3xl'>Page is not found</span>
      </div>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
