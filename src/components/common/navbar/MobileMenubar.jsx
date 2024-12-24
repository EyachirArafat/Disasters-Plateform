import { NavItems } from "../../library/data/data"
import { cn } from "../../library/utilities/cn"
import { NavStyle } from "./NavStyles"

export const MobileMenubar =({className})=>{
  return(
    
      <div className={cn("z-z9999", className)}>
        <div className="lg:hidden flex flex-col p-1 sm:p-4 fixed sm:w-1/2 w-full rounded-lg top-[84px] right-0 mx-auto bg-slate-200 shadow-md">
          {NavItems.map((items, index) => (
            <div key={index} className="p-2 active:bg-orange-500 hover:bg-orange-400 group rounded-md">
              <NavStyle
                children={items}
                direction={`./${items.toLowerCase().replace(/\s+/g, "-")}`}
                className="block w-full after:bottom-0 after:content-none"
              />
            </div>
          ))}
        </div>
      </div>
    
  )
}


