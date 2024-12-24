import React from 'react'

export const ImageCard = ({addTitle, title, price, styleIcon, styleLabel, image}) => {
  return (
    <div className='space-y-2 max-w-[306px] max-h-[337px]'>
      <div className="relative z-zM10 inline-block">
        <img className="max-w-[306px] max-h-[253px] object-cover w-full " src={image} alt="" />
        <div className="absolute flexCC gap-1 top-2 right-2 bg-white p-2 text-t12 rounded-full">
          <div className="flexCC gap-1">
            <span>{styleIcon}</span>
            <span>{styleLabel}</span>
          </div>
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


