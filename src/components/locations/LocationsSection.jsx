import React from 'react'
import { NavbarPTwo } from '../common/navbar/Navbar-2'
import { Container } from '../common/Container'


export const LocationsSection = () => {
  return(
    <div className="-z-10 absolute w-full">
      <NavbarPTwo
      className=""
      itemTitle="Incidents - DR-4699 March 2023 Severe Storms"
      iTClass=""
      imgSrc="./naturalIcon/StrongWind.svg"
      itemName="DR-4699 March 2023 Severe Storms"
      pDiv="justify-between items-center gap-[14px]"
      SIClass="xsm:flex xsM:justify-center xsm:items-center hidden"
      SBDClass="sm:flex hidden"
      BClass="md:block hidden"
      children="+ New Location"
      direction="new-location"
      />
      <Container className="py-7 sm:pt-[200px] pt-[220px]">
        <div className='flex flex-wrap-reverse gap-[94px]'>
          <div>
             
          </div>
          <div>
            <img src="/map2" alt="" />
          </div>

        </div>
      </Container>
      
    </div>
  )
}
