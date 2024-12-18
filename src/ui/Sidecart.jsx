import { useSelector } from "react-redux";
import { getCart } from "../store";
import { CartItemCard } from "./CartItemCard";



export function Sidecart() {
  const data = useSelector(getCart);
  // console.log(data.length);
  return (
      <div className={'bg-primary-200 overflow-scroll h-full transition-opacity duration-500 ease-in-out'}>
        {data.map((each) => (
          <CartItemCard key={each.itemid} dataEach={each} />
        ))}
      </div>
  );
}
