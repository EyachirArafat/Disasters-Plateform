import React from 'react'

export const ImageCard2 = ({workName}) => {
  const currentDate = new Date();
  return (
    <div className='flex flex-wrap items-center gap-[17px] bg-color1 px-2 py-4 rounded-md'>
      <img className='w-[78px] h-[78px]' src="./image-7.png" alt="building" />
      <div>
        <h3 className='text-lg font-bold'>{workName}</h3>
        <div className='flex gap-2 flex-wrap text-t12 '>
         <p>Location name</p>
         <p>16.12212, -122.1424</p>
        </div>
        <p className='text-lg font-bold'>$1,456,654.00</p>
      </div>
    </div>
  )
}
