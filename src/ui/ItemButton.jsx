import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart,addItemQty,redItemQty} from "../store";

export function ItemButton({ data }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart).filter((each) => each.itemid===data.id);

  function handlefristadd() {
    const item = {
      itemid: data.id,
      qty: 1,
      unitPrice: data.product_price - data.discount_price,
    };
    dispatch(addItem(item));
  }

  function handlePlus(){
    dispatch(addItemQty(data.id))
  }
  function handleMin(){
    dispatch(redItemQty(data.id))
  }

  return (
    <>
      {!cart.length ? (
        <div className="flex w-full">
          <button
            onClick={handlefristadd}
            className="bg-primary-400 w-full py-1 rounded-3xl text-white h-[40px] hover:bg-primary-500 transition-colors"
          >
            Add To Cart
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center w-full justify-around text-white">
          <button className="bg-primary-400 w-10 h-10 rounded-full hover:bg-primary-500 transition-colors" onClick={handleMin}>-</button>
          <span className="text-gray-800">{cart[0].qty}</span>
          <button className="bg-primary-400 w-10 h-10 rounded-full hover:bg-primary-500 transition-colors" onClick={handlePlus}>+</button>
        </div>
      )}
    </>
  );
}
