import { useDispatch } from "react-redux";
import { deleteItem } from "../store";
import { GetDataItem } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import { prettynum } from "../utils/utils"; 

export function CartItemCard({ dataEach }) {
  const dispatch = useDispatch();

  const {isLoading,isPending,data={},error} = useQuery({
    queryKey: ['productEach',dataEach],
    queryFn: () => GetDataItem(dataEach.itemid),
  });

  function handleRemove() {
    dispatch(deleteItem(dataEach.itemid));
  }

  return (
    <div className={`flex flex-row items-center p-4 border-b border-gray-300 ${isLoading&&'blur-md'}`}>
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={data.img_url}
          alt={data.product_name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="ml-4 flex-grow">
        <p className="font-semibold text-lg">{data.product_name}</p>
        <p className="text-gray-600">
          {dataEach.qty} x {prettynum(data.product_price - data.discount_price)}
        </p>
        <p className="font-semibold text-green-600">
          {prettynum(dataEach.qty * (data.product_price - data.discount_price))}
        </p>
      </div>
      <div
        className="ml-4 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
        onClick={handleRemove}
      >
        ❌
      </div>
    </div>
  );
}
