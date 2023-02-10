import React from "react";
import { Typography, Button, Card } from "@mui/material";
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
      <ul>
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
      </ul>
    );
  
    const open = true;
  
    return (
      <>
        <Modal open={open} onClick={props.onClose}>
          {cartItems}
          <Card>
            <Typography>Total Amount</Typography>
            <Typography>{totalAmount}</Typography>
          </Card>
          <Button onClick={props.onClose}>close</Button>
        </Modal>
      </>
    );
  };
  
  export default Cart;
  