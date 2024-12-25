import { NavLink } from "react-router-dom"
import { cn } from "../library/utilities/cn"

export const Button =({direction ,children, className})=>{
  
  const normalizedDirection = `/${direction
    ?.toLowerCase()
    .replace(/[^a-z0-9\s/-]/g, "")
    .replace(/\s+/g, "-")}`;

    

  return(
    <NavLink to={normalizedDirection} className={cn("bg-primary !text-white py-2 px-6 font-bold text-t12 text-nowrap leading-5 rounded-md cursor-pointer hover:bg-pHover hover:scale-105 transition-all duration-300", className)}>
      {children}
    </NavLink>
  )
}
