import { Container, Stack } from "@mui/material";
import React from "react";
import ItemLists from "./ItemLists";

export const Product_Items = [
  {
    id: 1,
    image: "../../assets/ButterFly.png",
    name: "Butterfly Necklace",
    price: 499,
  },
  {
    id: 2,
    image: "../../assets/Diamond Heart.png",
    name: "DiaHeart Necklace",
    price: 999,
  },
  {
    id: 3,
    image: "../../assets/StarMoon.png",
    name: "StarMoon Necklace",
    price: 499,
  }
];

const ProductItems = () => {
  const itemLists = Product_Items.map((item) => (
    <ItemLists
      key={item.id}
      id={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ));

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {itemLists}
      </Stack>
    </Container>
  );
};

export default ProductItems;
