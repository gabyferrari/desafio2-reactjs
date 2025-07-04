import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";
import Products from "./routes/Home/Products";
import Computers from "./routes/Home/Products/Computers";
import Eletronics from "./routes/Home/Products/Eletronics";
import Books from "./routes/Home/Products/Books";
import AboutUs from "./routes/Home/AboutUs";
import NotFound from "./routes/Home/NotFound";

export default function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeIndex />} />
          <Route path="products" element={<Products />}> 
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

