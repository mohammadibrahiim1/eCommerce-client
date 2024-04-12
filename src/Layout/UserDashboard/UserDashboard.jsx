/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../Shared/Nav/Nav";
import SideNav from "../../Shared/SideNav/SideNav";

const UserDashboard = () => {
  return (
    <div>
      <Nav></Nav>
      <section className="max-w-screen-2xl  grid grid-cols-6 items-started  mt-3 mx-auto">
        <div className="col-span-1">
          <SideNav></SideNav>
        </div>
        <div className="col-span-5">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
