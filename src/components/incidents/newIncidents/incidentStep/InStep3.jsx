import React, { useEffect, useState } from "react";
import { Container } from "../../../common/Container";
import { GetStarted } from "./GetStarted";
import { SearchIcon } from "../../../common/navbar/SearchIcon";

export const InStep3 = () => {
  const [progress, setProgress] = useState(2);
  const [searchAddress, setSearchAddress] = useState('');
  const [pinpointDamage, setPinpointDamage] = useState('');

  useEffect(()=>{
    if(searchAddress.trim() && pinpointDamage.trim()){
      setProgress(3);
    }else{
      setProgress(2);
    };
  },[searchAddress, pinpointDamage])

  const handleDelete = () => {
    setProgress(2);
    setSearchAddress('')
    setPinpointDamage('')
  };

  const canNavigateNext = searchAddress.trim() && pinpointDamage.trim()
  return (
    <div>
      <Container>
        <GetStarted
          itemTitle="Home - Incidents - New Incident"
          itemName="New Incident"
          progress={progress}
          onDelete={handleDelete}
          BackButton="Back"
          NextButton="Finish"
          goBack="incidents/get-started/step-2"
          goNext={canNavigateNext ? "locations" : null}
        />
        <div className="md:pt-[50px] pt-[40px]">
          <div className="max-w-[753px] max-h-[589px] flex flex-col gap-4 mx-auto">
          <div>
            <h1 className='sm:text-2xl text-xl font-bold'>Where’s the incident?</h1>
            <p className='text-t14 text-accent max-w-[518px]'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
          </div>
            <div className="rounded-lg relative object-cover">
              <img src="/map1.png" alt="map" />
              <div className="flex flex-col gap-2 max-w-[220px] absolute top-2 left-2">
                <SearchIcon 
                PH="Enter incident address or GPS"
                SIClass="flex items-center "
                onChange={(e)=>setSearchAddress(e.target.value)}
                value={searchAddress}
                inClass="sm:text-sm text-[8px] p-2"
                />
                <SearchIcon 
                PH="Pinpoint damage"
                SIClass="flex items-center bg-color1"
                onChange={(e)=>setPinpointDamage(e.target.value)}
                value={pinpointDamage}
                inClass="sm:text-sm text-[8px] p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
