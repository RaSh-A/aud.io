import "./App.css";
import Mockman from "mockman-js"
// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import { AudContext } from "./context/AudContext";
import { Landing } from "./pages/LandingPage";
import { Account } from "./pages/Account";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Cart } from "./pages/Cart";

function App() {
  // const { data } = useContext(AudContext)
  // console.log(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products/:productID" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
