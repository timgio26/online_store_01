import { useSelector } from "react-redux";
import { getCart } from "../store";
import { CartItemCard } from "./CartItemCard";
import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router";



export function Sidecart() {
  const data = useSelector(getCart);
  const navigate = useNavigate()

  function shopNowHandler(){
    return(
      navigate('/')
    )
  }
  // console.log(data.length);

  function NoItem(){
    return (
      <div className="w-full flex flex-col justify-center items-center align-middle">
        <IoIosCart size={60} className="text-primary-500"/>
        <h1 className="text-gray-800">no item in cart</h1>
        <button className="block md:hidden mt-3 bg-primary-400 w-1/2 py-1 rounded-3xl text-white h-8 md:h-10 hover:bg-primary-500 transition-colors" onClick={shopNowHandler}>shop now</button>
      </div>
    );
  } 


  return (
      <div className={`${!data.length?"h-full flex justify-center items-center align-middle":"h-fit"} overflow-scroll transition-opacity duration-500 ease-in-out no-scrollbar`}>
        {data.map((each) => (
          <CartItemCard key={each.itemid} dataEach={each} />
        ))}
        {!data.length&&<NoItem/>}
      </div>
  );
}
