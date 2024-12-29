import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { IoMdPin } from "react-icons/io";
import { useSelector } from "react-redux";
import { getCart } from "../store";

const style = {
  borderRadius: "5px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  py: 2,
  px: 4,
};

const styleButton = {
  bgcolor: "#6458ad",
  borderRadius: 9999,
  color: "white",
  mx: "10px",
  my: "3px",
  fontWeight: "Bold",
  height: "40px",
  "&:hover": {
    color: "#6458ad",
    backgroundColor: "white",
  },
};

export function BasicModal() {
  const [open, setOpen] = useState(false);
  const [latlng, setlatlng] = useState({});
  const [openMap, setOpenMap] = useState(false);
  const cartList = useSelector(getCart);
  // console.log(data)

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex">
      <Button
        sx={styleButton}
        fullWidth
        onClick={handleOpen}
        disabled={!cartList.length}
      >
        <div className="flex flex-row gap-5">
          <span>Checkout</span>
          <span>
            <RiShoppingBasketLine size={20} />
          </span>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <form action="" className="w-full">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              {!openMap && (
                <>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Address:
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    ></textarea>
                    <div
                      onClick={() => setOpenMap(true)}
                      className="mb-5 flex flex-row items-center justify-center rounded-full px-4 py-1 bg-primary-400 text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                      className={`text-center w-full rounded-full px-4 py-1 bg-primary-400 text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 ${!latlng?.lat ? 'cursor-not-allowed' : 'cursor-pointer'}`}
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
          </div>
        </Box>
      </Modal>
    </div>
  );
}
