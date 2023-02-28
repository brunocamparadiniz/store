import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home";
import Navigation from "./components/routes/navigation/navigation";
import SignIn from "./components/routes/signin/signin";


const Shop = () => {
  return (
    <h1>Shopping</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
