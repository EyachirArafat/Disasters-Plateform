import React, { useEffect, useState } from "react"
import { ImageDetails } from "./library/data/data"
import { ImageCard } from "./common/ImageCard"
import { StormSky } from "./Icons"

export const NewsList = ()=>{
  
    const [shuffledImages, setShuffledImages] = useState([...ImageDetails]);
  
    useEffect(() => {
      // Function to shuffle the array [Fisher-Yates Shuffle Algorithm]
      const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        }
        return shuffled;
      };
  
      const interval = setInterval(() => {
        setShuffledImages((prevImages) => shuffleArray(prevImages));
      }, 20000);
  
      return () => clearInterval(interval);
    }, [ImageDetails]);
  return(
      <div className="grid lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-6 ">
        {shuffledImages.map((details, index)=>(
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