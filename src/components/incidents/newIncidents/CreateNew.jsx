import React from 'react'
import { Container } from '../../common/Container'
import { IncidentsData } from '../../library/data/data'
import { Button } from '../../common/button'

export const CreateNew = () => {
 
  return (
    <Container className="px-0">
     
      <div className='max-w-[815px] md:pt-16 sm:pt-20 xsm:pt-24 pt-60 py-[85px]  max-h-[457px] flex flex-col justify-center items-center m-auto gap-5'>
        <div className='text-center md:px-[72.5px]'>
          <h1 className='text-[22px] md:text-[32px] font-bold'>Let's get started</h1>
          <p className='text-[16px] text-accent leading-6 max-w-[468px]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        </div>
        <div className='flex justify-center items-center'>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-color1 text-black">1</span>
          <span className='md:w-[250px] sm:w-[180px] w-[60px] h-1 bg-color1'></span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-color1 text-black">2</span>
          <span className='md:w-[250px] sm:w-[180px] w-[60px] h-1 bg-color1'></span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-color1 text-black">3</span>
        </div>
        <div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-[55px]'>
            {IncidentsData.map((items, index)=>(
              <div key={index} className='bg-color1 flex md:flex-col flex-row md:w-[235px] w-full md:h-[269px] md:gap-[68px] gap-4 px-5 py-6 rounded-lg'>
                <img className='w-[54px] h-[54px]' src={items.logo} alt={items.para} />
                <div>
                  <h3 className='text-xl font-bold'>{items.title}</h3>
                  <p className='text-t14 text-accent'>{items.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="my-4" direction="incidents/get-started/step-1" children="Get Started"/>
      </div>
      
    </Container>
  )
}
