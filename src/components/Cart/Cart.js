import React from "react";
import { Typography, Button, Card, List, Box } from "@mui/material";
import { useContext } from "react";
import CartDetails from "../../shop/CartDetails";
import CartItem from "./CartItem";
import Modal from "../Shop UI/Modal";

const Cart = (props) => {
    const cartDets = useContext(CartDetails);
    const totalAmount = `₱ ${cartDets.totalAmount}`;
  
    const cartItemRemoveHandler = (id) => {
      cartDets.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
      cartDets.addItem(item);
    };
  
    const cartItems = (
      <List
      sx={{
        width: 650,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 400,
        "& ul": { padding: 0 },
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {cartDets.items.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </Card>
    </List>
  );

  const open = true;

  return (
    <>
      <Modal open={open} onClick={props.onClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cartItems}
          <Card>
            <Typography>Total Amount</Typography>
            <Typography>{totalAmount}</Typography>
          </Card>
          <br />
          <Button onClick={props.onClose} variant="contained">close</Button>
        </Box>
      </Modal>
    </>
  );
};
  export default Cart;
  