import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemCard from './components/ItemCard/ItemCard';
import ProductPage from './components/ProductPage/ProductPage';
import CarouselHolder from './containers/Carousel Holder/CarouselHolder';
import MainItemGrid from './containers/MainItemGrid/MainItemGrid';


function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Header />
    <CarouselHolder />
    <MainItemGrid />
    {/* <ProductPage /> */}
    <Routes>
    <Route path="/items/:id" element = {<ProductPage />}/>
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
