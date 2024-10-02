import AboutCard from "@/components/custom-components/about-card";
import AboutDiagnostics from "@/components/custom-components/about-diagnostics";
import AboutProcess from "@/components/custom-components/about-process";
import AboutQuote from "@/components/custom-components/about-quote";
import AboutQuoteFirst from "@/components/custom-components/about-quote-first";
import AboutService from "@/components/custom-components/about-service";
import Banner from "@/components/custom-components/Banner";
import GetInTouch from "@/components/custom-components/get-in-touch";
import OurTeam from "@/components/custom-components/our-team";
import ServiceHero from "@/components/custom-components/service-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <ServiceHero />
      <AboutQuote />
      <AboutCard />
      <OurTeam />
      <Banner />
    </div>
    // <div>
    //   {/* <AboutDiagnostics /> */}
    //   <AboutProcess />
    // </div>
  );
};

export default page;
