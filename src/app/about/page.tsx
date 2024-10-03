
import AboutCard from "@/components/modules/about-us/about-card";
import AboutQuote from "@/components/modules/about-us/about-quote";
import OurTeam from "@/components/modules/our-team/our-team";
import ServiceHero from "@/components/modules/services/service-hero";
import React from "react";

const page = () => {
  return ( 
   
    <div>
      <ServiceHero />
      <AboutQuote />
      <AboutCard />
      {/* <CustomerSatisfaction /> */}
      <OurTeam />
      {/* <Banner /> */}
    </div>
    // <div>
    //   {/* <AboutDiagnostics /> */}
    //   <AboutProcess />
    // </div>
  );
};

export default page;
