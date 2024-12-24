import React, { useState } from "react"
import { Container } from "../common/Container"
import { NavbarPTwo } from "../common/navbar/Navbar-2"
import { CLetter } from "../Icons"
import { ChatBox } from "./chat/ChatBox"
import { NewsList } from "../NewsList"

export const Dashboard = ()=>{
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatBox =()=>{setIsChatVisible(!isChatVisible)}

  return(
    <div className="-z-10 absolute w-full">
      <NavbarPTwo
      className=""
      itemTitle="Welcome Back" 
      itemName="Dashboard"
      pDiv="justify-between items-center gap-[14px]"
      SIClass="flex justify-center items-center"
      SBDClass="sm:flex hidden"
      BClass="md:block hidden"
      children="Cypher AI"
      />
      <Container className="py-7 sm:pt-[200px] pt-[220px]">
        <NewsList/>
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