/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <section className="py-32 flex justify-start gap-12">
        <div>Dashboard side nav</div>
        <div>
          <Outlet>
            
          </Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
