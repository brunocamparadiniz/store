import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home";
import Navigation from "./components/routes/navigation/navigation";
import Authentication from "./components/routes/authentication/authentication";
import Shop from "./components/routes/shop/shop";
import Checkout from "./components/routes/checkout/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
