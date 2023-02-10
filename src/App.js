import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Items";
import Cart from "./components/Cart/Cart";
import CartSupplier from "./shop/CartSupplier";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCarthandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartSupplier>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <NavBar onShowCart={showCarthandler} />
      <main>
        <Product />
      </main>
    </CartSupplier>
  );
}

export default App;

