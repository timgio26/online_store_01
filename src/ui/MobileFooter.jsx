import { Link } from "react-router-dom";

import { IoMdHome, IoMdBasket, IoMdPerson } from "react-icons/io";
export function MobileFooter() {
  function handleClickHome() {
    console.log("home");
  }
  return (
    <div className="flex flex-row md:hidden justify-around px-5 pt-2 pb-4 bg-gradient-to-t from-primary-200 to-primary-100">
      <Link to="/">
        <div onClick={handleClickHome}>
          <IoMdHome className="text-primary-500" size={20} />
        </div>
      </Link>
      <Link to="/mycart">
        <div>
          <IoMdBasket className="text-primary-500" size={20} />
        </div>
      </Link>
      <div>
        <IoMdPerson className="text-primary-500" size={20} />
      </div>
      {/* <div></div> */}
    </div>
  );
}
