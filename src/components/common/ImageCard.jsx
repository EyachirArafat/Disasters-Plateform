import React from 'react'

export const ImageCard = ({addTitle, title, price, styleIcon, styleLabel, image}) => {
  return (
    <div className='space-y-2'>
      <div className="relative z-zM10 inline-block">
      <img className="" src={image} alt="" />
      <div className="absolute flexCC gap-1 top-2 right-2 bg-white p-2 rounded-full hover:bg-pHover hover:text-white">
        <p>{styleIcon}</p>
        <p>{styleLabel}</p>
      </div>
    </div>

      <div className='space-y-1'>
        <h1 className='font-bold'>{addTitle}</h1>
        <p className='text-[14px] text-accent'>{title}</p>
        <p className='font-bold'>{price}</p>
      </div>
    </div>
  )
}


