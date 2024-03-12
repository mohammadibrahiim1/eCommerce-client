import Header from "../../Components/Header/Header";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import BestDeals from "../../Components/BestDeals/BestDeals";
import ShopWithCategories from "../../Components/ShopWithCategories/ShopWithCategories";
import FeaturesProducts from "../../Components/FeaturesProducts/FeaturesProducts";
import Extras from "../../Components/Extras/Extras";
import Accessories from "../../Components/Accessories/Accessories";
import Advertise from "../../Components/Advertise/Advertise";
import News from "../../Components/News/News";
import ExclusiveItems from "../../Components/ExclusiveItems/ExclusiveItems";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Popup from "../../Components/Popup/Popup";
import DeliveryBoy from "../../Components/DeliveryBoy/DeliveryBoy";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <section className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center bg-[#00a1c92d]   rounded-sm p-6  mt-5 border  border-[#00A2C9]">
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
      <Advertise></Advertise>
      <ExclusiveItems></ExclusiveItems>
      <Newsletter></Newsletter>
      <News></News>
      <DeliveryBoy></DeliveryBoy>
      <Popup></Popup>
    </div>
  );
};

export default Home;
