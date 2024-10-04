import AboutBanner from "@/components/modules/about-us/about-banner";
import AboutCard from "@/components/modules/about-us/about-card";
import AboutQuote from "@/components/modules/about-us/about-quote";
import Banner from "@/components/modules/common/banner";
import CustomerSatisfaction from "@/components/modules/home-page/customer-satisfaction";
import OurTeam from "@/components/modules/our-team/our-team";
import ServiceHero from "@/components/modules/services/service-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <ServiceHero />
      <AboutQuote />
      <AboutBanner />
      <AboutCard />
      <CustomerSatisfaction />
      <OurTeam />
      <Banner />
    </div>
  );
};

export default page;
