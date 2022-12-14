import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";
import CarouselHolder from "./containers/Carousel Holder/CarouselHolder";
import MainItemGrid from "./containers/MainItemGrid/MainItemGrid";
import Cart from "./containers/CartPage/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CarouselHolder />
                <MainItemGrid />
              </>
            }
          />
          <Route path="/items/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
