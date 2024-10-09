import AboutBanner from "@/components/modules/about-us/AboutBanner";
import AboutCard from "@/components/modules/about-us/AboutCard";
import AboutQuote from "@/components/modules/about-us/AboutQuote";
import Banner from "@/components/modules/common/tBanner";
import CustomerSatisfaction from "@/components/modules/home-page/CustomerSatisfaction";
import OurTeam from "@/components/modules/our-team/OurTeam";
import ServiceHero from "@/components/modules/service-page/ServiceHero";

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
