import AboutDiagnostics from "@/components/modules/about-us/about-diagnostics";
import AboutProcess from "@/components/modules/about-us/about-process";
import AboutService from "@/components/modules/about-us/about-service";
import Banner from "@/components/modules/common/banner";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutService />
      <AboutDiagnostics />
      <AboutProcess />
      <Banner />
    </div>
  );
};

export default page;
