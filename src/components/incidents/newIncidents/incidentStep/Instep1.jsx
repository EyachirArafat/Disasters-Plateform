import React, { useState } from 'react'
import { Container } from '../../../common/Container'
import { GetStarted } from './GetStarted'
import { describesInData } from '../../../library/data/data'

export const Instep1 = () => {
  const [isSelected, setIsSelected] = useState(null)
  return ( 
    <div className=''>
      <Container >
        <GetStarted itemTitle="Home - Incidents - New Incident" itemName="New Incident"/>

        <div className='md:pt-[230px] sm:pt-[255px] pt-[265px] '>
          <div className='max-w-[753px] max-h-[445px] flex flex-col gap-[25px] mx-auto'>
            <h1 className='text-2xl font-bold'>Which of these best describes the incident?</h1>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[11px]'>
              {describesInData.map((items)=>(
                <div key={items.id} className={`flex justify-start items-start gap-[10px] xsm:px-5 px-2 xsm:flex-row flex-col py-[22px] rounded-lg ${
                  isSelected === items.id
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-primary hover:text-white'
                }`} onClick={()=>setIsSelected(items.id)}>
                  <img className='hover:text-white' src={items.logo} alt={items.name} />
                  <p className='text-wrap'>{items.name}</p>
                </div>
              ))}

            </div>

          </div>
          
        </div>
      </Container>
    </div>
  )
}

