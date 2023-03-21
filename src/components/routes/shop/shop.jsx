import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import "./shop.scss";

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview /> } />
    </Routes>
  );
};

export default Shop;
