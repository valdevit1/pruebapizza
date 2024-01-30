import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Home from "./views/Home";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
import DetailPizza from "./views/DetailPizza";

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<DetailPizza />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
