import { ItemButton } from "./ItemButton";
import { prettynum } from "../utils/utils";

export function ItemCard({ data }) {
  // console.log(each)
  return (
    <div className="mx-1 my-1 flex flex-col justify-between items-center gap-2">
      <div className="flex justify-center items-center h-24 w-full border-primary-300 border overflow-hidden rounded-sm">
        <img
          src={data.img_url}
          alt=""
          className="w-full h-full object-cover hover:scale-105 transition ease-in-out delay-75 duration-300"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="font-bold text-gray-800 w-full text-sm">
          {data.product_name}
        </div>
        <div className="w-full">
          <div className="text-gray-600 line-through text-[10px] md:text-xs">
            {prettynum(data.product_price)}
          </div>
          <div className="text-green-600 text-base font-semibold">
            {prettynum(data.product_price - data.discount_price)}
          </div>
        </div>

        <div className="flex flex-row items-center w-full justify-between">
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm">
              {"★".repeat(Math.round(data.product_rating))}
            </span>
            <span className="hidden md:block text-gray-500 text-sm ml-2">
              ({data.product_rating})
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {data.qty_sold / 1000 > 1
              ? Math.floor(data.qty_sold / 1000) + "k+"
              : data.qty_sold}{" "}
            sold
          </div>
        </div>
      </div>
      <ItemButton data={data} className="mt-4" />
    </div>
  );
}
