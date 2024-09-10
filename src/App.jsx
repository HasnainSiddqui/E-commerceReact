import {BrowserRouter , Route , Routes} from "react-router-dom";
import './App.css'
import About from "./pages/about";
import Header from "./pages/header";
import Home from "./pages/home";
import ProductDetail from "./pages/productDetail";

function App() {
 

  return (
    <>

      <BrowserRouter>
      <Header />

      <Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About/>}  />
<Route path="productsCard/:id" element={<ProductDetail />} />
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
