import { Link } from "react-router-dom";
import { IoMdHome, IoMdBasket, IoMdPerson } from "react-icons/io";
import {getCartQty} from '../store'
import { useSelector } from "react-redux";



export function MobileFooter() {
  const cartqty = useSelector(getCartQty)

  return (
    <div className="flex flex-row md:hidden justify-around px-5 pt-2 pb-4 bg-gradient-to-t from-primary-200 to-primary-100">
      <Link to="/">
        <div>
          <IoMdHome className="text-primary-500" size={20} />
        </div>
      </Link>
      <Link to="/mycart">
        <div className="relative">
          <IoMdBasket className="text-primary-500" size={20} />
          {cartqty>0&&
          <span className="absolute -top-2.5 -right-2.5 bg-primary-300 w-5 h-5 flex justify-center items-center rounded-full text-xs text-primary-500 font-extrabold">{cartqty}</span>
          }
        </div>
      </Link>
      <div>
        <IoMdPerson className="text-primary-500" size={20} />
      </div>
      {/* <div></div> */}
    </div>
  );
}
