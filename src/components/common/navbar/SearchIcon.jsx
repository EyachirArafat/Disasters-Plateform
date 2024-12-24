import { cn } from "../../library/utilities/cn"

export const SearchIcon =({SIClass})=>{
  return(
    <div className={cn("bg-white pl-2 gap-2 rounded-md", SIClass)}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[18px] w-[18px] text-gray-500 cursor-pointer "
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input type="text" className="text-sm p-2 outline-none focus:border appearance-none rounded-e-md" placeholder="search here"/>
    </div>
  )
}