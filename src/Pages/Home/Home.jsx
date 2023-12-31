import { Button } from "keep-react";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>

      <section>
        <div className="flex justify-between items-center container mx-auto bg-[#FFEDD5] rounded-lg p-6 mt-5">
          <div>
            <h3 className="text-xl font-bold">
              100% Natural Quality Organic Product
            </h3>
            <h6 className="text-md font-semibold text-[#049669]">
              See Our latest discounted products from here and get a special
              discount product
            </h6>
          </div>

          <div>
            <Button
              className="rounded-full bg-[#049669] text-gray-100 px-5 hover:bg-[#047857]  "
              size="sm"
              color="success"
            >
              Shop now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
