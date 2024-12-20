import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export const Card = ({className, children}:{
    className?:string
    children:React.ReactNode
}) => {
  return (
    <div className={twMerge( "overflow-hidden z-0 after:z-10 bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6", className)}>
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
