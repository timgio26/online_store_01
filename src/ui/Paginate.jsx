import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import {DATA_PER_PAGE} from '../utils/utils'
import { useSearchParams } from "react-router";

const buttonstyle =  "flex flex-row items-center h-10 bg-primary-500 px-3 text-white rounded-full hover:bg-white hover:text-primary-500 transition-colors"

export function Paginate({count}){
    const [searchParams,setSearchParams]=useSearchParams()
    const curPage = searchParams.get('page')||1
    // console.log(curPage)

    const numOfPages=Math.ceil(count/DATA_PER_PAGE)
    // console.log(numOfPages)

    function handleNextPage(){
        if(parseInt(curPage)===numOfPages)return
        searchParams.set('page',parseInt(curPage)+1)
        setSearchParams(searchParams)
    }

    function handlePrevPage(){
        if(parseInt(curPage)===1)return
        searchParams.set('page',parseInt(curPage)-1)
        setSearchParams(searchParams)
    }



    return(
        <div className="flex justify-end pt-8 border-t-2">
        <div className="flex flex-row w-96 items-center justify-between">
            <div className={buttonstyle} onClick={handlePrevPage} role="button">
                <GrPrevious/>PREV
            </div>
            <div className="font-medium">
                {count&&(curPage-1)*DATA_PER_PAGE+1}-{parseInt(curPage)===numOfPages?count:curPage*DATA_PER_PAGE} OF {count} RESULTS
            </div>
            <div className={buttonstyle} onClick={handleNextPage} role="button">
                NEXT<GrNext/>
            </div>
        </div>
        </div>

    )
}