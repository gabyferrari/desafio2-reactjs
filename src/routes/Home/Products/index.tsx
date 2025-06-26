import { Outlet } from "react-router-dom";
import ProductsBar from "../../../components/ProductsBar";

export default function Products() {

  return (
    <>
      <ProductsBar />
      <Outlet />
    </>
  );
}
