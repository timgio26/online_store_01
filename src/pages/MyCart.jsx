
import { BasicModal } from "../ui/Modals";
import { Sidecart } from "../ui/Sidecart";

export function MyCart(){
    return(
        <div className="flex flex-col bg-primary-200 w-full justify-between">

            <Sidecart/>


            <div className="py-3">
            <BasicModal/>
            </div>
        </div>
    )
}