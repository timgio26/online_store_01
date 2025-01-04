import { prettynum } from "../utils/utils";
export function OrderDetailCard({data:{name,email,phone,created_at:date,address,amount}}) {
    const dateStr = new Date(date).toDateString()
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded shadow-lg">
      <div>

        <div className="mb-4 flex flex-col justify-between">
          <div className="font-semibold text-xs">Customer Name: </div>
          <div>{name}</div>
        </div>
        <div className="mb-4 flex flex-col justify-between">
          <div className="font-semibold text-xs">Email: </div>
          <div>{email}</div>
        </div>
        <div className="mb-4 flex flex-col justify-between">
          <div className="font-semibold text-xs">Phone:</div>
          <div>{phone}</div>
        </div>
        <div className="mb-4 flex flex-col justify-between">
          <div className="font-semibold text-xs">Order Date: </div>
          <div>{dateStr}</div>
        </div>
        <div className="mb-4 flex flex-col justify-between">
          <div className="font-semibold text-xs">Delivery Address: </div>
          <div>{address}</div>
        </div>
        <div className="mb-4 flex flex-col justify-between">
          <div className="font-semibold text-xs">Total: </div>
          <div>{amount&&prettynum(amount)}</div>
        </div>
      </div>
    </div>
  );
}
