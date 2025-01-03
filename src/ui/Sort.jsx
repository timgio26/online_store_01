import { useSearchParams } from "react-router";

export function Sort(){

    const[searchParams,setSearchParams] = useSearchParams();

    const sortBy = searchParams.get('sortBy')||''

    function handleChange(e){
        searchParams.set('sortBy',e.target.value)
        setSearchParams(searchParams)
    }

    return(
        <div className="flex justify-end h-10 px-5 sm:px-0">
            <select name="" id="" className="w-52 px-3" onChange={handleChange} value={sortBy}>
                <option className='text-xs' value="product_rating-desc" >Sort by Rating</option>
                <option className='text-xs' value="qty_sold-desc">Sort by Purchase</option>
                <option className='text-xs' value="product_price-asc" >Sort by Price - Asc</option>
                <option className='text-xs' value="product_price-desc" >Sort by Price - Desc</option>
            </select>
        </div>
    )
}