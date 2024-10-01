import AboutDiagnostics from "@/components/custom-components/about-diagnostics";
import AboutProcess from "@/components/custom-components/about-process";
import AboutQuoteFirst from "@/components/custom-components/about-quote-first";
import AboutService from "@/components/custom-components/about-service";
import ServiceHero from "@/components/custom-components/service-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <ServiceHero />
      <AboutQuoteFirst />
    </div>
    // <div>
    //   {/* <AboutDiagnostics /> */}
    //   <AboutProcess />
    // </div>
  );
};

export default page;
