import React from 'react'
import { cn } from '../library/utilities/cn'

export const Container = ({className, children}) => {
  return (
    <div className={cn("max-w-[1440px] mx-auto w-full lg:px-[70px] md:px-12 sm:px-6 px-3 font-onest", className)}>
      {children}
    </div>
  )
}
