import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Products } from "./components/Products.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import { FiltersContext } from "./context/filters.jsx";
import { products as InitialProducts } from "./mocks/products.json";
import { useContext, useState } from "react";

function useFilters () {
 
  const {filters, setFilters} = useContext(FiltersContext);
  console.log(filters)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}

function App() {
  const [products] = useState(InitialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);
  
  
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App