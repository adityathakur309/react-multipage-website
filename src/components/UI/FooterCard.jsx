import { memo } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

export const FooterCard =memo(({data}) =>{
    let {icon,title,details} =data;
    let footerIcon = {
        MdPlace:<MdPlace className="text-3xl text-primary"/>,
        IoCallSharp:<IoCallSharp className="text-3xl text-primary"/>,
        TbMailPlus:<TbMailPlus className="text-3xl text-primary"/>,
    }

    return (
        <div className="flex gap-4 items-center flex-wrap">
            <div className="icon">{footerIcon[icon]}</div>
            <div className="flex flex-col gap-1">
                <h3 className="text-xl">{title}</h3>
                <p className="text-white text-lg">{details}</p>
            </div>
        </div>
    )

})