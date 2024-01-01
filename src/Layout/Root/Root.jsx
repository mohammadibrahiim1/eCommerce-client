import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

const Root = () => {
  return (
    <div>
      <div className="w-[1240px] mx-auto">
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
