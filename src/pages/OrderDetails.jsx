import { useGetOrder } from "../utils/useOrderApi";
import { LoadingContainer } from "../ui/LoadingContainer";
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { OrderDetailCard } from "../ui/OrderDetailCard";

export function OrderDetails() {
  const {state:{newId}} = useLocation()

  const { isLoading, data, error } = useGetOrder(newId);

  const {coordinate,"order#": orderNumber,} = data || {};

  const {lat,lng}= coordinate || {}

  // console.log(coordinate?.keys)
  //
  if (isLoading) return <LoadingContainer />;
  if(error) return <h1>There is an Error</h1>
  return (
    <div className="w-full p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Order {orderNumber}</h1>

      <div className="flex flex-col md:flex-row">
        <OrderDetailCard data={data}/>
        <div className="px-5 w-full md:w-3/6 aspect-square md:aspect-auto">
          <MapContainer
            className="h-full w-full rounded-md"
            center={[lat||-6.1949, lng||106.82285]}//[-6.1949, 106.82285]
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
