import React from 'react'
import { NavbarPTwo } from '../common/navbar/Navbar-2'
import { Container } from '../common/Container'
import { NewsList } from '../NewsList'

export const Incidents = () => {
  return (
    <div className='-z-10 absolute'>
      <NavbarPTwo 
      itemTitle="Home - Incidents" 
      itemName="Incidents"
      pDiv="justify-start items-start sm:justify-between sm:items-center sm:gap-[14px]"
      SIClass="sm:flex hidden justify-center items-center"
      SBDClass="md:block hidden"
      BClass=""
      children="New Incident"
      />
      <Container className="py-7 sm:pt-[200px] pt-[220px]">
        <NewsList/>

      </Container>
    </div>
  )
}


