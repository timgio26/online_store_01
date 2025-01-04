
import { IoMdHome,IoMdBasket,IoMdPerson } from "react-icons/io";
export function MobileFooter(){
    return(
        <div className="flex flex-row md:hidden justify-around px-5 pt-2 pb-4 bg-gradient-to-t from-primary-200 to-primary-100">
            <div><IoMdHome className="text-primary-500" size={20}/></div>
            <div><IoMdBasket className="text-primary-500" size={20}/></div>
            <div><IoMdPerson className="text-primary-500" size={20}/></div>
            {/* <div></div> */}
        </div>
    )
}