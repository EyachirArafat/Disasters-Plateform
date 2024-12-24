import { cn } from "../../library/utilities/cn"
import { Button } from "../button"
import { Container } from "../Container"
import { ItemTitle } from "./ItemTitle"
import { SearchIcon } from "./SearchIcon"
import { SortByDropdown } from "./SortByDropdown"

export const NavbarPTwo =({itemName, itemTitle, pDiv, SIClass, SBDClass, BClass, children})=>{
  return(
    <div className="bg-secondary w-full fixed mt-[84px] pb-4 md:pb-5 mb-5 ">

    <Container className='md:pt-6 pt-4 '> 
      <div className="flex justify-between items-center gap-3 flex-wrap py-[6px] z-50">
        <ItemTitle itemTitle={itemTitle} itemName={itemName}/>
        <div className={cn("flex",pDiv)}>
          <div>
            <SearchIcon SIClass={SIClass}/>
            
          </div>
          <SortByDropdown className={SBDClass}/>
          <Button className={BClass} children={children}/>
        </div>
      </div>
    </Container>
    </div>
  )
}