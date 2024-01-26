import Header from "../../Components/Header/Header";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import BestDeals from "../../Components/BestDeals/BestDeals";
import ShopWithCategories from "../../Components/ShopWithCategories/ShopWithCategories";
import FeaturesProducts from "../../Components/FeaturesProducts/FeaturesProducts";
import Extras from "../../Components/Extras/Extras";
import Accessories from "../../Components/Accessories/Accessories";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <section>
        <div className="flex justify-between items-center container mx-auto bg-[#FFEDD5] rounded-lg p-6 mt-5">
          <div className="flex justify-between items-center gap-2">
            <TbTruckDelivery className="w-8 h-8" />
            <div>
              <h1 className="font-semibold">Fastest Delivery</h1>
              <h6 className="text-xs font-semibold text-gray-600">
                Delivery in 24/H
              </h6>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <TbTruckReturn className="w-8 h-8" />
            <div>
              <h1 className="font-semibold">24 Hours Return</h1>
              <h6 className="text-xs font-semibold text-gray-600">
                100% money-back guarantee
              </h6>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <RiSecurePaymentLine className="w-8 h-8" />
            <div>
              <h1 className="font-semibold">Secure Payment</h1>
              <h6 className="text-xs font-semibold text-gray-600">
                Your money is safe
              </h6>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <BiSupport className="w-8 h-8" />
            <div>
              <h1 className="font-semibold">Support 24/7</h1>
              <h6 className="text-xs font-semibold text-gray-600">
                Live contact/message
              </h6>
            </div>
          </div>
        </div>
      </section>
      <BestDeals></BestDeals>
      <ShopWithCategories></ShopWithCategories>
      <FeaturesProducts></FeaturesProducts>
      <Extras></Extras>
      <Accessories></Accessories>
    </div>
  );
};

export default Home;
