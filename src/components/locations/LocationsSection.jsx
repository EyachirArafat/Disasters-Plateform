import React from 'react'
import { NavbarPTwo } from '../common/navbar/Navbar-2'
import { Container } from '../common/Container'


export const LocationsSection = () => {
  return(
    <div className="-z-10 absolute w-full">
      <NavbarPTwo
      className=""
      itemTitle="Incidents - DR-4699 March 2023 Severe Storms"
      iTClass="gap-0"
      itemName="DR-4699 March 2023 Severe Storms"
      pDiv="justify-between items-center gap-[14px]"
      SIClass="flex justify-center items-center"
      SBDClass="sm:flex hidden"
      BClass="md:block hidden"
      children="Cypher AI"
      direction="cypher-ai"
      />
      <Container className="py-7 sm:pt-[200px] pt-[220px]">
        
      </Container>
      
    </div>
  )
}
