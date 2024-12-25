import React, { useState } from "react";
import { Container } from "../Container";
import { NotificationBell } from "./BellIcon";
import { MenuIcon } from "../../Icons";
import { NavStyle } from "./NavStyles";
import { NavItems } from "../../library/data/data";
import { MobileMenubar } from "./MobileMenubar";
import { cn } from "../../library/utilities/cn";

export const NavbarPOne = ({className}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Container className={cn("px-4 z-z999 border-b border-b-accent/20", className)}>
      <div className="flex justify-between items-center pb-[15px] z-z9999">
        <a href="/">
          <img src="/Logo.svg" alt="logo" />
        </a>

        {/* <div className='gap-9 text-nowrap text-t14 font-bold lg:flex hidden text-accent'>
            {NavItems.map((items, index)=>(
              <button key={index}>{items}</button>
            ))}
          </div> */}

        <div className="gap-9 lg:flex hidden">
          {NavItems.map((items, index) => (
            <NavStyle
              key={index}
              direction={`/${items.toLowerCase().replace(/\s+/g, "-")}`}
              children={items}
            />
          ))}
        </div>

        <div className="flexCC gap-3">
          <NotificationBell className="sm:flex hidden" />

          <button title="User">
            <img className="size-11" src="/user.svg" alt="user" />
          </button>
          <div className="text-accent xl:flex flex-col justify-center items-start hidden">
            <h3 className="text-[16px]  font-semibold leading-4">
              Mohammad Ali
            </h3>
            <p className="text-t14 leading-4">mohammad106685@gmail.com</p>
          </div>
          <button onClick={()=>setIsOpen(!isOpen)}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <div className="text-start" onClick={()=>setIsOpen(!isOpen)}>
        <MobileMenubar className={`${isOpen ? "block" : "hidden"}`}/>
      </div>
    </Container>
  );
};
