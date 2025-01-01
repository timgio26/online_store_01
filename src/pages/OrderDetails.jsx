export function OrderDetails() {
  return (
    <div className="w-full p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Order orderid</h1>
      {/* <div className="mb-4 flex justify-between">
          <div className="font-semibold">Order ID:</div>
          <div>orderid</div>
          </div> */}

      <div className="flex flex-row">
        <div className="bg-white p-4 shadow-md rounded-md w-2/6">
          <div>
            <div className="mb-4 flex justify-between">
              <div className="font-semibold">Status:</div>
              <div>status</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="font-semibold">Customer Name:</div>
              <div>name</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="font-semibold">Email:</div>
              <div>email</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="font-semibold">Phone:</div>
              <div>phone</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="font-semibold">Order Date:</div>
              <div>date</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="font-semibold">Delivery Address:</div>
              <div>shipping address</div>
            </div>
          </div>
        </div>
        <div className="mt-8">mapcomponent</div>
      </div>
    </div>
  );
}
