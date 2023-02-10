import React from "react";
import { Typography, AppBar, Toolbar, Badge } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useContext } from "react";
import CartDetails from "../../shop/CartDetails";

const NavBar = (props) => {
    const cartDets = useContext(CartDetails);
    const numberOfCartItems = cartDets.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    return (
        <> 
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }} >
                  Sorelli  
                </Typography>

                <Badge badgeContent={numberOfCartItems} color="error">
                <ShoppingCartRoundedIcon onClick={props.onShowCart}>
              Cart
            </ShoppingCartRoundedIcon>
                </Badge>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default NavBar;