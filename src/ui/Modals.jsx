import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useState } from "react";
import { MapContainer,TileLayer,Marker,Popup} from "react-leaflet";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex">
      <Button sx={styleButton} fullWidth onClick={handleOpen}>
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
              <div className="mb-4">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-4">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-4">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-4">
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
              </div>

              <div className="h-40 w-full mb-4">
                <MapContainer
                  className="h-full w-full"
                  center={[-6.1949, 106.82285]}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div>

              <div className="flex flex-row gap-4 justify-center">
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
