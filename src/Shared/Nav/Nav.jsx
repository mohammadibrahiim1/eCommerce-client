/* eslint-disable react/jsx-no-undef */
import { Button, Navbar, TextInput } from "keep-react";
import {
  Heart,
  MagnifyingGlass,
  Phone,
  ShoppingCart,
  User,
} from "phosphor-react";

const Nav = () => {
  return (
    <div>
      <Navbar Container={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            <img src="/images/keep.svg" alt="keep" width="100" height="40" />
          </Navbar.Brand>

          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 "
          >
            <TextInput
              id="#id-10"
              placeholder="Search anything"
              color="gray"
              sizing="sm"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
              className="w-full"
            />
          </Navbar.Container>

          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
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

            <Button size="xs" type="outlineGray">
              <span>
                <ShoppingCart size={20} color="#444" />
              </span>
              <span className="ml-1 text-metal-600">Cart $0.00</span>
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Nav;
