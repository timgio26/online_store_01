import { useParams } from "react-router";
import { useGetOrder } from "../utils/useOrderApi";
import { prettynum } from "../utils/utils";
import { LoadingContainer } from "../ui/LoadingContainer";
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

export function OrderDetails() {
  const {state:{newId}} = useLocation()
  // console.log(newId)

  // const params = useParams();
  // const { id } = params;

  const { isLoading, data, error } = useGetOrder(newId);

  const {
    amount,
    coordinate,
    created_at,
    email,
    name,
    "order#": orderNumber,
    phone,
    address,
  } = data || {};

  const date = new Date(created_at);
  const {lat,lng}= coordinate || {}

  console.log(data)
  //
  if (isLoading) return <LoadingContainer />;
  if(error) return <h1>There is an Error</h1>
  return (
    <div className="w-full p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Order {orderNumber}</h1>

      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-4 shadow-md rounded-md w-full md:w-2/6">
          <div>
            {/* <div className="mb-4 flex justify-between">
              <div className="font-semibold">Status:</div>
              <div>status</div>
            </div> */}
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
              <div>{date.toDateString()}</div>
            </div>
            <div className="mb-4 flex flex-col justify-between">
              <div className="font-semibold text-xs">Delivery Address: </div>
              <div>{address}</div>
            </div>
            <div className="mb-4 flex flex-col justify-between">
              <div className="font-semibold text-xs">Total: </div>
              <div>{prettynum(amount)}</div>
            </div>
          </div>
        </div>
        <div className="px-5 w-full md:w-3/6 aspect-square md:aspect-auto">
          <MapContainer
            className="h-full w-full rounded-md"
            center={[lat, lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <MapClick /> */}
            {lat && <Marker position={{lat,lng}} />}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
