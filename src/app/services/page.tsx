
import AboutProcess from "@/components/modules/about-us/about-process";
import AboutService from "@/components/modules/about-us/about-service";
import React from "react";

const page = () => {
  return (
    // <>
    //   {/* <AboutSidebar />
    //   <AboutSidebarSecond /> */}
    //   {/* <ServicesDiagnostics /> */}
    // </>
    <div>
      <AboutService />
      {/* <AboutDiagnostics /> */}
      <AboutProcess />
    </div>
  );
};

export default page;
