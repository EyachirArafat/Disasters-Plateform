import { NavLink } from "react-router-dom"
import { cn } from "../../library/utilities/cn"
import { Button } from "../button"
import { Container } from "../Container"
import { ItemTitle } from "./ItemTitle"
import { SearchIcon } from "./SearchIcon"
import { SortByDropdown } from "./SortByDropdown"
import { Children } from "react"

export const NavbarPTwo =({itemName, itemTitle, pDiv, SIClass, SBDClass, BClass, children, direction})=>{
  return(
    <div className="bg-secondary w-full fixed mt-[84px] pb-4 md:pb-5 mb-5 z-10">

    <Container className='md:pt-6 pt-4 '> 
      <div className="flex justify-between items-center gap-3 flex-wrap py-[6px] ">
        <ItemTitle itemTitle={itemTitle} itemName={itemName}/>
        <div className={cn("flex ",pDiv)}>
          <div>
            <SearchIcon SIClass={SIClass}/>
            
          </div>
          <SortByDropdown className={SBDClass}/>
          <NavLink
              to={direction}
              className="bg-primary z-z9999 !text-white py-2 px-6 font-bold text-t12 text-nowrap leading-5 rounded-md cursor-pointer hover:bg-pHover hover:scale-105 transition-all duration-300"
            >
              {children}
            </NavLink>
          
        </div>
      </div>
    </Container>
    </div>
  )
}