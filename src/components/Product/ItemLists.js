import React, { useContext } from "react";
import ItemsForm from "./ItemsForm";
import CartDetails from "../../shop/CartDetails";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemLists = (props) => {
  const cartDets = useContext(CartDetails);

  const addToCartHandler = (amount) => {
    cartDets.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      amount: amount,
    });
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            height="200"
            image={props.image}
            alt={props.name}
          >
            {/* <img src={props.image} /> */}
          </CardMedia>
          <Typography variant="h6">{props.name}</Typography>
          <Typography>₱ {props.price}</Typography>
        </CardContent>
      </CardActionArea>
      <ItemsForm onAddToCart={addToCartHandler}></ItemsForm>
    </Card>
  );
};

export default ItemLists;
