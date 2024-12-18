import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const buttonstyle =  "flex flex-row items-center h-10 bg-primary-500 px-3 text-white rounded-full hover:bg-white hover:text-primary-500 transition-colors"

export function Paginate(){
    return(
        <div className="flex justify-end pt-8 border-t-2">
        <div className="flex flex-row w-80 justify-between items-center">
            <div className={buttonstyle}>
                <GrPrevious/>PREV
            </div>
            <div className="font-medium">
                X-Y OF Z RESULTS
            </div>
            <div className={buttonstyle}>
                NEXT<GrNext/>
            </div>
        </div>
        </div>

    )
}