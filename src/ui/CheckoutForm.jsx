import { useState } from "react";
import { IoMdPin } from "react-icons/io";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useForm } from "react-hook-form";
import { getCart, getCartValue } from "../store";
import { useSelector } from "react-redux";

export function CheckoutForm({ handleClose }) {
  const [openMap, setOpenMap] = useState(false);
  const [latlng, setlatlng] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const cartVal = useSelector(getCartValue)

  function MapClick() {
    useMapEvents({
      click: (e) => {
        console.log(latlng);
        setlatlng((curstate) => ({
          ...curstate,
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        }));
      },
    });
    return null;
  }

  async function onSubmit(formData) {
    console.log(cartVal)
    // console.log(formData,cartData)
  }

//   console.log(errors);

  return (
    <form action="" className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", { required: true })}
          className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">Name is required</p>
        )}
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: true })}
          className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
                {errors.email?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">Email is required</p>
        )}
      </div>
      <div className="mb-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          {...register("phone", {
            minLength: 5,
            maxLength: 12,
            pattern: /^\d+$/,
            required:true
          })}
          className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
              {errors.phone?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">Phone is required</p>
        )}
      </div>

      {!openMap && (
        <>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              {...register("address", { required: true })}
              className="w-full px-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            ></textarea>
                          {errors.address?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">Address is required</p>
        )}
            <div
              onClick={() => setOpenMap(true)}
              className="mb-5 mt-2 flex flex-row items-center justify-center rounded-full px-4 py-1 bg-primary-400 text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <span>{latlng?.lat ? "Change" : "Add"}</span>
              <IoMdPin />
            </div>
          </div>
        </>
      )}

      {openMap && (
        <>
          <div className="h-40 w-full mt-4 mb-4">
            <MapContainer
              className="h-full w-full"
              center={[-6.1949, 106.82285]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MapClick />
              {latlng?.lat && <Marker position={latlng} />}
            </MapContainer>
          </div>
          <div className="flex justify-center align-middle mb-5">
            <button
              onClick={() => setOpenMap(false)}
              className={`text-center w-full rounded-full px-4 py-1 bg-primary-400 text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                !latlng?.lat ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={!latlng?.lat}
            >
              Confirm
            </button>
          </div>
        </>
      )}

      <div className="flex flex-row gap-4 justify-center pt-4 border-t-2">
        <div>
          <button
            onClick={handleClose}
            className="rounded-full px-4 py-2 bg-primary-100 text-primary-500 shadow-sm hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="rounded-full px-4 py-2 bg-primary-400 text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
