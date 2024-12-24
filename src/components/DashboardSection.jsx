import React, { useState } from "react"
import { Container } from "./common/Container"
import { ImageCard } from "./common/ImageCard"
import { NavbarPTwo } from "./common/navbar/Navbar-2"
import { StormSky, CLetter } from "./Icons"
import { ImageDetails } from "./library/data/data"
import { ChatBox } from "./chat/ChatBox"

export const Dashboard = ()=>{
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatBox =()=>{setIsChatVisible(!isChatVisible)}

  return(
    <div className=" w-full">
      <NavbarPTwo  itemTitle="Welcome Back" itemName="Dashboard"/>
      <Container className="py-7 sm:pt-[200px] pt-[220px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-6 ">
        {ImageDetails.map((details, index)=>(
          <div key={index} className="shadow-md p-2 rounded-lg  duration-300 cursor-pointer">
            <ImageCard 
              image={details.image}
              styleIcon={<StormSky/>}
              styleLabel="Blizzard"
              addTitle={details.header}
              title={details.para}
              price={details.price}
            />
          </div>
        ))}
        </div>
        <div>
        <button
          onClick={toggleChatBox}
          className="fixed bottom-5 right-5 bg-primary text-white p-4 rounded-full shadow-lg z-50"
        >
          {isChatVisible ? (
          <span  className="text-2xl size-5 font-bold">×</span>
        ) : (
          <span><CLetter/></span>
        )}
          
        </button>
          <ChatBox isVisible={isChatVisible}/>
        </div>
      </Container>
      
    </div>
  )
}