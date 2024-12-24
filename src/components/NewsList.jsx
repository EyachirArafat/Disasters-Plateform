import React from "react"
import { ImageDetails } from "./library/data/data"
import { ImageCard } from "./common/ImageCard"
import { StormSky } from "./Icons"

export const NewsList = ()=>{
  return(
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
  )
}