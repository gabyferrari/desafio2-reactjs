import { Outlet } from "react-router-dom";
import BarContent from "../../../components/BarContent";

export default function Products() {

  return (
    <>
      <BarContent />
      <Outlet />
    </>
  );
}
