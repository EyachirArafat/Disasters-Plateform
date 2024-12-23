export const ItemTitle = ({itemTitle, itemName}) => {
  return(
    <div>
      <p className="text-t12">{itemTitle}</p>
      <p className="font-bold md:text-2xl ">{itemName}</p>
    </div>
  )
}