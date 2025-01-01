import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../store";
import { CheckoutForm } from "./CheckoutForm";

const style = {
  borderRadius: "5px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
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
  const cartList = useSelector(getCart);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex">
      <Button sx={styleButton} fullWidth onClick={handleOpen} disabled={!cartList.length}>
        <div className="flex flex-row gap-5">
          <span>Checkout</span>
          <span><RiShoppingBasketLine size={20} /></span>
        </div>
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div>
            <CheckoutForm handleClose={handleClose}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
