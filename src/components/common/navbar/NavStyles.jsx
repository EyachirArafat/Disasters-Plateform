import { NavLink } from "react-router-dom"
import { cn } from "../../library/utilities/cn"

export const NavStyle =({direction, className, children})=>{
  return(
    <div className="relative">
      <NavLink 
      to={direction}
      className={({isActive})=>
        cn("text-nowrap text-t14 hover:text-primary",isActive
          ? `font-bold text-primary after:content-[''] after:absolute after:bottom-[-26px] after:left-0 after:w-full after:h-[2px] after:bg-primary`
          : 'text-nowrap text-t14 font-bold text-accent',className
        )}
      >
        {children}
      </NavLink>
    </div>
  )
}
