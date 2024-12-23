import React from 'react'
import { cn } from '../library/utilities/cn'

export const Container = ({className, children}) => {
  return (
    <div className={cn("max-w-[1440px] mx-auto w-full lg:px-[70px] md:px-12 px-6 font-onest", className)}>
      {children}
    </div>
  )
}
