import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
// import CurrentTitle from "../../Components/CurrentTitle/CurrentTitle";

const Root = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
