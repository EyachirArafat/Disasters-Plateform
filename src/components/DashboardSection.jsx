import React from "react"
import { Container } from "./common/Container"
import { ImageCard } from "./common/ImageCard"
import { NavbarPTwo } from "./common/navbar/Navbar-2"
import { StormSky } from "./Icons"

export const Dashboard = ()=>{
  return(
    <div className="pt-20 w-full">
      <NavbarPTwo  itemTitle="Welcome Back" itemName="Dashboard"/>
      <Container className="">
        <ImageCard 
          image="./image-1.png"
          styleIcon={<StormSky/>}
          styleLabel="Blizzard"
          addTitle="Whitechapel Rd."
          title="Tulare County,  Los Angles, CA 23415"
          price="$1,456,654.00"
        />
      </Container>
      
    </div>
  )
}