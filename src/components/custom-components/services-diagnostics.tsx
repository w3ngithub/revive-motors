import { secureHeapUsed } from "crypto";
import React from "react";
import AboutSidebar from "./about-sidebar";
import AboutSidebarSecond from "./header/about-sidebar-second";

const ServicesDiagnostics = () => {
  return (
    <section className="container">
      <div>
        <h1 className="text-h1 text-customColor-black font-bold my-5">Auto Diagnostics</h1>

        <div className="grid sm:grid-cols-12 border border-red-500">
          <div className="sm:col-span-3 border border-red-500">
            <AboutSidebar />
            <AboutSidebarSecond />
          </div>
          <div className="sm:col-span-8 border border-red-500">car</div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDiagnostics;
