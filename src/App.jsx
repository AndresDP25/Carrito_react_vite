import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Products } from "./components/Products.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import { products as InitialProducts } from "./mocks/products.json";
import { useState } from "react";
import { useFilters } from "./hook/useFilters.js";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";


function App() {
  const [products] = useState(InitialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  
  
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App