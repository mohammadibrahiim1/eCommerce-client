/* eslint-disable react/jsx-no-undef */
import {
  Button,
  //  Dropdown,
  Navbar,
  TextInput,
} from "keep-react";
import {
  // CaretRight,
  // Gear,
  Heart,
  MagnifyingGlass,
  // Money,
  Phone,
  ShoppingCart,
  // SignOut,
  // SquaresFour,
  User,
} from "phosphor-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            <img src="/images/keep.svg" alt="keep" width="100" height="40" />
          </Navbar.Brand>

          {/* <Navbar.Container
            tag="ul"
            className="lg:flex md:flex  hidden items-center justify-between gap-8 "
          >
            <Dropdown
              className="px-5 text-body-6"
              label="All Category"
              size="sm"
              type="outlineGray"
              dismissOnClick={true}
            >
              <Dropdown.Item
                className="flex gap-2"
                icon={<SquaresFour size={20} color="#5E718D" />}
              >
                <p>Electronics</p>
                <span className="ml-auto">
                  <CaretRight size={20} color="#5E718D" />
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                className="flex gap-2"
                icon={<Gear size={20} color="#5E718D" />}
              >
                <p>Fashion & Beauty</p>
                <span className="ml-auto">
                  <CaretRight size={20} color="#5E718D" />
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                className="flex gap-2"
                icon={<Money size={20} color="#5E718D" />}
              >
                <p>Accessories</p>
                <span className="ml-auto">
                  <CaretRight size={20} color="#5E718D" />
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                className="flex gap-2"
                icon={<SignOut size={20} color="#5E718D" />}
              >
                <p>Vegetable & Fruits</p>
                <span className="ml-auto">
                  <CaretRight size={20} color="#5E718D" />
                </span>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Container> */}

          <Navbar.Container className="hidden lg:block md:block">
            <TextInput
              id="#id-10"
              placeholder="Search anything"
              color="gray"
              sizing="md"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </Navbar.Container>

          <Navbar.Container>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              <Navbar.Link linkName="Home" />
              <Link to={"/shop"}>
                <Navbar.Link linkName="Shop" />
              </Link>
              <Navbar.Link linkName="Others" />
              <Navbar.Link linkName="Blog" />
              <Navbar.Link linkName="Seller" />
            </Navbar.Container>
          </Navbar.Container>

          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Link to={"/"}>
                <Navbar.Link linkName="Home" />
              </Link>
              <Link to="/shop">
                <Navbar.Link linkName="Shop" />
              </Link>
              <Navbar.Link linkName="Others" />
              <Navbar.Link linkName="Blog" />
              <Navbar.Link linkName="Seller" />
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-5">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            >
              <span className="flex justify-center items-center gap-1">
                <>{<Phone size={20} color="#444" />}</>01625619689
              </span>

              <Navbar.Link
                // eslint-disable-next-line react/jsx-no-undef
                icon={<User size={20} color="#444" />}
                iconAnimation={false}
              />
              <Navbar.Link
                // eslint-disable-next-line react/jsx-no-undef
                icon={<Heart size={20} color="#444" />}
                iconAnimation={false}
              />
            </Navbar.Container>

            <Link to={"/cart"}>
              <Button size="xs" type="outlineGray">
                <span>
                  <ShoppingCart size={20} color="#444" />
                </span>
                <span className="ml-1 text-metal-600">Cart $0.00</span>
              </Button>
            </Link>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
      <Navbar.Container className="lg:hidden md:hidden">
        <TextInput
          id="#id-10"
          placeholder="Search anything"
          color="gray"
          sizing="md"
          type="text"
          addon={<MagnifyingGlass size={20} color="#5E718D" />}
          addonPosition="left"
        />
      </Navbar.Container>
    </div>
  );
};

export default Nav;
