import { Check, XIcon } from "lucide-react";
import Link from "next/link";

export const TitleText = ({text, style}: {text: string, style?: string}) => {
  return (
    <h1 className={`font-bold text-gray-800 dark:text-white ${style}`}>
      {text}
    </h1>
  );
};
export const DescText = ({text, style}: {text: string, style?: string}) => {
  return (
    <h1 className={` text-[#71717A] text-sm dark:text-white ${style}`}>
      {text}
    </h1>
  );
};
export const BasicText = ({text, style}: {text: string, style?: string}) => {
  return (
    <h1 className={` text-gray-800 dark:text-white ${style}`}>
      {text}
    </h1>
  );
};

export const TextWithIcon = ({text, icon, style}: {text: string, icon: React.ReactNode, style?: string}) => {
  return (
    <h1 className={`flex gap-1 items-center text-gray-800 dark:text-white ${style}`}>
      {icon}
      {text}
    </h1>
  );
};

export const LinkText = ({text, linkUrl, style}: {text: string, linkUrl: string, style?: string}) => {
  return (
    <Link href={linkUrl} className={`text-[#007AFF] ${style}`}>{text}</Link>
  );
};

export const ActionText = ({title, onCancel, onCheck}:{title:string, onCancel?:()=>void, onCheck?:()=>void })=>{
  return(
            <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex items-center gap-3">
                    <button onClick={onCancel}><XIcon color="#C58B18"/></button>
                    <button onClick={onCheck}><Check color="#C58B18"/></button>
                </div>
            </div>
  )
}