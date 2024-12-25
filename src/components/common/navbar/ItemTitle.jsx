import { cn } from "../../library/utilities/cn"

export const ItemTitle = ({itemTitle, itemName, imgSrc, imgAlt, iTClass}) => {
  return(
    <div>
      <p className="text-t12">{itemTitle}</p>
      <div className={cn("flexCC gap-2",iTClass)}>
        <img src={imgSrc} alt={imgAlt} />
        <p className="font-bold md:text-2xl ">{itemName}</p>
      </div>
    </div>
  )
}