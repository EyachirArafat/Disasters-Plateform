import { Button } from "../button"
import { Container } from "../Container"
import { SearchIcon } from "./SearchIcon"
import { SortByDropdown } from "./SortByDropdown"

export const NavbarPTwo =({itemName})=>{
  return(
    <Container className='pt-8'> 
      <div className="flex justify-between items-center flex-wrap py-[6px]">
        <div className="">
          <p className="text-t12">Welcome Back</p>
          <p className="font-bold text-2xl ">Dashboard</p>
        </div>
        <div className="flex justify-between items-center gap-[14px]">
          <div className="flexCC">
            <SearchIcon/>
            
          </div>
          <SortByDropdown className='sm:flex hidden'/>
          <Button className='md:block hidden' children="Cypher AI"/>
        </div>
      </div>
    </Container>
  )
}