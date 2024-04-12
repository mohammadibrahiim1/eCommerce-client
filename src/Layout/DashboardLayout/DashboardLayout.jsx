/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <section className=" max-w-4xl mx-auto py-32 flex justify-between gap-12">
        <div>Dashboard side nav</div>
        <div>
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
