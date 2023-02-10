import { Container, Stack } from "@mui/material";
import React from "react";
import ItemLists from "./ItemLists";

export const Product_Items = [
  {
    id: 1,
    image: "../../assets/ButterFly.png",
    name: "ButterFly Necklace",
    price: 499,
  },
  {
    id: 2,
    image: "../../assets/HeartDiamond.png",
    name: "Heart Diamond Necklace",
    price: 999,
  },
  {
    id: 3,
    image: "../../assets/StarMoon.png",
    name: "Star Moon Necklace",
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
