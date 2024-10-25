import { useContext, useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import { useFilters } from "./hooks/useFilters"
import { CartProvider } from "./context/cart"
import { Cart } from "./components/Cart"


function App() {
  const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </CartProvider>
  )
}

export default App
