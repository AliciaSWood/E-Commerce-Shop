import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CarouselHolder from './containers/Carousel Holder/CarouselHolder';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <CarouselHolder />
    </BrowserRouter>
    </div>
  );
}

export default App;
