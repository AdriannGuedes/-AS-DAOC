import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import CarDetails from "./pages/carsDetail/CarsDetail";
import EditCar from "./pages/carEdit/CarEdit.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="carDetails/:id" element={<CarDetails/>}/>
        <Route path="car/:id" element={<CarDetails/>}/>
        <Route path="carEdit/:id" element={<EditCar/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;