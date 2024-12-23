import { cn } from "../library/utilities/cn"

export const Button =({children, className})=>{
  return(
    <div className={cn("bg-primary !text-white py-2 px-6 font-bold text-t12 text-nowrap leading-5 rounded-md cursor-pointer hover:bg-pHover hover:scale-105 transition-all duration-300", className)}>
      {children}
    </div>
  )
}