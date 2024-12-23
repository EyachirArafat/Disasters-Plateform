import { Bell } from "../../Icons";
import { cn } from "../../library/utilities/cn";

export const NotificationBell = ({className}) => {
  return (
    <div className={cn("bg-white hover:bg-slate-100 rounded-full justify-center items-center cursor-pointer border hover:border-accent transition-all duration-300", className)}>
      <div className="relative size-10 flexCC p-1.5">
        <Bell/>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
          1
        </span>
      </div>
    </div>
  
   
  );
};
