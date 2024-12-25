import React from 'react'
import { NavbarPTwo } from '../common/navbar/Navbar-2'
import { Container } from '../common/Container'
import { ImageCard } from '../common/ImageCard'
import { StormSky } from '../Icons'
import { BuildingData } from '../library/data/data'
import { ImageCard2 } from '../ImageCard2'

export const LocationsSection = () => {
  return(
    <div className="-z-10 absolute w-full">
      <NavbarPTwo
      className=""
      itemTitle="Incidents - DR-4699 March 2023 Severe Storms"
      iTClass="text-[8px]"
      imgSrc="./naturalIcon/StrongWind.svg"
      itemName="DR-4699 March 2023 Severe Storms"
      pDiv="justify-between items-center gap-[14px]"
      SIClass="xsm:flex xsM:justify-center xsm:items-center hidden"
      SBDClass="sm:flex hidden"
      BClass="md:block hidden"
      children="+ New Location"
      direction="new-location"
      />
      <Container className="py-7 sm:pt-[250px] pt-[270px]">
        <div className='flex lg:flex-nowrap flex-wrap-reverse gap-[94px]'>
          <div className='w-[680px] space-y-5'>
            <div className='border-b py-3'>
              <div className='flex items-center gap-2'>
                <img className='size-[30px] p-1 bg-color1 rounded-full' src="/location.svg" alt="" />
                <div>
                  <p className='text-t12 text-accent'>Location</p>
                  <h3 className='font-bold text-xl'>Tulare County,  Los Angles, CA 23415</h3>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <img className='size-[30px] p-1 bg-color1 rounded-full' src="/location.svg" alt="" />
                <div>
                  <p className='text-t12 text-accent'>Approx. Cost:</p>
                  <h3 className='font-bold text-xl'>$60,607,456.00</h3>
                </div>
              </div>
            </div>
            <div className='border-b py-3'>
              <p className='text-lg font-bold'>Description</p>
              <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
            </div>

            <div className='border-b py-3'>
              <h3 className='text-lg font-bold'>Locations</h3>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-6 ">
                {BuildingData.map((details, index)=>(
                  <div key={index} className="shadow-md p-2 rounded-lg  duration-300 cursor-pointer">
                    <ImageCard 
                      image={details.image}
                      styleIcon={<StormSky/>}
                      styleLabel="Blizzard"
                      addTitle={details.header}
                      title={details.para}
                      price={details.price}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='border-b py-3'>
              <h3 className='text-lg font-bold'>Activities</h3>
              <div className='space-y-2'>
                <ImageCard2 workName="Activities"/>
                <ImageCard2 workName="Activities"/>
              </div>
            </div> 
            <div>
              <h3 className='text-lg font-bold'>Documents</h3>
              <div className='space-y-2'>
                <ImageCard2 workName="Documents"/>
                <ImageCard2 workName="Documents"/>
              </div>
            </div>
            

          </div>
          <div className='max-w-[526px] max-h-[563px] object-cover space-y-5'>
            <p className='text-lg text-accent'>Incident Map</p>
            <img src="/map2.png" alt="" />
          </div>

        </div>
      </Container>
      
    </div>
  )
}
