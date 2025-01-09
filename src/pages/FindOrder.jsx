import { useState } from "react";
import { isNumber } from "../utils/utils";
import { useGetOrder2 } from "../utils/useOrderApi";
import { OrderDetailCard } from "../ui/OrderDetailCard";

export function FindOrder() {
  const [order, setOrder] = useState("");

  const {isLoading,data,error,refetch} = useGetOrder2(order)
  // console.log(data)
  // console.log(isLoading)
  console.log(!error)

  function formCheckHandler(e) {
    let value = e.target.value;

    if (value[0] !== "#") {
      value = "#" + value;
    }
    
    if(isNumber(value.slice(1))){
        setOrder(value);
    }else{
        if(value.slice(1)==""){
            setOrder(value);
        }else{
            return
        }
    }
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(order)
    refetch()
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white rounded shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
          Find My Order
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="order"
              className="block text-sm font-medium text-gray-700"
            >
              Order
            </label>
            <input
              type="text"
              id="order"
              value={order}
              onChange={formCheckHandler}
              className="w-full p-2 mt-1 text-gray-900 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-400 rounded-full text-white font-bold h-10 hover:bg-primary-500 transition-colors ease-in"
          >
            Submit
          </button>
        </form>
        {error&&
        <div className="flex justify-center mt-4">

        <h1 className="text-red-700 font-medium">Error : order not found</h1>
        </div>
        
        }
      </div>
      {data&&!error&&
      <OrderDetailCard data={data}/>
      }
    </div>
  );
}
