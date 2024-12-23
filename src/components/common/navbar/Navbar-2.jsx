import { Button } from "../button"
import { Container } from "../Container"
import { ItemTitle } from "./ItemTitle"
import { SearchIcon } from "./SearchIcon"
import { SortByDropdown } from "./SortByDropdown"

export const NavbarPTwo =({itemName, itemTitle})=>{
  return(
    <div className="bg-secondary pb-4 md:pb-5 mb-5">

    <Container className='md:pt-8 pt-4 '> 
      <div className="flex justify-between items-center gap-3 flex-wrap py-[6px] z-50">
        <ItemTitle itemTitle={itemTitle} itemName={itemName}/>
        <div className="flex justify-between items-center gap-[14px]">
          <div className="flexCC">
            <SearchIcon/>
            
          </div>
          <SortByDropdown className='sm:flex hidden'/>
          <Button className='md:block hidden' children="Cypher AI"/>
        </div>
      </div>
    </Container>
    </div>
  )
}