import React from 'react'
import { NavbarPTwo } from '../common/navbar/Navbar-2'
import { Container } from '../common/Container'
import { NewsList } from '../NewsList'
import { Outlet, useLocation } from 'react-router-dom'

export const Incidents = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/incidents'
  
  return (
    <div className='-z-10 absolute right-0 left-0'>
      {isRootPath && 
      <NavbarPTwo 
      itemTitle="Home - Incidents" 
      itemName="Incidents"
      pDiv="justify-start items-start sm:justify-between sm:items-center sm:gap-[14px]"
      SIClass="sm:flex hidden justify-center items-center"
      SBDClass="md:block hidden"
      BClass=""
      children="+ New Incident"
      direction="get-started"
      />}
      <Container className="py-7 sm:pt-[200px] pt-[240px]">
        {isRootPath && <NewsList/>}
        <Outlet/>
      </Container>
    </div>
  )
}


